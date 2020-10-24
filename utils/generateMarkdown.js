function generateLicenseDesc(license){
  // if a license is selected, describe it
  if (license !== 'None'){
    return `This project is covered under the ${license} license.`;
  } 
  // if no license is selected, then say so
  else{
    return 'This project is not covered under a specific license.';
  }
}

function generateLicense(license) {
  // takes the name of the license, like 'MIT', and returns a link to it
  // like ![GitHub license](https://img.shields.io/badge/license-${MIT}-blue.svg)
  // ["MIT", "APACHE 2.0", "GPL 3.0", "BSD 3", "None"]
  if (license == "MIT") {
    return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
  } else if (license == "APACHE 2.0"){
    return `[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`;
  } else if (license == "GPL 3.0"){
    return `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`;
  }
  else if (license == "BSD 3"){
    return `[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)`;
  } else {
    // if no license is selected, it returns an empty string
    return ''
  } 
}

// function to generate markdown for README
function generateMarkdown(data) {
  // use the data from inquirer to render the README file
  return `# ${data.title}
  
${generateLicense(data.license)}

## Description

${data.description}

## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [Contributing](#contributing)
* [Test Instructions](#test-instructions)
* [License](#license)
* [Questions](#questions)

## Installation

${data.install}

## Usage

${data.usage}

## Contributing

${data.contributing}

## Test Instructions

${data.tests}

## License

${generateLicenseDesc(data.license)}

## Questions

Questions? Contact us [via email](mailto:${data.email}). You can also visit us on [GitHub](https://github.com/${data.github}).
`;
}

module.exports = generateMarkdown;
