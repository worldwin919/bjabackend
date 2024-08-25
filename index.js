const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3000;

// Middleware
app.use(bodyParser.json());
app.use(cors());



// POST route for /bfhl
app.post('/bfhl', (req, res) => {
    const { data } = req.body;

    if (!data || !Array.isArray(data)) {
        return res.status(400).json({ is_success: false, error: 'Invalid JSON: Missing "data" field.' });
    }

    // Example response
    res.json({
        is_success: true,
        user_id: 'john_doe_17091999',
        email: 'john@xyz.com',
        roll_number: 'ABCD123',
        numbers: data.filter(item => !isNaN(item)),
        alphabets: data.filter(item => isNaN(item)),
        highest_lowercase_alphabet: data.filter(item => /^[a-z]$/.test(item)).sort().reverse().slice(0, 1),
    });
});

// Start server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
