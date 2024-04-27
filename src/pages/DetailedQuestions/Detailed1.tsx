import { useState } from "react";
import "../Questions.css";

/** Props, for handling variable storage */
interface Props {
  setSelectedString: (selectedString: string) => void;
  handleAnswerSelect: (selectedString: string) => void;
}


export const Detailed1: React.FC<Props> = ({ setSelectedString, handleAnswerSelect }) => {
  const [inputText, setInputText] = useState<string>(''); 
  /** Handles changes in the text box */
  const handleInputChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInputText(event.target.value);
    handleAnswer();
  };

  const handleAnswer = () => {
    setSelectedString(inputText);
    handleAnswerSelect(inputText);
  };
    return (<div className='container'>
    <h1>Question 1</h1>
    <h2>What was your favorite subject in highschool and why?</h2>
    <div>
            <textarea id="input-text" className="detailedAnswerText" placeholder="Enter Answer Here..." onChange={handleInputChange}></textarea>
        </div>
  </div>
  
)
}

export default Detailed1;