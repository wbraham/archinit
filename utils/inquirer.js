const inquirer = require("inquirer");
const files = require("./files");

module.exports = {
  askProjectInformations: () => {
    const questions = [
      {
        type: "list",
        name: "technology",
        message: "Preferred technology:",
        choices: ["Magento 2 Module", "ReactJS", "NodeJS"],
        default: "Magento 2 Module"
      },
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
