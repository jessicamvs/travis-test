# Class Passport
[![Build Status](https://travis-ci.org/jessicamvs/back-end-project.svg?branch=master)](https://travis-ci.org/jessicamvs/back-end-project) [![Coverage Status](https://coveralls.io/repos/github/jessicamvs/back-end-project/badge.svg)](https://coveralls.io/github/jessicamvs/back-end-project?branch=staging)

An app that helps users easily plan transferring from a 2 Year Community College to a 4 Year University. A user can input their current Community College course list, and receive an output detailing whether each of those courses are transferrable as well as how many credits will successfully transfer. If a Community College course is not transferrable, a user can easily change their course input. The application allows both students and administrators to manage their respective course listings.  


## Prerequisites
1. Ensure that you have node installed on your machine.
    - If you need help installing node, please follow the steps here: https://howtonode.org/how-to-install-nodejs

## Installing
1. In your terminal, clone down a local copy of the repo
```
git clone https://github.com/jessicamvs/back-end-project.git
```

2. In your terminal type in ```npm install``` to install all necessary packages

3. To start the server type into your terminal ```node index.js```

3. Begin planning your future!

## Schema
![model750x580](https://cloud.githubusercontent.com/assets/13214336/22278630/de5f056e-e279-11e6-9818-1877aba883f4.png)
![model750x580](https://cloud.githubusercontent.com/assets/13214336/22319645/851c5d60-e339-11e6-8d5d-1741153ca5d4.png)

## Routes

### Signup/Login
#### POST /signup
A new user is authenticated by signing up with a unique username and password. Specifying whether you are an admin or not upon signup will allow you access to certain routes. Upon success, users are returned a token which provides authorization to access certain routes.
  - Expected Header:

  ```
  Content-Type: 'application/json'
  ```
  - Expected Body:
    ``` js
    {
    "username": <string>,
    "password": <string>,
    "admin": <boolean>
    }
    ```

  - Example Response (token):
  ```
  eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjU4ODk1ODFmZDA0ZDFhMmIyOWM5NjQyZCIsImlhdCI6MTQ4NTM5NTk5OX0.8_Zijpib85BGwh99IUHlrGjhT59EzigyTp8fssgSE48
  ```

#### GET /login

A returning user will be required to provide their unique username and password in order to be authorized to use the app. Logging in will return a new token for future user reference.

- Expected Header:
  ```
  Authorization: 'Basic <base64 encoded username:password>'
  ```

- Example Response (token):
 ```
 eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjU4ODk1ODFmZDA0ZDFhMmIyOWM5NjQyZCIsImlhdCI6MTQ4NTM5NTk5OX0.8_Zijpib85BGwh99IUHlrGjhT59EzigyTp8fssgSE48
 ```

#### Login/Signup Error Handling
- 200 upon successful signup or login
- 400 BadRequestError if no username provided upon signup
- 400 BadRequestError if no password provided upon signup
- 401 UnauthorizedError if user is not found in the database upon login
- 401 UnauthorizedError if incorrect password is provided upon login
- 409 ConflictError for duplicate username upon signup

### Community College Course Routes
These routes will allow both students and administrators to input new courses as well as update, view or delete courses. Students can only add to their personal course list whereas administrators are able to add, edit and delete courses from the main Community College course list.  

#### GET /cccourses
Students, Admins, and unauthenticated users can access this route and receive a full listing of all available Community College courses.

 - Example Response:

 ``` javascript
 { _id: 588ade5b1876df938d1b309a,
   code: 'MATH 151',
   uwequiv: 588addb41876df938d1b3095,
   __v: 0 },
 { _id: 588ade941876df938d1b309b,
   code: 'MATH 152',
   uwequiv: 588addb41876df938d1b3093,
   __v: 0 }
 ```
