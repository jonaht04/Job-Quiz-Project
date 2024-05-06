import "../Questions.css";
import { useState, useEffect } from "react"; 

interface Props {
  setSelectedString: (selectedString: string) => void;
  handleAnswerSelect: (selectedString: string) => void;
}


export const Detailed2: React.FC<Props> = ({ setSelectedString, handleAnswerSelect }) => {

  const [inputText, setInputText] = useState<string>('');

  useEffect(() => {
    // Load saved answer from localStorage
    const savedAnswer = localStorage.getItem('savedData');
    if (savedAnswer) {
      const parsedAnswer = JSON.parse(savedAnswer);
      setInputText(parsedAnswer.answers[1] || ''); // Load the answer for Question 1
    }
  }, []);

  /**
   * Handles the change in the textarea, and stores it in the main DetailedQuestion page
   * @param event : handles the event from the TextArea
   */
  // grabs the string from the event
  const handleAnswer = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    if (event.target.value){ //holdover from doing the old method
      setInputText(event.target.value);
      handleAnswerSelect(event.target.value);
      setSelectedString(event.target.value);
    }
  };

  return (<div className='container'>
    <h1>Question 2</h1>
    <h2>What are your hobbies and why do you enjoy them?</h2>
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

export default Detailed2;