const express = require('express');
const requestIp = require('request-ip');

const app = express();
const port = process.env.PORT || 3000;

// Middleware to get the user's IP address
app.use(requestIp.mw());

// Serve the HTML page
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

// API route to get the user's IP address
app.get('/getip', (req, res) => {
    const ip = req.clientIp;
    res.send(ip);
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
