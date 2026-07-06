import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import fs from 'fs'
import path from 'path'

// Auto-copy images from workspace directory to public/images on start/build
const sourceDir = 'c:/Users/AASTHA/Downloads/ezgif-8c64fca99cec9d96-jpg';
const destDir = 'c:/Users/AASTHA/Downloads/termaweb/website/public/images';

try {
  if (fs.existsSync(sourceDir)) {
    if (!fs.existsSync(destDir)) {
      fs.mkdirSync(destDir, { recursive: true });
    }
    const files = fs.readdirSync(sourceDir);
    let copiedCount = 0;
    files.forEach(file => {
      const ext = path.extname(file).toLowerCase();
      if (['.png', '.jpg', '.jpeg'].includes(ext)) {
        const srcPath = path.join(sourceDir, file);
        const destPath = path.join(destDir, file);
        fs.copyFileSync(srcPath, destPath);
        copiedCount++;
      }
    });
    console.log(`[Vite Config] Auto-copied ${copiedCount} images from workspace to public/images!`);
  }
} catch (err) {
  console.error('[Vite Config] Error auto-copying images:', err);
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
})

