const express = require('express'); // Include ExpressJS 
const app = express(); // Create an ExpressJS app
const BodyParser = require('body-parser');
const port = 3000

app.use(BodyParser.urlencoded({ extended: false }));

// Route Homepage
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/Nav/index.html');
  });

// Route to Loginpage
app.get('/login', (req, res) => {
    res.sendFile(__dirname + '/Nav/login.html');
  });
 
app.post('/login', (req, res) => {
    // Insert Login Code Here
    let username = req.body.username;
    let password = req.body.password;
    res.send(`Username: ${username} Password: ${password}`);
  });

app.listen(port, () => console.log(`This app is listening on port ${port}`));
