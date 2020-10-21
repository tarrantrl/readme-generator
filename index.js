// require inquirer
const inquirer = require("inquirer");
// require fs
const fs = require("fs");
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
    },
    {
        type: "input",
        name: "install",
        message: "Please enter installation instructions for your project.",
    },
    {
        type: "input",
        name: "usage",
        message: "Please enter usage information for your project.",
    },
    {
        type: "input",
        name: "contributing",
        message: "Please enter contribution guidelines for your project.",
    },
    {
        type: "input",
        name: "tests",
        message: "Please enter test instructions for your project.",
    },

    {
        type: "input",
        name: "github",
        message: "Please enter your GitHub username.",
    },
    {
        type: "input",
        name: "email",
        message: "Please enter your email.",
    },

];

// function to write README file
function writeToFile(fileName, data) {
    return new Promise((resolve, reject) => {
        fs.writeFile(fileName, data, err => {
            if (err){
                reject(err);
                return;
            }
            resolve({
                ok: true,
                message: "File created!",
            })
        })
    });
}

// function to initialize program
function init() {
    return inquirer
    .prompt(questions)
    .then(data => {
        writeToFile('./dist/readme.md', generateMarkdown(data));
    });
}

// function call to initialize program
init();
