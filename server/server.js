const OpenAI = require("openai");

if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

let numChoices = 5;

async function hello_world() {
  let prompt = "Write a haiku about the hello world program that programmers write to test their code.";
  const messages = [
    { role: 'user', content: prompt },
  ];

  const completion = await openai.chat.completions.create({
    model: 'gpt-3.5-turbo',
    messages,
  });

  return completion.choices[0].message.content;
}

async function make_quiz(topics) {
  let prompt = "Create a difficult multiple choice quiz with " + topics.length + " questions. Topics:\n"
  for (let i = 0; i < topics.length; i++) {
    prompt += topics[i] + "\n";
  }
  const moderation = await openai.moderations.create({
    input: prompt
  });
  if (moderation.data.flagged) {
    return;
  }
  const completion = await openai.chat.completions.create({
    messages: [
      {
        role: "system",
        content: "You are making practice tests that output JSON. Each question should be a integer index that maps to a JSON object which has the keys \"question\" which contains the question, \"choices\" which contains the an array of choices, \"answer\" which contains the letter of the answer, and \"explanation\" which contains the explanation for the correct answer",
      },
      { role: "user", content: prompt },
    ],
    model: "gpt-3.5-turbo-1106",
    response_format: { type: "json_object" },
  });

  quizObject = JSON.parse(completion.choices[0].message.content);
  return quizObject;
}

module.exports = {
  make_quiz,
  hello_world
};
