# StackOverflow-lite

 [![Build Status](https://travis-ci.org/oyedejipeace/StackOverflow-lite.svg?branch=develop)](https://travis-ci.org/oyedejipeace/StackOverflow-lite)[![Coverage Status](https://coveralls.io/repos/github/oyedejipeace/StackOverflow-lite/badge.svg?branch=develop)](https://coveralls.io/github/oyedejipeace/StackOverflow-lite?branch=develop)[![Code Climate](https://codeclimate.com/github/codeclimate/codeclimate/badges/gpa.svg)](https://codeclimate.com/github/oyedejipeace/StackOverflow-lite)


## Description 
StackOverflow-lite is a question and answer platform. A community for developers to share, learn and build.
It provides a platform to gain knowledge.

## Documentation
GET(localhost:5000/api/v1/questions)<br>
GET(localhost:5000/api/v1/questions/:id)<br>
POST(localhost:5000/api/v1/questions')<br>
PUT(localhost:5000/api/v1/questions/:id)<br>
DELETE(localhost:5000/api/v1/questions/:id)<br>

## Dependencies
NodeJS - A JavaScript runtime environment<br>
Express - A web application framework for NodeJS<br>
babel-cli - A tool for transpiling the code through the command line.<br>
babel-plugin-transform-runtime - A tool used to avoid duplication across your compiled output.<br>
babel-preset-env - A preset that lets you specify an environment and automatically enables the necessary plugins.<br>
babel-register - A require hook, that will bind node's require method and automatically transpile the file on the fly.<br>
body-parser - A  Node.js body parsing middleware.<br>
heroku - A cloud service platform for deploying and running applications<br>
mocha - A JavaScript test framework for Node.js programs.<br>
nodemon - A tool that will monitor for any changes in the source and automatically restart the server.<br>
path - A module provides utilities for working with file and directory paths.<br>

## Setup
Follow these steps to set up the project in development mode

Install Nodejs<br>
Install and setup express<br>
Clone the repository by running the command<br>
git clone https://github.com/oyedejipeace/StackOverflow-lite<br>
Run cd StackOverflow-lite back to enter the application's directory<br>
Install the application's dependencies by running the command npm install<br>
Create a file in the root of your directory define the enviroment variables file<br>
Setup the database and migrations<br>
Start the application by running<br>
npm run start<br>
The application should now be running at http://localhost:5000<br>

<h3>Setting up on Heroku</h3>

Install heroku<br>
login into heroku account<br>
Install heroku dependencies<br>
Create a repo on heroku and name it stackoverflow-lite<br>
Push repo from github into heroku using push heroku master<br>
Run heroku open to confirm that the app has been hosted<br>

<h2>Testing</h2><br>
Mocha is used as the testing framework for both the unit tests and integration tests. To execute all tests,run the command npm test <br>
Postman is used to test API endpoints, to interact with the http APIs<br>

<h2>Contribute</h2><br>
Contributions to the project are welcome! Before contributing, look through the branch naming, commit message and pull request conventions here. When you are all done, follow the guidelines below to raise a pull request:

Identify the feature, chore or bug to be worked on from the pivotal tracker board.<br>
Clone the repository and checkout from develop to a new branch to start working on any assigned task.<br> Ensure branch names follow the convention linked above.<br>
Work on the task following the coding standards and style guide used in the project.<br>
When task has been completed, make commits and raise a pull request against develop branch, also ensure to follow the conventions linked above.<br>
If the pull request is accepted by the owners of the repository, then it is merged into the develop branch and closed.<br>

## License
![GitHub](https://img.shields.io/github/license/mashape/apistatus.svg?style=plastic)

**[MIT license](https://shegsteham.github.io/Fast-Food-Fast/UI/LICENSE.md)**
- Copyright 2018 © <a href="https://oyedejipeace.github.io/myBlog/" target="_blank">MyBlog</a>