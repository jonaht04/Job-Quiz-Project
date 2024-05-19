import { useState, useEffect } from "react"; 
import "../Questions.css";

/** Props, for handling variable storage */
interface Props {
  handleAnswerSelect: (selectedString: string) => void;
}


export const Detailed1: React.FC<Props> = ({handleAnswerSelect}) => {
  /** Traditonal method of handling text change. If I did it this way, a bug would occurced
   * where the last character would get cut off when calling handleAnswer
   */
  const [inputText, setInputText] = useState<string>('');

  useEffect(() => {
    // Load saved answer from localStorage
    const savedAnswer = localStorage.getItem('savedData');
    if (savedAnswer) {
      const parsedAnswer = JSON.parse(savedAnswer);
      setInputText(parsedAnswer.answers[0] || ''); // Load the answer for Question 1
    }
  }, []);
  
  /**
   * Handles the change in the textarea, and stores it in the main DetailedQuestion page
   * @param event : handles the event from the TextArea
   */
  const handleAnswer = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInputText(event.target.value);
    handleAnswerSelect(event.target.value);
  };
    //Actual textbox
    return (<div className='container'>
    <h1>Question 1</h1>
    <h2>What was your favorite subject in highschool and why?</h2>
    <div>
        <textarea
          id="input-text"
          className="detailedAnswerText"
          placeholder="Enter Answer Here..."
          onChange={handleAnswer}
          value={inputText} // Set the value of the textarea to the state
        ></textarea>
        </div>
  </div>
  
)
}

export default Detailed1;