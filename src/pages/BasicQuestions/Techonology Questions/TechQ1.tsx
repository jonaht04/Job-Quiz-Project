import React, {useState} from "react";
import "../../Questions.css";

interface Props {
  handleAnswerSelect: (selectedString: string) => void;
}

export const TechQ1: React.FC<Props> = ({handleAnswerSelect }) => {
  const [buttonSelected, setButtonSelected] = useState(0);
//Function to handle buttons, and communicate to other areas of the program which button was picked in order to record answer
  const handleButtonClick = (selectedString: string) => {
    handleAnswerSelect(selectedString);
    if (selectedString === "Software Engineering") setButtonSelected(1);
    else if (selectedString === "Data Science and Analytics") setButtonSelected(2);
    else if (selectedString === "Cybersecurity") setButtonSelected(3);
    else if (selectedString === "Artificial Intelligence and Machine Learning") setButtonSelected(4);
    else if (selectedString === "IT Management") setButtonSelected(5);
  };
//Render the question and the four answer buttons
  return (
    <div className='container'>
      <h1><strong>Technology Branch: Question 1</strong></h1>
      <h2>Which aspect of technology interests you the most?</h2>
      <div className="answerGrid">
        <button className="answerButton" disabled={buttonSelected===1} style={{backgroundColor: "#a6e3a1"}} onClick={() => handleButtonClick("Software Engineering")}>Software Engineering</button>
        <button className="answerButton" disabled={buttonSelected===2} style={{backgroundColor: "#cba6f7"}} onClick={() => handleButtonClick("Data Science and Analytics")}>Data Science and Analytics</button>
        <button className="answerButton" disabled={buttonSelected===3} style={{backgroundColor: "#74c7ec"}} onClick={() => handleButtonClick("Cybersecurity")}>Cybersecurity</button>
        <button className="answerButton" disabled={buttonSelected===4} style={{backgroundColor: "#f38ba8"}} onClick={() => handleButtonClick("Artificial Intelligence and Machine Learning")}>Artificial Intelligence and Machine Learning</button>
      </div>
      <div className="spacer"></div>
      <button className="answerButton" disabled={buttonSelected===5} style={{backgroundColor: "#f9e2af"}} onClick={() => handleButtonClick("IT Management")}>IT Management</button>
    </div>
  )
}
export default TechQ1;