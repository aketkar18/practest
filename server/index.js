const express = require('express');
const { make_quiz } = require('./server');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(cors({
    origin: 'http://localhost:3000'
}));

app.post('/', async (req, res) => {
  const { topics } = req.body;
  console.log("Received request with topics: ");
  console.log(topics);
  let result = await make_quiz(topics);
  console.log(result);
  res.json(result);
});

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
