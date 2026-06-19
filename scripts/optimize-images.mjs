// Converts public/projects/*.png to optimized WebP covers + full images.
// Cover: 720px wide (grid display). Full: 1600px max (lightbox).
import sharp from 'sharp'
import { readdir, mkdir } from 'node:fs/promises'
import { fileURLToPath } from 'node:url'
import path from 'node:path'

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const srcDir = path.join(root, 'public', 'projects')
const outDir = path.join(root, 'public', 'projects', 'opt')

await mkdir(outDir, { recursive: true })

const files = (await readdir(srcDir)).filter((f) => /\.png$/i.test(f))

for (const file of files) {
  const base = file.replace(/\.png$/i, '')
  const input = path.join(srcDir, file)

  const cover = await sharp(input)
    .resize({ width: 720, withoutEnlargement: true })
    .webp({ quality: 72 })
    .toFile(path.join(outDir, `${base}.cover.webp`))

  const full = await sharp(input)
    .resize({ width: 1600, withoutEnlargement: true })
    .webp({ quality: 80 })
    .toFile(path.join(outDir, `${base}.webp`))

  const meta = await sharp(path.join(outDir, `${base}.cover.webp`)).metadata()
  console.log(
    `${file}: cover ${(cover.size / 1024).toFixed(0)}KB (${meta.width}x${meta.height}), full ${(full.size / 1024).toFixed(0)}KB`,
  )
}

console.log(`\nDone. ${files.length} images -> ${path.relative(root, outDir)}`)
