const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");



const questions = [
    {
        type: "input",
        name: "GitHubUsername",
        message: "Type in your GitHub username"
    },
    {
        type: "input",
        name: "email",
        message: "Type in your email"
    },
    {
        type: "input",
        name: "ProjectTitle",
        message: "What is your Project Title name?"
    },
    {
        type: "input",
        name: "ProjectDescription",
        message: "Write a brief description of your project"
    },
    {
        type: "input",
        name: "Installation",
        message: "What are the steps to install your application?"
    },
    {
        type: "input",
        name: "Usage",
        message: "Enter some examples of how your project is used"
    },
    {
        type: "list",
        name: "License",
        message: "Choose a license for your project",
        choices: ["Apache", "GNU GPL v3", "Mozilla", "MIT"]
    },
    {
        type: "input",
        name: "Contributors",
        message: "How many contributors will there be on your project?",
        validate: validateContributors
    },
    {
        type: "input",
        message: "Test: please write tests and examples on how to run them",
        name: "test", //user input stored here
      },
    {
        type: "input",
        name: "FAQ1",
        message: "Enter contact info to reach you in case of having questions"
    }

];

function validateContributors(num)
{
   var reg = /^\d+$/;
   return reg.test(num) || "Please enter a valid number";
}

function promptUser(){
    return inquirer.prompt(questions)
}

// Function to write the README
function writeToFile(fileName, data) {
    fs.writeFile(fileName, generateMarkdown(data), function(err){
        if (err) throw err;
        console.log("It is saved");
    });
}

// Function to initialize the app
function init() {
    inquirer.prompt(questions).then(response => {
        const fileName = 'generatedREADME.md';
        writeToFile(fileName, response);
    });
}

init();