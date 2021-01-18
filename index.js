// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What is the title of the application?',
        name: 'title',
      },
      {
        type: 'input',
        message: 'What is the description of this application?',
        name: 'Description',
      },
      {
        type: 'input',
        message: 'What would like in the table of contents?',
        name: 'contents',
      },
      {
        type: 'input',
        message: 'What are the steps required to install this application?',
        name: 'installation',
      },
      {
        type: 'input',
        message: 'What are the instructions and examples for use?',
        name: 'usage',
      },
      {
        type: 'input',
        message: 'Who would you like to list as collaborators for this application?',
        name: 'credits',
      },
      {
        type: 'input',
        message: 'What is the license for this application?',
        name: 'license',
      },

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    console.log(data); 
    fs.writeFile(fileName, `Title: ${data.title} \nDescription: ${data.description} \nTable of Contents: ${data.contents} \nInstallation: ${data.installation} \n Installation: ${data.installation} \nUsage: ${data.usage} \nCredits: ${data.credits} \nLicense: ${data.license}`, (err) =>
        err ? console.error(err) : console.log('Success!')
    );
}

// TODO: Create a function to initialize app
function init() {

    writeToFile('README.md', data)
}

// Function call to initialize app
init();
