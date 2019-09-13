const chalk = require("chalk");
const clear = require("clear");
const figlet = require("figlet");
const files = require("./utils/files");
const inquirer = require("./utils/inquirer");
const CLI = require("clui");
const fs = require("fs");
const path = require("path");
const Spinner = CLI.Spinner;

clear();
console.log(
  chalk.green(figlet.textSync("ARCHINIT", { horizontalLayout: "full" }))
);

const run = async () => {
  const informations = await inquirer.askProjectInformations();
  if (files.techSupported(informations.technology)) {
    if (files.directoryExists(informations.project_name)) {
      console.log(chalk.red("Module already exists!"));
      process.exit();
    } else {
      const status = new Spinner("Creating project structure...");
      status.start();
      fs.mkdir(
        path.basename(informations.project_name),
        { recursive: true },
        err => {
          if (err) throw err;
        }
      );
      setTimeout(() => {
        status.stop();
      }, 2000);
    }
  } else {
    console.log(chalk.red("Not yet supported!"));
    process.exit();
  }
};

run();
