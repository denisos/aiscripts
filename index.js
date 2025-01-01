// chat models are abstraction layer over llms; pass a list of messages and get back a message in response
// langchain chat models provide: 
//  - a consistent interface for working with multiple LLMs
//  - standard tool calling api
//  - formats, caching, token usage and more configuration options (timeout, tempoerature etc.)
//  - python and typescript
//
// from this tutorial https://js.langchain.com/docs/tutorials/llm_chain/ 
// this node script uses a langchain chat model to integrate with OpenAIs gpt 3.5 LLM
// execute like so:
//  node --env-file=.env index.js
//
import { ChatOpenAI } from "@langchain/openai";
import { HumanMessage, SystemMessage } from "@langchain/core/messages";

const apiKey = process.env.OPENAI_API_KEY;

const model = new ChatOpenAI({
  model: "gpt-3.5-turbo",
  apiKey
});

const messages = [
  new SystemMessage("Translate the following from English into Italian"),
  new HumanMessage("hi, have a nice day! please and thank you"),
];

const res = await model.invoke(messages);

console.log("response : ", res)

