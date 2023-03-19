const { Configuration, OpenAIApi } = require("openai");

if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);
let numChoices = 5;

async function hello_world() {
  let prompt = "Write a haiku about the hello world program that programmers write to test their code.";
  let result = "";
  const messages = [
    { role: 'user', content: prompt },
  ];

  const response = await openai.createChatCompletion({
    model: 'gpt-3.5-turbo',
    messages,
  });

  result = response.data.choices[0].message.content;

  return result;
}

async function make_quiz(topics) {
  let prompt = "Create a college-level multiple choice quiz with " + topics.length + " questions. Respond with a clear nested list with the questions and their " + numChoices + " answer choices (A-E). After all questions, start a new list for just the letters of the correct answer followed by a comma and a very short explanation. The two lists you respond with should be clearly labeled Questions or Answers and try not to make the same letter the correct answer too often. Topics:\n"
  for (let i = 0; i < topics.length; i++) {
    prompt += topics[i] + "\n";
  }
  let lines = [];
  const messages = [
    { role: 'user', content: prompt },
  ];
  let numAttempts = 0;
  while (numAttempts < 2) {
    try {
      const response = await openai.createChatCompletion({
        model: 'gpt-3.5-turbo',
        messages,
      });

      const completion = response.data.choices[0].message.content;
      lines = completion.split('\n');

      let practiceTest = {};
      let q = 1;
      let iter = 0;

      for (let i = 0; i < lines.length; i++) {
        if (iter > 100) {
          throw new Error('Quiz generation took too long.');
        }
        let line = lines[i].trim();
        if (line == "") {
          continue;
        }
        else if (line.endsWith('?')) {
          practiceTest[q] = {
            question: line.slice(3),
            choices: [],
            answer: "",
            explanation: ""
          };
          i++;
          var target = i + numChoices;
          for (i; i < target; i++) {
            practiceTest[q]["choices"].push(lines[i]);
          }
          q++;
        }
        else if (q > topics.length && !isNaN(Number(line[0]))) {
          var a = Number(line[0]);
          practiceTest[a]["answer"] = line[3];
          practiceTest[a]["explanation"] = line.slice(5);
        }
        iter++;
      }
      if (Object.keys(practiceTest).length !== topics.length) {
        throw new Error('Quiz data is incomplete.');
      }
      if (Object.keys(practiceTest).some((key) => practiceTest[key].answer === '')) {
        throw new Error('Quiz data has empty answers.');
      }
      return practiceTest;
    }
    catch (error) {
      numAttempts++;
    }
  }
  throw new Error('Failed to generate quiz after multiple attempts.');
}

module.exports = {
  make_quiz,
  hello_world
};
