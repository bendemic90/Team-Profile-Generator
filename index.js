const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require('inquirer');
const fs = require('fs');

const team = [];

function askAgain() {
  inquirer.prompt([
    {
    type: 'list',
    name: 'method',
    message: 'Which type of member would you like to add?',
    choices: ['Engineer', 'Intern', 'No more additions to make'],
    }
  ])
  .then((answers) => {
    switch (answers.method) {
      case 'Engineer':
        return engineerQuestions();
      case 'Intern':
        return internQuestions();
      case 'No more additions to make':
        return generateHTML(answers);
    }
  })
}

const managerQ = () => {
  inquirer.prompt([
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
    }
]).then((answers) => {
  const newManager = new Manager(answers.manager, answers.managerID, answers.managerEmail, answers.managerOffice)
  team.push(newManager);
  askAgain();
})
}

const engineerQuestions = () => { 
  inquirer.prompt([
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
]).then((answers) => {
  const newEngineer = new Engineer(answers.engineerName, answers.engineerID, answers.engineerEmail, answers.engineerGithub)
  team.push(newEngineer);
  askAgain();
})
};

const internQuestions = () => {

inquirer.prompt([
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
]).then((answers) => {
  const newIntern = new Intern(answers.internName, answers.internID, answers.internEmail, answers.internSchool)
  team.push(newIntern);
  askAgain();
})
};

const generateHTML = () => {
  const newTeam = JSON.stringify(team)
  fs.writeFile('team.json', newTeam, function (err) {    
    if (err) throw err;
    console.log(`Written successfully!`)
  })
}

managerQ();
