function renderLicenseBadge(License) {
 
    switch (License) {
        case "":
            return "";
            break;

        case "MIT":
            return `[![License](https://img.shields.io/github/license/DAVFoundation/captain-n3m0.svg?style=flat-square)]${renderLicenseLink(License)}`;
            break;

        case "Apache":
            return `[![License](https:img.shields.io/badge/License-Apache%202.0-blue.svg)]${renderLicenseLink(License)}`;
            break;

        case "Mozilla":
            return `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)]${renderLicenseLink(License)}`;
            break;

        case "GNU GPL v3":
            return `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)]${renderLicenseLink(License)}`;
            break;
        
        default:
            console.log('default');

        
    }
   
}
  
// Function returns the license link

function renderLicenseLink(License) {

if (License === "MIT") {
    return `(https://github.com/DAVFoundation/captain-n3m0/blob/master/LICENSE)`;
} else if (License === "Apache") {
    return `(https://opensource.org/licenses/Apache-2.0)`;
} else if (License === "Mozilla") {
    return `(https://opensource.org/licenses/MPL-2.0)`;
} else if (License === "GNU GPL v3") {
    return `(https://www.gnu.org/licenses/gpl-3.0)`;
}
}

// Function returns the license section of README

function renderLicenseSection(License) {
if (License == "") {
    return "";
} 
return `
  ## License
  The license used for this project: ${License}`;
}

function generateMarkdown(answers, user) {
    return `
  ${renderLicenseBadge(answers.License)}

  # ${answers.ProjectTitle}
  ## Description 
  ${answers.ProjectDescription}
  ---
  ## Table of Contents
  ---
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Credits](#credits)
  * [Badges](#badges)
  * [FAQ](#faq)
  * [Contributing](#contributing)
  ---
  ## Installation
  ${answers.Installation}
  ---
  ## Usage 
  ${answers.Usage}
  ---  
  ${renderLicenseSection(answers.License)}
  ---
  ## Credits
  ${answers.Contributors} Contributors
  ---
  ## Badges
  [![made-with-Markdown](https://img.shields.io/badge/Made%20with-Markdown-1f425f.svg)](http://commonmark.org)
  ---
  ## FAQ
  - **How can I contact you if I have any further questions?**
    - ${answers.FAQ1}
    - ${answers.email}
  ---
  ## Number of contributors
  - ${answers.Contributors}
`
}  


module.exports = generateMarkdown;
  