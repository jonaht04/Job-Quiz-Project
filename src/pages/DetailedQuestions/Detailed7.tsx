import "../Questions.css";

interface Props {
  setSelectedString: (selectedString: string) => void;
  handleAnswerSelect: (selectedString: string) => void;
}


export const Detailed7: React.FC<Props> = ({ setSelectedString, handleAnswerSelect }) => {
  /**
   * Handles the change in the textarea, and stores it in the main DetailedQuestion page
   * @param event : handles the event from the TextArea
   */
  // grabs the string from the event
  const handleAnswer = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setSelectedString(event.target.value);
    handleAnswerSelect(event.target.value);
  };

    return (<div className='container'>
    <h1>Question 7</h1>
    <h2>List your values and explain why they are important to you.</h2>
    <div>
            <textarea id="input-text" className="detailedAnswerText" placeholder="Enter Answer Here..." onChange={handleAnswer}></textarea>
        </div>
  </div>
  
)
}

export default Detailed7;