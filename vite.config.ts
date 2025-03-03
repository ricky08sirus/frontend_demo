// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'
// import svgr from "vite-plugin-svgr";

// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react(), svgr()],
// })

import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");
  return {
    plugins: [react(), svgr()],
    define: {
      "process.env": env,
    },
  };
});
