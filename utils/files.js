const fs = require("fs");
const path = require("path");

module.exports = {
  getCurrentDirectoryBase: () => {
    return path.basename(process.cwd());
  },

  directoryExists: filePath => {
    try {
      const path = fs.statSync(filePath);
      console.log(path, path.isDirectory());
      return path.isDirectory();
    } catch (err) {
      return false;
    }
  }
};
