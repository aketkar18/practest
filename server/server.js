const { Configuration, OpenAIApi } = require("openai");

if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

async function hello_world() {
  let prompt = "Write a haiku about the hello world program that programmers write to test their code.";
  let result = "";
  const messages = [
    { role: 'user', content: prompt },
  ];
  try {
    const response = await openai.createChatCompletion({
      model: 'gpt-3.5-turbo',
      messages,
    });

    result = response.data.choices[0].message.content;
  } catch (error) {
    console.log(error);
  }
  return result;
}

async function make_quiz(topics) {
  let prompt = "Create a difficult MCQ with " + topics.length + " questions. Provide the questions with their 5 answer choices first in a list, then a new list for answers, then a list for very short explanations. Clearly label them 'Questions', 'Answers', or 'Explanations'. Topics: "

  for (let i = 0; i < topics.length; i++) {
    prompt += topics[i] + "\n";
  }
  let sections = [];
  const messages = [
    { role: 'user', content: prompt },
  ];

  try {
    const response = await openai.createChatCompletion({
      model: 'gpt-3.5-turbo',
      messages,
    });

    const completion = response.data.choices[0].message.content;
    //console.log(completion);
    sections = completion.split('\n');
  } catch (error) {
    console.log(error);
  }

  let practiceTest = {};
  let current = {};
  let choices = [];
  let currentSection = "";
  let n = 0;

  for (let i = 0; i < sections.length; i++) {
    let section = sections[i];
    //console.log(section);
    if (section.trim() === "") {
      continue;
    } else if (section.endsWith(":")) {
      currentSection = section.slice(0, -1).toLowerCase();
      continue;
    } else if (currentSection === "questions") {
      if (section.endsWith("?")) {
        n = Number(section[0]);
        current = {};
        choices = [];
        current["question"] = section.slice(3);
      } else {
        choices.push(section);
        current["choices"] = choices;
        practiceTest[n] = current;
      }
    } else {
      let i = Number(section[0]);
      practiceTest[i][currentSection] = section.slice(3);
    } 
  }
  return practiceTest;
}

module.exports = {
  make_quiz,
  hello_world
};
