import React, { useState } from "react";
import "../../Questions.css";

interface Props {
  handleAnswerSelect: (selectedString: string) => void;
}

export const BusinessQ2: React.FC<Props> = ({handleAnswerSelect }) => {
  const [buttonSelected, setButtonSelected] = useState(0);
  //Function to handle buttons, and communicate to other areas of the program which button was picked in order to record answer
  const handleButtonClick = (selectedString: string) => {
    handleAnswerSelect(selectedString);
    if (selectedString === "Investment Banking") setButtonSelected(1);
    else if (selectedString === "Financial Analysis") setButtonSelected(2);
    else if (selectedString === "Marketing Strategy") setButtonSelected(3);
    else if (selectedString === "Project Management") setButtonSelected(4);
    else if (selectedString === "Business Development") setButtonSelected(5);
  };
//Render the question and the four answer buttons
  return (
    <div className='container'>
      <h1><strong>Business Branch: Question 2</strong></h1>
      <h2>What specific aspect of finance or business management intrigues you?</h2>
      <div className="answerGrid">
        <button className="answerButton" disabled={buttonSelected===1} style={{backgroundColor: "#a6e3a1"}} onClick={() => handleButtonClick("Investment Banking")}>Investment Banking</button>
        <button className="answerButton" disabled={buttonSelected===2} style={{backgroundColor: "#cba6f7"}} onClick={() => handleButtonClick("Financial Analysis")}>Financial Analysis</button>
        <button className="answerButton" disabled={buttonSelected===3} style={{backgroundColor: "#74c7ec"}} onClick={() => handleButtonClick("Marketing Strategy")}>Marketing Strategy</button>
        <button className="answerButton" disabled={buttonSelected===4}style={{backgroundColor: "#f38ba8"}} onClick={() => handleButtonClick("Project Management")}>Project Management</button>
      </div>
      <div className="spacer"></div>
      <button className="answerButton"disabled={buttonSelected===5} style={{backgroundColor: "#f9e2af"}} onClick={() => handleButtonClick("Business Development")}>Business Development</button>
    </div>
  )
}
export default BusinessQ2;