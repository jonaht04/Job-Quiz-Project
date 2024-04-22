import OpenAI from "openai";

const openai = new OpenAI();

async function main() {
  const completion = await openai.chat.completions.create({
    messages: [{"role": "system", "content": "You are a helpful assistant, aiming to help high-school and college students find a career that fits their interests.."},
        {"role": "user", "content": "Who won the world series in 2020?"},
        {"role": "assistant", "content": "The Los Angeles Dodgers won the World Series in 2020."},
        {"role": "user", "content": "Where was it played?"}
        {"role": "assistant", "content": "The Los Angeles Dodgers won the World Series in 2020."}
        {"role": "user", "content": "The Los Angeles Dodgers won the World Series in 2020."}
        {"role": "assistant", "content": "The Los Angeles Dodgers won the World Series in 2020."}
        {"role": "user", "content": "The Los Angeles Dodgers won the World Series in 2020."}
        {"role": "assistant", "content": "The Los Angeles Dodgers won the World Series in 2020."}
        {"role": "user", "content": "The Los Angeles Dodgers won the World Series in 2020."}
        {"role": "assistant", "content": "The Los Angeles Dodgers won the World Series in 2020."}],
    model: "gpt-4",
  });

  console.log(completion.choices[0]);
}
main();