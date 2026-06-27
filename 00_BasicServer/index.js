const express = require('express');       // import express module to make the server
const app = express();                    // all functionality of express will be in app
const PORT = 3000;                        // Server will listen on this port

app.get('/', (req, res) => {        // .get() is the method of express to get any request.
  res.send('Hello World');          // req = request, res = response
})                                  // '/' is the home (default) route

app.get('/login', (req, res) => {               // '/login' is the route on which we wish to listen
  res.send('<> This is Login Page </h1>');      // we can also pass html like this
})

app.get('/youtube', (req, res) => {
  res.send('<button> Subscribe </button>');
})

app.listen(PORT, () => {                               // used to print on terminal
  console.log(`The Server is listening on ${PORT}`);
})


// we add sensitive info like PORT and database Pass is .env file
// to make .env file follow these steps - 
// 1. install - npm i dotenv
// 2. import - require('dotenv').config()
// 3. use - process.env. __   [eg - for port - process.env.PORT instaed of PORT in listen]


// If sever is listening on our port it does not mean same port will be avilable for others also in production
// In production, port changes based on the server and the availabality