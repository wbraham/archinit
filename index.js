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
        else {
          fs.mkdir(
            informations.project_name + "/Api",
            { recursive: true },
            err => {
              if (err) throw err;
            }
          );
          fs.mkdir(
            informations.project_name + "/Model",
            { recursive: true },
            err => {
              if (err) throw err;
            }
          );
          fs.mkdir(
            informations.project_name + "/Block",
            { recursive: true },
            err => {
              if (err) throw err;
            }
          );
          fs.mkdir(
            informations.project_name + "/Controller",
            { recursive: true },
            err => {
              if (err) throw err;
            }
          );
          fs.mkdir(
            informations.project_name + "/etc",
            { recursive: true },
            err => {
              if (err) throw err;
            }
          );
          fs.mkdir(
            informations.project_name + "/Helper",
            { recursive: true },
            err => {
              if (err) throw err;
            }
          );
          fs.mkdir(
            informations.project_name + "/Setup",
            { recursive: true },
            err => {
              if (err) throw err;
            }
          );
          fs.mkdir(
            informations.project_name + "/Ui",
            { recursive: true },
            err => {
              if (err) throw err;
            }
          );
          fs.mkdir(
            informations.project_name + "/view",
            { recursive: true },
            err => {
              if (err) throw err;
            }
          );
          fs.writeFile(
            informations.project_name + "/composer.json",
            setupComposer,
            err => {
              if (err) throw err;
              console.log("The file has been saved!");
            }
          );
        }
      }
    );
    setTimeout(() => {
      status.stop();
    }, 2000);
  }
};

const setupComposer = (author, projectName, projectDescription) => {
  let composer = {
    name: `${author}/${projectName}`,
    description: projectDescription,
    type: "magento2-module",
    version: "1.0.0",
    license: ["OSL-3.0", "AFL-3.0"],
    require: {
      php: "~5.6.0|7.0.2|7.0.4|~7.0.6"
    },
    autoload: {
      files: ["registration.php"]
    }
  };
  return composer;
};

run();
