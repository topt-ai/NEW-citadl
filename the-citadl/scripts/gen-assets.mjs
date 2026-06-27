import sharp from 'sharp';
import { readFileSync, writeFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const pub = join(__dirname, '..', 'public');

const faviconSvg = readFileSync(join(pub, 'favicon.svg'));
const ogSvg = readFileSync(join(__dirname, 'og-image.svg'));

// apple-touch-icon: extra padding so the C doesn't touch edges on iOS
const appleSvg = Buffer.from(`<svg width="180" height="180" viewBox="0 0 180 180" xmlns="http://www.w3.org/2000/svg">
  <rect width="180" height="180" rx="40" fill="#1B2A4A"/>
  <path d="M120 56 A34 34 0 1 0 120 124" fill="none" stroke="#F5F3EE" stroke-width="15" stroke-linecap="round"/>
</svg>`);

async function pngFrom(svg, size) {
  return sharp(svg, { density: 384 }).resize(size, size, { fit: 'contain' }).png().toBuffer();
}

// Build a multi-size .ico from PNG-compressed entries (ICO supports embedded PNG)
function buildIco(entries) {
  const header = Buffer.alloc(6);
  header.writeUInt16LE(0, 0);   // reserved
  header.writeUInt16LE(1, 2);   // type: icon
  header.writeUInt16LE(entries.length, 4);
  const dir = Buffer.alloc(16 * entries.length);
  let offset = 6 + dir.length;
  const bufs = [];
  entries.forEach((e, i) => {
    const b = 16 * i;
    dir.writeUInt8(e.size >= 256 ? 0 : e.size, b);      // width
    dir.writeUInt8(e.size >= 256 ? 0 : e.size, b + 1);  // height
    dir.writeUInt8(0, b + 2);                            // palette
    dir.writeUInt8(0, b + 3);                            // reserved
    dir.writeUInt16LE(1, b + 4);                         // color planes
    dir.writeUInt16LE(32, b + 6);                        // bpp
    dir.writeUInt32LE(e.data.length, b + 8);            // size
    dir.writeUInt32LE(offset, b + 12);                  // offset
    offset += e.data.length;
    bufs.push(e.data);
  });
  return Buffer.concat([header, dir, ...bufs]);
}

const p16 = await pngFrom(faviconSvg, 16);
const p32 = await pngFrom(faviconSvg, 32);
writeFileSync(join(pub, 'favicon-16x16.png'), p16);
writeFileSync(join(pub, 'favicon-32x32.png'), p32);
writeFileSync(join(pub, 'apple-touch-icon.png'), await pngFrom(appleSvg, 180));
writeFileSync(join(pub, 'favicon.ico'), buildIco([{ size: 16, data: p16 }, { size: 32, data: p32 }]));

await sharp(ogSvg, { density: 144 }).resize(1200, 630).png().toFile(join(pub, 'og-image.png'));

console.log('Generated: favicon-16/32.png, apple-touch-icon.png, favicon.ico, og-image.png');
