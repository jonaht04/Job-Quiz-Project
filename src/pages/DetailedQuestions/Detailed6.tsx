import "../Questions.css";

interface Props {
  setSelectedString: (selectedString: string) => void;
  handleAnswerSelect: (selectedString: string) => void;
}


export const Detailed6: React.FC<Props> = ({ setSelectedString, handleAnswerSelect }) => {
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
    <h1>Question 6</h1>
    <h2>Choose your favorite and explain why you chose it.</h2> {/**TODO: Chose what? */}
    <div>
            <textarea id="input-text" className="detailedAnswerText" placeholder="Enter Answer Here..." onChange={handleAnswer}></textarea>
        </div>
  </div>
  
)
}

export default Detailed6;