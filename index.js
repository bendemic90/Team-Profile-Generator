const inquirer = require('inquirer');
const fs = require('fs');

const Xask = () => {
  inquirer.prompt(askAgain);
}

const askAgain = [
  {
    type: 'list',
    name: 'askAgain',
    message: 'Which type of member would you like to add?',
    choices: ['Engineer', 'Intern', 'No more additions to make'],
  },
];

const initialQuestions = [
  {
    type: 'input',
    name: 'manager',
    message: "What is your team managers name?",
  },
  {
    type: 'input',
    name: 'managerID',
    message: "What is your team managers ID?",
  },
  {
    type: 'input',
    name: 'managerEmail',
    message: 'What is your team managers email address?'
  },
  {
    type: 'input',
    name: 'managerOffice',
    message: 'In which office does your manager reside?',
  },
 
];

const engineerQuestions = [
  {
    type: 'input',
    name: 'engineerName',
    message: 'What is the name of your engineer?',
  },
  {
    type: 'input',
    name: 'engineerID',
    message: 'What is the ID of your engineer?'
  },
  {
    type: 'input',
    name: 'engineerEmail',
    message: 'What is their email?',
  },
  {
    type: 'input',
    name: 'engineerGithub',
    message: 'What is the engineers github account?'
  },
]

const internQuestions = [
  {
    type: 'input',
    name: 'internName',
    message: 'What is the name of your intern?',
  },
  {
    type: 'input',
    name: 'internID',
    message: 'What is the ID of your engineer?'
  },
  {
    type: 'input',
    name: 'internEmail',
    message: 'What is their email?',
  },
  {
    type: 'input',
    name: 'internSchool',
    message: 'What school does the intern attend?'
  },
]

const ask = () => {
  inquirer.prompt(initialQuestions)
    .then((answers) => {Xask()})
    .then((answers) => {
      if (answers === 'Engineer')
      inquirer.prompt(engineerQuestions)
    })
    .catch((err) => console.error(err));
}

ask();

const generateHTML = (answers) => 
`
${answers}
`

