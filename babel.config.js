module.exports = {
  plugins: [
    ["@babel/plugin-transform-modules-umd", {
      exactGlobals: true,
      globals: {
        index: 'BulStem'
      }
    }]
  ],
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          node: 'current',
        },
      },
    ],
  ],
};
