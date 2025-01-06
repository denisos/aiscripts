// from this tutorial https://js.langchain.com/docs/tutorials/llm_chain/ 
// this node script uses a langchain chat model to integrate with OpenAIs gpt 3.5 LLM
// execute like so:
//  node --env-file=.env index.js
//
import { ChatOpenAI } from "@langchain/openai";
import { HumanMessage, SystemMessage } from "@langchain/core/messages";
import { ChatPromptTemplate } from "@langchain/core/prompts";

const apiKey = process.env.OPENAI_API_KEY;

const model = new ChatOpenAI({
  model: "gpt-3.5-turbo",
  apiKey
});

const systemTemplate = "Translate the following from English into {language}";

const promptTemplate = ChatPromptTemplate.fromMessages([
  ["system", systemTemplate],
  ["user", "{text}"],
]);

const promptValue = await promptTemplate.invoke({
  language: "italian",
  text: "hi! how are you? where are you from?",
});

const response = await model.invoke(promptValue);
console.log(`${response.content}`);
