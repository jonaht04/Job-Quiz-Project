import OpenAI from "openai";

//this is a fairly barebones implementation but it doesn't need to be much more than that.

async function genReport(responses: string) {
    //get key from local storage
    const APIKey = localStorage.getItem("MYKEY");
    //check if key was entered; return error message if not
    if(APIKey == null){
        return("Error: You did not submit your API Key.")
    }
    //if key was entered, convert it into a string and cut off excess characters
    try {
    const stringKey = JSON.stringify(APIKey).slice(3,-3);
    //create the OpenAI environment, enabling browser access and adding in the APIKey
    const openai = new OpenAI({apiKey: stringKey, dangerouslyAllowBrowser: true});
    //Prompt the AI for a response.
        const completion = await openai.chat.completions.create({
            //set the "system role": AKA, what the chat assistant believes it is
            messages: [{"role": "system", "content": "You are a helpful assistant, aiming to help high-school and college students find a career that fits their interests."},
            //set the user message to give the bot something to respond to. responses is
            //a representation of the answers provided in either BasicQuestionOverlay.tsx or DetailedQuestion.tsx
            {"role": "user", "content": "Based on these answers, what career would you recommend for this person? \n" 
                + responses 
                + "\n Additionally, what companies would you recommend?"},],
            //clarify what model of the bot to use
            model: "gpt-4",
  })
  //send the AI's response to the console log for error checking
  console.log(completion.choices[0].message.content);
  //return the AI's response as a string
  const response: string = completion.choices[0].message.content ||  "";
  return(response)
} catch (error){
    return "Error: Invalid API Key. Refresh to enter a new API Key";
}
};
//export genReport function for use in question pages
export default genReport;