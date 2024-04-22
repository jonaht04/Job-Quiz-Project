import OpenAI from "openai";

const openai = new OpenAI();
//this is a fairly barebones implementation but it doesn't need to be much more than that.
function GPT() {
    const toggleSettings = () => {
        const completion = openai.chat.completions.create({
            messages: [{"role": "system", "content": "You are a helpful assistant, aiming to help high-school and college students find a career that fits their interests."},
                {"role": "user", "content": "Based on these answers, what career would you recommend for this person?"},],
            model: "gpt-4",
  })
  return(completion)
};
}
