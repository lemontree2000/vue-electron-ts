module.exports = {
  pluginOptions: {
    electronBuilder: {
      nodeIntegration: true,
      preload: "./src/main/preload/index.ts",
    },
  },
};
