// Packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// Array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What is your name?',
        name: 'name',
      },
      {
        type: 'input',
        message: 'What is your email?',
        name: 'email',
      },
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
        name: 'contributing',
      },
      {
        type: 'list',
        message: 'What is the license for this application?',
        name: 'license',
        choices: [
            'MIT',
            'ISC',
            'GNU',
            'Apache',
            'Mozilla',
        ],
      },
      {
        type: 'input',
        message: 'What tests would you like to run for this application?',
        name: 'tests',
      },
      {
        type: 'input',
        message: 'What would you like to list as next steps for this application?',
        name: 'nextSteps',
      },

];



// Function to write README file
function writeToFile(fileName, data) {
    console.log(data); 
    fs.writeFile(fileName, data, err => {
        err ? console.error(err) 
        : console.log('Success! README has been generated!')
    });

    // We don't need to use this functionality because we passed the data to this function through the generateMarkdown function using the data parameter:

    // fs.writeFile(fileName, `Name: ${data.name} \nUsername: ${data.username} \nTitle: ${data.title} \nDescription: ${data.description} \nTable of Contents: ${data.contents} \nInstallation: ${data.installation} \n Installation: ${data.installation} \nUsage: ${data.usage} \nCredits: ${data.credits} \nLicense: ${data.license} \nNext Steps: ${data.nextSteps} \nAuthor: ${data.author}`, (err) =>
    //     err ? console.error(err) : console.log('Success!')
    // );
}

// Function to initialize app
function init() {
    inquirer.prompt(questions).then((response) => {
    console.log(response);
    writeToFile('README!.md', generateMarkdown({...response}));

    });
}

// Function call to initialize app
init();
