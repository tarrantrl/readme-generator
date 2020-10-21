// require inquirer
const inquirer = require("inquirer");
// require utility function
const generateMarkdown = require('./utils/generateMarkdown');

// array of questions for user
//the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
const questions = [
    {
        type: "input",
        name: "title",
        message: "What is the title of your project?",
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log("Please enter the title of your project!");
                return false;
            }
        }
    },
    {
        type: "input",
        name: "description",
        message: "Please enter a description of your project.",
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log("Please enter a description of your project.");
                return false;
            }
        }
    },
    {
        type: "input",
        name: "install",
        message: "Please enter installation instructions for your project.",
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log("Please enter installation instructions for your project.");
                return false;
            }
        }
    },
    {
        type: "input",
        name: "usage",
        message: "Please enter usage information for your project.",
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log("Please enter usage information for your project.");
                return false;
            }
        }
    },
    {
        type: "input",
        name: "contributing",
        message: "Please enter contribution guidelines for your project.",
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log("Please enter contribution guidelines for your project.");
                return false;
            }
        }
    },
    {
        type: "input",
        name: "tests",
        message: "Please enter test instructions for your project.",
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log("Please enter test instructions for your project.");
                return false;
            }
        }
    },

    {
        type: "input",
        name: "github",
        message: "Please enter your GitHub username.",
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log("Please enter your GitHub username.");
                return false;
            }
        }
    },
    {
        type: "input",
        name: "email",
        message: "Please enter your email.",
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log("Please enter your email.");
                return false;
            }
        }
    },

];

// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {
    return inquirer
    .prompt(questions)
    .then(data => {
        console.log(generateMarkdown(data));
    });
}

// function call to initialize program
init();
