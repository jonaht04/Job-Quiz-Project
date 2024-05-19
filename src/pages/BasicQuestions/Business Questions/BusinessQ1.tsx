import React, {useState} from "react";
import "../../Questions.css";

interface Props {
  handleAnswerSelect: (selectedString: string) => void;
}

export const BusinessQ1: React.FC<Props> = ({handleAnswerSelect }) => {
  const [buttonSelected, setButtonSelected] = useState(0);
//Function to handle buttons, and communicate to other areas of the program which button was picked in order to record answer
  const handleButtonClick = (selectedString: string) => {
    handleAnswerSelect(selectedString);
    if (selectedString === "Finance") setButtonSelected(1);
    else if (selectedString === "Marketing") setButtonSelected(2);
    else if (selectedString === "Management") setButtonSelected(3);
    else if (selectedString === "Entrepreneurship") setButtonSelected(4);
    else if (selectedString === "Consulting") setButtonSelected(5);
  };
  //Render the question and the four answer buttons
  return (
    <div className='container'>
      <h1><strong>Business Branch: Question 1</strong></h1>
      <h2>Which area of business are you most interested in?</h2>
      <div className="answerGrid">
        <button className="answerButton" disabled={buttonSelected===1} style={{backgroundColor: "#a6e3a1"}} onClick={() => handleButtonClick("Finance")}>Finance</button>
        <button className="answerButton" disabled={buttonSelected===2} style={{backgroundColor: "#cba6f7"}} onClick={() => handleButtonClick("Marketing")}>Marketing</button>
        <button className="answerButton" disabled={buttonSelected===3} style={{backgroundColor: "#74c7ec"}} onClick={() => handleButtonClick("Management")}>Management</button>
        <button className="answerButton" disabled={buttonSelected===4} style={{backgroundColor: "#f38ba8"}} onClick={() => handleButtonClick("Entrepreneurship")}>Entrepreneurship</button>
      </div>
      <div className="spacer"></div>
      <button className="answerButton" disabled={buttonSelected===5} style={{backgroundColor: "#f9e2af"}} onClick={() => handleButtonClick("Consulting")}>Consulting</button>
    </div>
  )
}
export default BusinessQ1;