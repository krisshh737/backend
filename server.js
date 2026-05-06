const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

// GET route
app.get('/message', (req, res) => {
    res.json({
        message: "Welcome to My App"
    });
});

// POST route
app.post('/submit', (req, res) => {
    const { name, email } = req.body;

    res.json({
        msg: "Data received successfully",
        name,
        email
    });
});

// Server
app.listen(12345, () => {
    console.log("Server running on http://localhost:12345");
});