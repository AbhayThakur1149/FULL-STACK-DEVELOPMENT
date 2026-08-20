import dotenv from 'dotenv'; // import the dotenv package to load environment variables from a .env file
import express from 'express'; // this is the new way to import express in ES6 modules
import path from 'path'; // import the path module to work with file and directory paths

dotenv.config(); // Load environment variables from .env file
 const port = Number(process.env.PORT); // Get the port from environment variables or default to 3000

const app = express();// Create an instance of the Express application

//console.log(process.env)
const users = [
    {
        Username: "Akshit",
        userID: "2411981057",
        email: "akshit1057.be24@chitkarauniversity.edu.in",
        Branch: "CSE",
        Year: "3rd Year",
        Semester: "5th Semester"
    },
    {
        Username: "Arin",
        userID: "2411981106",
        email: "arin1057.be24@chitkarauniversity.edu.in",
        Branch: "CSE",
        Year: "3rd Year",
        Semester: "5th Semester"
    },
    {
        Username: "Abeer",
        userID: "2411981014",
        email: "abeer1014.be24@chitkarauniversity.edu.in",
        Branch: "CSE",
        Year: "3rd Year",
        Semester: "5th Semester"
    },
    {
        Username: "Abhay Katoch",
        userID: "2411981018",
        email: "abhay1018.be24@chitkarauniversity.edu.in",
        Branch: "CSE",
        Year: "3rd Year",
        Semester: "5th Semester"
    },
    {
        Username: "Jollu Chaudhary",
        userID: "2411981052",
        email: "akshat1052.be24@chitkarauniversity.edu.in",
        Branch: "CSE",
        Year: "3rd Year",  
        Semester: "5th Semester"
    },
    {
        Username: "Baniya Goyal",
        userID: "2411981012",
        email: "aayush1012.be24@chitkarauniversity.edu.in",
        Branch: "CSE",
        Year: "3rd Year",
        Semester: "5th Semester"
    },
    {
        Username: "Akshay Chandel",
        userID: "2411981053",
        email: "akshay1053.be24@chitkarauniversity.edu.in",
        Branch: "CSE",
        Year: "3rd Year",
        Semester: "5th Semester"
    },
    {
        Username: "Abhay Chaudhary",
        userID: "2411981017",
        email: "abhay1017.be24@chitkarauniversity.edu.in",
        Branch: "CSE",
        Year: "3rd Year",
        Semester: "5th Semester"
    }
];


app.get('/', (req, res) => { // define a route for the root URL
    res.send('My first Express server started !'); // send a response to the client
});

app.get('/users', (req, res) => { // define a route for the /users URL
    res.json(users); // send a JSON response to the client
});

const __dirname = import.meta.dirname;
console.log(__dirname); // Get the current directory name

app.get('/home', (req, res) => { // define a route for the /home URL
    res.sendFile(path.join(__dirname, 'public', 'Home.html')); // send the Home.html file to the client
});
app.use(express.static(path.join(__dirname, 'public'))); // serve static files from the public directory

// app.get('/logo.jpg', (req, res) => { // define a route for the /logo.jpg URL
//     res.sendFile(path.join(__dirname, 'logo.jpg')); // send the logo.jpg file to the client
// });

app.all('/*splat', (req, res) => { // define a route for the /about URL
    res.status(404).send('Developer Error: Page not found'); // send a response to the client
});


// IMP point when the project is working on client side, production environment is used.
// and when the project is working on server side, development environment is used.

app.listen(port, (err) => { // create a server that listens on the specified port
    if (err) {
        console.error('Error starting the server:', err);
    } else {
        console.log(`Server is running on port ${port}................`);
    }
});