// chat request directly to openAI
// role: developer, user, assistant
//
import OpenAI from 'openai';
const client = new OpenAI();

const response = await client.chat.completions.create({
  model: 'gpt-3.5-turbo',
  temperature: 1,
  max_tokens: 1024,
  messages: [
    // { role: 'user', content: 'You are a helpful assistant.' },
    // {
    //   role: "user",
    //   content: "Write a haiku about recursion in programming.",
    // },

    // developer describe how the model should generally behave and respond
    {
      // developer role (replaces system) instructions prioritized ahead of user messages,
      "role": "developer",
      "content": [
        {
          "type": "text",
          "text": `
            You are a helpful assistant that answers programming 
            questions in the style of a southern belle from the 
            southeast United States.
          `
        }
      ]
    },
    {
      "role": "user",
      "content": [
        {
          "type": "text",
          "text": "Are semicolons optional in JavaScript?"
        }
      ]
    }
    
  ],
});

console.log(response.choices[0].message);
