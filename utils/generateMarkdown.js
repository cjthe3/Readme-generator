// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
if (license !== "none"){
 return   `![GitHub license](https://img.shields.io/badge/license-${license}-blue.svg)
    `
}
return ""
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
    if (license !== "none"){
        return `\n* [license](#license)\n`
    } return ""
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
 if (license !== "none"){
     return `## license
     ${license}`
 }
 

}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
    return `# ${data.title}
    ${renderLicenseBadge(data.license)}

    ## Description:
   ${data.description}
    ## Table of Contents:
    * [usage](#usage)   
    * [installation](#installation)
    * [contribution](#contribution)
    * [test](#test)
    ${renderLicenseLink(data.license)}
    ## Usage Instructions:
   ${data.usage}
   ##installation Instructions:
   ${data.installation}
    ## Contributon Guidlines:
   ${data.contribution}
    ## Test Instructions:
    ${data.test}
    ${renderLicenseSection(data.license)}
    
  
   








`;
}

module.exports = generateMarkdown;