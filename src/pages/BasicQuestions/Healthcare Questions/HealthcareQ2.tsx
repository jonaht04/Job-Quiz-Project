import React, {useState} from "react";
import "../../Questions.css";

interface Props {
  handleAnswerSelect: (selectedString: string) => void;
}

export const HealthcareQ2: React.FC<Props> = ({handleAnswerSelect }) => {
  const [buttonSelected, setButtonSelected] = useState(0);
//Function to handle buttons, and communicate to other areas of the program which button was picked in order to record answer
  const handleButtonClick = (selectedString: string) => {
    handleAnswerSelect(selectedString);
    if (selectedString === "Pediatrics") setButtonSelected(1);
    else if (selectedString === "Dentistry") setButtonSelected(2);
    else if (selectedString === "Psychiatry") setButtonSelected(3);
    else if (selectedString === "Emergency Medicine") setButtonSelected(4);
  };
//Render the question and the four answer buttons
  return (
    <div className='container'>
      <h1><strong>Healthcare Branch: Question 2</strong></h1>
      <h2>What area of medicine or healthcare are you passionate about?</h2>
      <div className="answerGrid">
        <button className="answerButton" disabled={buttonSelected===1} style={{backgroundColor: "#a6e3a1"}} onClick={() => handleButtonClick("Pediatrics")}>Pediatrics</button>
        <button className="answerButton" disabled={buttonSelected===2} style={{backgroundColor: "#cba6f7"}} onClick={() => handleButtonClick("Dentistry")}>Dentistry</button>
        <button className="answerButton" disabled={buttonSelected===3} style={{backgroundColor: "#74c7ec"}} onClick={() => handleButtonClick("Psychiatry")}>Psychiatry</button>
        <button className="answerButton" disabled={buttonSelected===4} style={{backgroundColor: "#f38ba8"}} onClick={() => handleButtonClick("Emergency Medicine")}>Emergency Medicine</button>
      </div>
    </div>
  )
}
export default HealthcareQ2;