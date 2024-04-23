import OpenAI from "openai";
import key from '../App'
const Key: string = key.toString();
const openai = new OpenAI({apiKey: Key});
//this is a fairly barebones implementation but it doesn't need to be much more than that.

const genReport = (responses: string) => {
        const completion = openai.chat.completions.create({
            messages: [{"role": "system", "content": "You are a helpful assistant, aiming to help high-school and college students find a career that fits their interests."},
                {"role": "user", "content": "Based on these answers, what career would you recommend for this person? \n" + responses},],
            model: "gpt-4",
  })
  console.log(completion);
  return(completion)
};

export default genReport;