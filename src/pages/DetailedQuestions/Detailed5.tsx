import "../Questions.css";
import { useState, useEffect } from "react"; 

interface Props {
  handleAnswerSelect: (selectedString: string) => void;
}


export const Detailed5: React.FC<Props> = ({handleAnswerSelect }) => {

  const [inputText, setInputText] = useState<string>('');

  useEffect(() => {
    // Load saved answer from localStorage
    const savedAnswer = localStorage.getItem('savedData');
    if (savedAnswer) {
      const parsedAnswer = JSON.parse(savedAnswer);
      setInputText(parsedAnswer.answers[4] || ''); // Load the answer for Question 1
    }
  }, []);

  /**
   * Handles the change in the textarea, and stores it in the main DetailedQuestion page
   * @param event : handles the event from the TextArea
   */
  // grabs the string from the event
  const handleAnswer = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInputText(event.target.value);
    handleAnswerSelect(event.target.value);
  };
    //Actual textbox render
    return (<div className='container'>
    <h1>Question 5</h1>
    <h2>What is one career that you would never want to work at and why?</h2>
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

export default Detailed5;