// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string

const licenses = {
  MIT: {
    badge: '[!License: MIT](https://img.shields.io/badge/License-MIT-9cf)',
    link: '[MIT](https://opensource.org/licenses/MIT)',
  },
  Apache: {
    badge: '[!License: MIT](https://img.shields.io/badge/License-MIT-9cf)',
    link: '[MIT](https://opensource.org/licenses/MIT)',
  },
  ISC: {
    badge: '[!License: MIT](https://img.shields.io/badge/License-MIT-9cf)',
    link: '[MIT](https://opensource.org/licenses/MIT)',
  },
  GNU: {
    badge: '[!License: MIT](https://img.shields.io/badge/License-MIT-9cf)',
    link: '[MIT](https://opensource.org/licenses/MIT)',
  },
  Mozilla: {
    badge: '[!License: MIT](https://img.shields.io/badge/License-MIT-9cf)',
    link: '[MIT](https://opensource.org/licenses/MIT)',
  },
}

function renderLicenseBadge(license) {
  return licenses[license].badge;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  return licenses[license].link;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  const licenseSection = `${renderLicenseBadge(license)}\n${renderLicenseLink(license)}`;
  return licenseSection
}

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
${renderLicenseSection(data.license)}

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