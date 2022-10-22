const path = require("path");
const resolve = (pathname) => path.resolve(__dirname, pathname);
const CracoLessPlugin = require('craco-less');

module.exports = {
	// less
	plugins: [
		{
			plugin: CracoLessPlugin,
		},
	],
  webpack: {
    extensions:['.js', '.jsx', '.tsx', '.less'],
    alias: {
      "@": resolve("src"),
      "components": resolve("src/components"),
      "utils": resolve("src/utils"),
    },
  },
};
