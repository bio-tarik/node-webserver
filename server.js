const express = require('express');

let app = express();

app.get('/', (req, res) => {
    res.send({
        name: 'Tarik',
        likes: [
            'travelling',
            'biking',
            'studying'
        ]
    });
});

app.get('/about', (req, res) => {
    res.send('About Page');
});

app.get('/bad', (req, res) => {
    res.send({
        errorMessage: 'Unable to handle request.'
    });
});

app.listen(3000);