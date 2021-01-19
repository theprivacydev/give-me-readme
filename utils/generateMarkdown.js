// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// Generate markdown for README
function generateMarkdown(data) {
return `

# ${data.title}

## Description
${data.description}

## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contributing](#contributing)
  - [License](#license)
  - [Next Steps](#next-steps)
  - [Tests](#tests)
  - [Author](#author)


## Installation
${data.installation}

## Usage
${data.usage}

## Contributing
${data.contributing}

## License
${data.license}

## Tests
${data.tests}

## Next Steps
${data.nextSteps}

## Author
* ${data.name}
* Email: ${data.email}

`;
}

module.exports = generateMarkdown;