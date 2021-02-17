const inquirer = require('inquirer');
const fs = require('fs');
const http = require('http');

const promptUser = () => {
    return inquirer.prompt([
      {
        type: 'input',
        name: 'name',
        message: 'What is the title of your repository/app?',
      },
    ]);
  };

promptUser();