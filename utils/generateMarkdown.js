// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string

const licenses = {
  MIT: {
    badge: '![License: MIT](https://img.shields.io/badge/License-MIT-9cf)',
    link: '[MIT](https://opensource.org/licenses/MIT)',
  },
  Apache: {
    badge: '![License: Apache](https://img.shields.io/badge/License-Apache--2.0-9cf)',
    link: '[Apache](https://opensource.org/licenses/Apache-2.0)',
  },
  ISC: {
    badge: '![License: ISC](https://img.shields.io/badge/License-ISC-9cf)',
    link: '[ISC](https://opensource.org/licenses/ISC)',
  },
  GNU: {
    badge: '![License: GNU](https://img.shields.io/badge/License-GNU-9cf)',
    link: '[GNU](https://opensource.org/licenses/gpl-license)',
  },
  Mozilla: {
    badge: '![License: Mozilla](https://img.shields.io/badge/License-Mozilla-9cf)',
    link: '[Mozilla](https://opensource.org/licenses/MPL-2.0)',
  },
}

function renderLicenseBadge(license) {
  console.log(licenses[license].badge);
  return licenses[license].badge;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  console.log(licenses[license].link);
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

## Questions
For additional questions please contact:
* ${data.name}
* Email: ${data.email}
* ${data.git}
`;
}

module.exports = generateMarkdown;