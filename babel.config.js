module.exports = function (api) {
  api.cache(true);

  const presets = ["next/babel"];

  const plugins = [

    [
      require.resolve("babel-plugin-module-resolver"),
      {
        root: ["./src"],
        extensions: [".js", ".jsx", ".ts", ".tsx", ".gql"],
        stripExtensions: [".js", ".jsx", ".ts", ".tsx", ".gql"],
      },
    ],
  ];

  return {
    presets,
    plugins,
  };
};
