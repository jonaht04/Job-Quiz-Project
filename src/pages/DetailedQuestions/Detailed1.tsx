import { useState } from "react"; 
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
  const [inputText, setInputText] = useState<string>('');

  /**
   * Handles the change in the textarea, and stores it in the main DetailedQuestion page
   * @param event : handles the event from the TextArea
   */
  const handleAnswer = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    if (event.target.value){ //holdover from doing the old method
      setInputText(event.target.value);
      handleAnswerSelect(event.target.value);
      setSelectedString(event.target.value);
    }
  };

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