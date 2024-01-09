import mdx from "@mdx-js/rollup";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
	base: "/content-guide/",
	plugins: [
		{
			enforce: "pre",
			...mdx({
				providerImportSource: "@mdx-js/react",
			}),
		},
		react(),
	],
});
