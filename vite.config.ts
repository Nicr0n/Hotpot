import { defineConfig } from "vite";
import { fresh } from "@fresh/plugin-vite";
import tailwindcss from "@tailwindcss/vite";
import svgr from "vite-plugin-svgr";

export default defineConfig({
  plugins: [
    fresh(),
    tailwindcss(),
    svgr({
      include: "**/*.svg?react",
    }),
  ],
});
