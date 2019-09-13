const fs = require("fs");

module.exports = {
  directoryExists: filePath => {
    try {
      const path = fs.statSync(filePath);
      console.log(path, path.isDirectory());
      return path.isDirectory();
    } catch (err) {
      return false;
    }
  },
  techSupported: tech => {
    if (tech == "Magento 2 Module") {
      return true;
    } else {
      return false;
    }
  }
};
