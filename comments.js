// Create web server
const express = require('express');
const app = express();
const port = 3000;

// Load comments module
const comments = require('./comments');

// Create a new comment
app.post('/comments', (req, res) => {
    const comment = req.body.comment;
    comments.create(comment);
    res.send('Comment created');
});

// Get all comments
app.get('/comments', (req, res) => {
    res.json(comments.getAll());
});

// Start the server
app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});