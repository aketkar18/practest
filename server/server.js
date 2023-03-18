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
    model: 'gpt-4',
    messages,
  });

  result = response.data.choices[0].message.content;

  return result;
}

async function make_quiz(topics) {
  let prompt = "Create a college-level multiple choice quiz with " + topics.length + " questions. Respond with a clear nested list with the questions and their " + numChoices + " lettered answer choices, but the correct answer should be marked by adding a @ as its last char. After all question, start a new list for extremly short explanations for each question. The two lists you respond with should be clearly labeled Questions or Explanations. Topics:\n"
  for (let i = 0; i < topics.length; i++) {
    prompt += topics[i] + "\n";
  }
  let sections = [];
  const messages = [
    { role: 'user', content: prompt },
  ];

  const response = await openai.createChatCompletion({
    model: 'gpt-3.5-turbo',
    messages,
  });

  const completion = response.data.choices[0].message.content;
  sections = completion.split('\n');

  let practiceTest = {};
  let q = 1;

  for (let i = 0; i < sections.length; i++) {
    let section = sections[i].trim();
    if (section == "") {
      continue;
    }
    else if (section.endsWith('?')) {
      practiceTest[q] = {
        question: section.slice(3),
        choices: [],
        answer: "",
        explanation: ""
      };
      i++;
      var target = i + numChoices;
      for (i; i < target; i++) {
        var choice = sections[i];
        if (choice.includes("@")) {
          choice = choice.replace("@", "");
          practiceTest[q]["answer"] = choice[0];
        }
        practiceTest[q]["choices"].push(choice);
      }
      q++;
    }
    else if (q > topics.length && !isNaN(Number(section[0]))) {
      practiceTest[Number(section[0])]["explanation"] = section.slice(3);
    }
  }
  return practiceTest;
}

module.exports = {
  make_quiz,
  hello_world
};
