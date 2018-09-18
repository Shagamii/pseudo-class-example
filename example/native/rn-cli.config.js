const path = require("path");
const blacklist = require("metro/src/blacklist");
const fs = require("fs");

const workspaces = ["../.."]

module.exports = {
  extraNodeModules: {
    "react-native": path.resolve(__dirname, "node_modules/react-native"),
  },
  getBlacklistRE() {
    return blacklist(
      workspaces.reduce((acc, workspacePath) => {
        return acc.concat([
          new RegExp(
            path.join(__dirname, workspacePath, "node_modules", "react-native", ".*")
          ),
          new RegExp(
            path.join(__dirname, workspacePath, "node_modules", ".*", "react-native", ".*")
          ),
        ]);
      }, [])
    );
  },
  getProjectRoots() {
    return [__dirname, path.resolve(__dirname, "..", "..")];
  }
};