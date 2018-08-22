# StackOverflow-lite 
 [![Build Status](https://travis-ci.org/oyedejipeace/StackOverflow-lite.svg?branch=master)](https://travis-ci.org/oyedejipeace/StackOverflow-lite)[![Coverage Status](https://coveralls.io/repos/github/oyedejipeace/StackOverflow-lite/badge.svg?branch=master)](https://coveralls.io/github/oyedejipeace/StackOverflow-lite?branch=master)[![Code Climate](https://codeclimate.com/github/codeclimate/codeclimate/badges/gpa.svg)](https://codeclimate.com/github/oyedejipeace/StackOverflow-lite)


#Description
StackOverflow-lite is a question and answer platform. A community for developers to share, learn and build.
It provides a platform to gain knowledge.

#Documentation
get(localhost:5000/api/v1/questions)
get(localhost:5000/api/v1/questions/:id)
post(localhost:5000/api/v1/questions')
put(localhost:5000/api/v1/questions/:id)
delete(localhost:5000/api/v1/questions/:id)

##Dependencies
NodeJS - A JavaScript runtime environment
Express - A web application framework for NodeJS
babel-cli - A tool for transpiling the code through the command line.
babel-plugin-transform-runtime - A tool used to avoid duplication across your compiled output.
babel-preset-env - A preset that lets you specify an environment and automatically enables the necessary plugins.
babel-register - A require hook, that will bind node's require method and automatically transpile the file on the fly.
body-parser - A  Node.js body parsing middleware.
heroku - A cloud service platform for deploying and running applications
mocha - A JavaScript test framework for Node.js programs.
nodemon - A tool that will monitor for any changes in the source and automatically restart the server. 

#Setup
Follow these steps to set up the project in development mode

Install Nodejs
Install and setup express
Clone the repository by running the command
git clone https://github.com/oyedejipeace/StackOverflow-lite
Run cd StackOverflow-lite back to enter the application's directory
Install the application's dependencies by running the command npm install
Create a file in the root of your directory define the enviroment variables file
Setup the database and migrations
Start the application by running
npm run start
The application should now be running at http://localhot:5000

Setting up on Heroku

Install heroku
login into heroku account
install heroku dependencies
Create a repo on heroku and name it stackoverflow-lite
Push repo from github into heroku using push heroku master
Run heroku open to confirm that the app has been hosted

#Testing
Mocha is used as the testing framework for both the unit tests and integration tests. To execute all tests, run the command npm test <file>
Postman is used to test API endpoints, to interact with the http APIs

#Contribute
Contributions to the project are welcome! Before contributing, look through the branch naming, commit message and pull request conventions here. When you are all done, follow the guidelines below to raise a pull request:

Identify the feature, chore or bug to be worked on from the pivotal tracker board. 
Clone the repository and checkout from develop to a new branch to start working on any assigned task. Ensure branch names follow the convention linked above.
Work on the task following the coding standards and style guide used in the project.
When task has been completed, make commits and raise a pull request against develop branch, also ensure to follow the conventions linked above.
If the pull request is accepted by the owners of the repository, then it is merged into the develop branch and closed.
