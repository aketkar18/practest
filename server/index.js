const express = require('express');
const { make_quiz } = require('./server');
const { hello_world } = require('./server');
const cors = require('cors');

const app = express();

app.use(express.json());

app.use(cors({
  origin: ['https://practest.herokuapp.com', 'http://localhost:3000'],
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
  try{
    let result = await make_quiz(topics);
    res.json(result);
  }
  catch(err){
    res.status(500).send({ error: err.message });
    return;
  }
});


const PORT = process.env.PORT || 8000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
