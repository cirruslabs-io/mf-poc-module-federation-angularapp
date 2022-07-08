const {
  shareAll,
  withModuleFederationPlugin,
} = require("@angular-architects/module-federation/webpack");

module.exports = withModuleFederationPlugin({
  name: "MF_ANGULAR",
  filename: "remoteEntry.js",
  exposes: {
    "./angularModule": "./src/app/app.module.ts",
    // "./angularModule": "./src/app/views/projectlists/projectlists.component.ts",
  },

  shared: {
    ...shareAll({
      singleton: true,
      strictVersion: true,
      requiredVersion: "auto",
    }),
  },
});
