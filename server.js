import { Configuration, OpenAIApi } from "openai";
const configuration = new Configuration({
    organization: "org-57DKC8o3UVniHfEt3PeynhS9",
    apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

function make_quiz(topics){
    let prompt = "I need to make a multiple choice exam. I am going to give you a list of facts and I want you to make a multiple choice questions for each fact. The questions should have 5 answer choices, one of which is correct, but be sure to not make the same letter the answer in a row too much. Give the all the questions and their answer choices first in a list, then start a new list for the correct answers, and finally the explanations in a list. Clearly label these lists as Questions, Answers, or Explanations. There should be exactly" + topics.length + "questions. Here are the facts:\n";
    for (let i = 0; i < topics.length; i++) {
        prompt += topics[i] + "\n";
    }
    let sections = [];
    openaiApi.chat.create({
        engineId: 'davinci',
        prompt: prompt,
      }).then(response => {
        const completion = response.choices[0].text;
        sections = completion.split('\n');
        console.log(sections);
      }).catch(error => {
        console.log(error);
      });

      let practiceTest = {};
      let current = {};
      let choices = [];
      let currentSection = "";
      let n = 0;
      
      for (let i = 0; i < sections.length; i++) {
        let section = sections[i];
        console.log(section);
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
        } else if (currentSection === "answers") {
          let a = Number(section[0]);
          practiceTest[a]["answer"] = section.slice(3);
        } else if (currentSection === "explanations") {
          let e = Number(section[0]);
          practiceTest[e]["explanation"] = section.slice(3);
        }
      }
      return practiceTest;
}