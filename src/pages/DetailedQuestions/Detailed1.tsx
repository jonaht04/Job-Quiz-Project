//import { useState } from "react"; see comment on line 12
import "../Questions.css";

/** Props, for handling variable storage */
interface Props {
  setSelectedString: (selectedString: string) => void;
  handleAnswerSelect: (selectedString: string) => void;
}


export const Detailed1: React.FC<Props> = ({ setSelectedString, handleAnswerSelect }) => {
  /** Traditonal method of handling text change. If I did it this way, a bug would occurced
   * where the last character would get cut off when calling handleAnswer
   */
  //const [inputText, setInputText] = useState<string>(''); 
  /** Handles changes in the text box */
  /*const handleInputChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInputText(event.target.value);
  };*/

  /**
   * Handles the change in the textarea, and stores it in the main DetailedQuestion page
   * @param event : handles the event from the TextArea
   */
  const handleAnswer = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    /*if (inputText){ //holdover from doing the old method
    setSelectedString(inputText);
    handleAnswerSelect(inputText);
    }*/
    // grabs the string from the event
    setSelectedString(event.target.value);
    handleAnswerSelect(event.target.value);
  };
  
  //handleAnswer(); if called alongside orignal method fixes the last character from being cut off, but console throws a warning 

    return (<div className='container'>
    <h1>Question 1</h1>
    <h2>What was your favorite subject in highschool and why?</h2>
    <div>
            <textarea id="input-text" className="detailedAnswerText" placeholder="Enter Answer Here..." onChange={handleAnswer}></textarea>
        </div>
  </div>
  
)
}

export default Detailed1;