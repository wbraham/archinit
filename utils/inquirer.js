const inquirer = require("inquirer");
const files = require("./files");

module.exports = {
  askProjectInformations: () => {
    const questions = [
      {
        name: "project_name",
        type: "input",
        message: "Enter your Magento 2 module name:",
        validate: function(value) {
          if (value.length) {
            return true;
          } else {
            return "Please enter a valid name for your awesome Magento 2 module.";
          }
        }
      },
      {
        name: "author",
        type: "input",
        message: "Enter your name:",
        validate: function(value) {
          if (value.length) {
            return true;
          } else {
            return "Please enter your name.";
          }
        }
      }
    ];
    return inquirer.prompt(questions);
  }
};
