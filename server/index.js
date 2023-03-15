const express = require('express');
const { make_quiz } = require('./server');
const { hello_world } = require('./server');
const cors = require('cors');

const app = express();

app.use(express.json());

app.use(cors({
  origin: 'https://practest.herokuapp.com',
  allowedHeaders: ['Content-Type', 'Authorization'],
  methods: ['GET', 'POST', 'PUT', 'DELETE']
}));


// Handle GET requests to the root path
app.get('/', async (req, res) => {
  let result = await hello_world();
  res.send(result);
});

// Handle POST requests to the /quiz path
app.post('/quiz', async (req, res) => {
  const { topics } = req.body;
  console.log("Received request with topics: ");
  console.log(topics);
  let result = await make_quiz(topics);
  console.log(result);
  res.json(result);
});


const PORT = process.env.PORT || 8000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
