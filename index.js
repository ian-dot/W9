const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");
const api = require("./utils/api");


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


function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, function(err){
        if (err){
            console.error(err);
        }
    });
}

async function init() {
    console.log("Welcome to the README Generator!")
    try {
        const answers = await promptUser();
        const user = await api.getUser(answers.GitHubUsername);
        const readMe = generateMarkdown(answers, user);
        writeToFile("GeneratedREADME.md", readMe);
        console.log("**README file successfully created!**");
        
    }catch(err) {
        console.log(err);
        
    }
    

}

init();