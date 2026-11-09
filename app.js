// Import the express module
import express from 'express';

// Instantiate an express object
const app = express();

//Define a port number where our server will listen
const PORT = 3000;

// Set the view engine to EJS
app.set('view engine', 'ejs');

//Enable static file serving 
app.use(express.static('public'));

// Define a default route ("/")
app.get('/', (req, res) => {
    res.render('home');
});

// Start the server on the designated port
app.listen(PORT, () => {
    console.log(`Server is running at 
        http://localhost:${PORT}`);
});