# Simple E-Commerce Backend

## Overview

The Simple E-Commerce Backend application is a backend API application that gives users the option to interact with some basic functionality that some users could expect when interacting with an e-commerce web user interface. 

We've built the application around a few objects; categories, tags, products, and product tags. Our application handles the usual CRUD aspect of common e-commerce web user interfaces through the use of API requests to interact with a backend SQL database. 

## Table of Contents

- [Overview](#overview)
- [Usage](#usage)
    - [Getting Started](#getting-started)
    - [Running Applications](#running-the-application)
    - [Postman Collection/API Requests](#postman-collection-and-api-requests)
- [Demo](#demo)
- [Licensing](#licensing)
- [Contributors](#contributors)
- [Questions](#questions)

## Usage

#### Getting Started

To be able to utilize the application successfully, you will need to ensure that the appropriate package dependencies have been installed and that the database has been linked correctly. 

If you are working with a database like JAWSDB, you should be able to use that database to test our the application. You will just need to ensure that you declare the appropriate variables in your web hosting provider to make sure that you connect correctly to the database. </br>

For example, if you are working with Heroku you can define these variables under the application settings: </br>

![Declaring Environment Variables](./Assets/projectImages/herokuVariables.png "Declaring Environment Variables") </br>

If you plan on interacting with this application through a local database, you should also be able to do so, please make sure that you define the appropriate variables on your `.env` file. 

Once you have figured out how you want to utilize your database, please make sure that you install the appropriate dependencies by running the following command: `npm i -y`. </br>

![Installing Dependencies](./Assets/projectImages/installingPackages.gif "Installing Dependencies") </br>

Once you have have installed the appropriate dependencies if you would like to seed data into your database, you can run the following command: `npm run seed`. </br>

![Configuring Database](./Assets/projectImages/configuringDB.gif "Configuring Database") </br>

#### Running the Application

To start using the API you will need to run the following command: `npm start`. This will let you make requests to the API. Please refer to the API documentation selection below for more information on how to user the API. 

![Running the Application](./Assets/projectImages/runningApplication.gif "Running the Application") </br>

#### Postman Collection and API Requests

If you'd like to review the API documentation, please visit our Wiki page. </br>

https://github.com/dcast0607/Simple-ECommerce-Backend/wiki/E-Commerce-Backend-API-Collection

## Demo

- Full Application Walkthrough: https://www.loom.com/share/4fd2f99aaaed41ac8d656298e611131c

## Licensing

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)</br>
![License:Express JS](https://img.shields.io/badge/License-Express%20JS-brightgreen)</br>
![License:NodeJS](https://img.shields.io/badge/License-Node%20JS-yellowgreen)</br>
![License:SQL](https://img.shields.io/badge/License-SQL-blue)</br>
![License:dotenv](https://img.shields.io/badge/License-dotenv-orange)</br>
![License:Nodemon](https://img.shields.io/badge/License-Nodemon-lightgrey)</br>
![License:Sequelize](https://img.shields.io/badge/License-Sequelize-blue)</br>


## Contributors

**Author:** Daniel Castro </br>
**Github:** https://github.com/dcast0607 </br>
**Email:** dancastro.java@gmail.com </br>

## Questions

If you have any questions or concerns, please contact me via email. 