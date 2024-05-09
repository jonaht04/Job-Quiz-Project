import "../Questions.css";
import { useState, useEffect } from "react"; 

interface Props {
  handleAnswerSelect: (selectedString: string) => void;
}


export const Detailed6: React.FC<Props> = ({handleAnswerSelect }) => {

  const [inputText, setInputText] = useState<string>('');

  useEffect(() => {
    // Load saved answer from localStorage
    const savedAnswer = localStorage.getItem('savedData');
    if (savedAnswer) {
      const parsedAnswer = JSON.parse(savedAnswer);
      setInputText(parsedAnswer.answers[5] || ''); // Load the answer for Question 1
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

    return (<div className='container'>
    <h1>Question 6</h1>
    <h2>Choose your favorite career and explain why you chose it.</h2> {/**TODO: Chose what? */}
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

export default Detailed6;