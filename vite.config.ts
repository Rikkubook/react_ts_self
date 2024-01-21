import fs from "fs";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
// https://vitejs.dev/config/

// 根目錄下所有的 HTML 文件
const htmlFiles = fs.readdirSync("./").filter((file) => file.endsWith(".html"));

// 生成输入配置
const inputConfig = {};
for (const file of htmlFiles) {
  const name = path.basename(file, path.extname(file));
  inputConfig[name] = file;
}

export default defineConfig({
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
  plugins: [react()],
  build: {
    outDir: "dist",
    assetsInlineLimit: 0, // inline icon 不轉為base64
    emptyOutDir: true,
    rollupOptions: {
      input: inputConfig,
    },
  },
});
