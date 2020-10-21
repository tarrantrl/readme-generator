// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  
## Description

${data.description}

## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [Contribution Guidelines](#contribution-guidelines)
* [Test Instructions](#test-instructions)
* [License](#license)
* [Questions](#questions)

## Installation

${data.install}

## Usage

${data.usage}

## Contribution Guidelines

${contributing}

## Test Instructions

${tests}

## Questions


`;
}

module.exports = generateMarkdown;
