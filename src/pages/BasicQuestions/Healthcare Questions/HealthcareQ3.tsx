import React, {useState} from "react";
import "../../Questions.css";

interface Props {
  handleAnswerSelect: (selectedString: string) => void;
}

export const HealthcareQ3: React.FC<Props> = ({handleAnswerSelect }) => {
  const [buttonSelected, setButtonSelected] = useState(0);
//Function to handle buttons, and communicate to other areas of the program which button was picked in order to record answer
  const handleButtonClick = (selectedString: string) => {
    handleAnswerSelect(selectedString);
    if (selectedString === "Patient Care") setButtonSelected(1);
    else if (selectedString === "Research") setButtonSelected(2);
    else if (selectedString === "Both") setButtonSelected(3);
  };
//Render the question and the four answer buttons
  return (
    <div className='container'>
      <h1><strong>Healthcare Branch: Question 3</strong></h1>
      <h2>Are you interested in patient care or research-oriented roles?</h2>
      <div className="answerGrid">
        <button className="answerButton" disabled={buttonSelected===1} style={{backgroundColor: "#a6e3a1"}} onClick={() => handleButtonClick("Patient Care")}>Patient Care</button>
        <button className="answerButton" disabled={buttonSelected===2} style={{backgroundColor: "#cba6f7"}} onClick={() => handleButtonClick("Research")}>Research</button>
      </div>
      <div className="spacer"></div>
      <button className="answerButton" disabled={buttonSelected===3} style={{backgroundColor: "#74c7ec"}} onClick={() => handleButtonClick("Both")}>Both</button>
    </div>
  )
}
export default HealthcareQ3;