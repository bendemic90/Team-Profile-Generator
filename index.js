const inquirer = require('inquirer');
const fs = require('fs');
var output = [];

const menuQuestion = {
  type: 'choice',
  name: 'continue',
  message: 'Do you wish to continue adding members?',
  choices: ['Yes', 'No']
}

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
  {
    type: 'list',
    name: 'askAgain',
    message: 'Which type of member would you like to add?',
    choices: ['Engineer', 'Intern', 'No more additions to make'],
    default: 'No more additions to make',
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

// generateTeam = (data) => {
//   fs.appendFile(data);
// }

ask = () => {
  inquirer.prompt(initialQuestions)
  .then((answers) => {
    if (answers.askAgain === 'No more additions to make') {
      console.log(`done writing`);
    } else if (answers.askAgain === 'Engineer') {
      return inquirer.prompt(engineerQuestions);
    } else if (answers.askAgain === 'Intern') {
      return inquirer.prompt(internQuestions);
    }
  });
}

ask();