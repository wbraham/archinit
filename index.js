const chalk = require("chalk");
const clear = require("clear");
const figlet = require("figlet");
const files = require("./utils/files");
const inquirer = require("./utils/inquirer");

clear();
console.log(
  chalk.green(figlet.textSync("ARCHINIT", { horizontalLayout: "full" }))
);

const run = async () => {
  const informations = await inquirer.askProjectInformations();
  if (files.directoryExists(informations.project_name)) {
    console.log(chalk.red("Module already exists!"));
    process.exit();
  }
};

run();
