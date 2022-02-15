// TODO: Include packages needed for this application
const inquirer = require("inquirer")
const fs = require("fs")
const path = require("path")
const generatemarkdown = require("./utils/generateMarkdown");
const Choices = require("inquirer/lib/objects/choices");
    // TODO: Create an array of questions for user input
console.log('Hi, welcome to ReadmMe Generator');

const questions = [{

        type: 'input',
        name: 'title',
        message: 'WHat is the Tite of your readme?',

    },
    {
        type: 'input',
        name: 'description',
        message: "What does your desription say?",


    },
    {
     type: 'list',
     name: 'license',
     message: 'What license does your project have?',
     choices: ['MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 3', 'none'

    ]


    },
    {
        type: 'input',
        name: 'usage',
        message: 'What does your usage instructions say?',

    },
    {
        type: 'input',
        name: 'installation',
        message: 'What does your installation instructions say?',
    }, {
        type: 'input',
        name: 'contribution',
        message: 'What are your contribution guidlines?',

    }, {
        type: 'input',
        name: 'test',
        message: 'What are your test instructions?',

    }
]


function writetofile(filename, data) {
    return fs.writeFileSync(path.join(process.cwd(), filename), data)
}





// TODO: Create a function to initialize app
function init() {

    inquirer.prompt(questions).then((answers) => {
        console.log('\n:genreadme');
        writetofile("sample.md ", generatemarkdown({...answers }))
    })

}

// Function call to initialize app
init();