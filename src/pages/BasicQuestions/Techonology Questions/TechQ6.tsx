import React, {useState} from "react";
import "../../Questions.css";

interface Props {
  handleAnswerSelect: (selectedString: string) => void;
}

export const TechQ6: React.FC<Props> = ({handleAnswerSelect }) => {
  const [buttonSelected, setButtonSelected] = useState(0);
//Function to handle buttons, and communicate to other areas of the program which button was picked in order to record answer
  const handleButtonClick = (selectedString: string) => {
    handleAnswerSelect(selectedString);
    if (selectedString === "Healthcare") setButtonSelected(1);
    else if (selectedString === "Finance") setButtonSelected(2);
    else if (selectedString === "Entertainment") setButtonSelected(3);
    else if (selectedString === "Education") setButtonSelected(4);
    else if (selectedString === "Robotics/AI") setButtonSelected(5);
    else if (selectedString === "Transportation") setButtonSelected(6);
  };
//Render the question and the four answer buttons
  return (
    <div className='container'>
      <h1><strong>Technology Branch: Question 6</strong></h1>
      <h2>What industries are you interested in applying your technology skills to?</h2>
      <div className="answerGrid">
        <button className="answerButton" disabled={buttonSelected===1} style={{backgroundColor: "#a6e3a1"}} onClick={() => handleButtonClick("Healthcare")}>Healthcare</button>
        <button className="answerButton" disabled={buttonSelected===2} style={{backgroundColor: "#cba6f7"}} onClick={() => handleButtonClick("Finance")}>Finance</button>
        <button className="answerButton" disabled={buttonSelected===3} style={{backgroundColor: "#74c7ec"}} onClick={() => handleButtonClick("Entertainment")}>Entertainment</button>
        <button className="answerButton" disabled={buttonSelected===4} style={{backgroundColor: "#f38ba8"}} onClick={() => handleButtonClick("Education")}>Education</button>
        <button className="answerButton" disabled={buttonSelected===5} style={{backgroundColor: "#f9e2af"}} onClick={() => handleButtonClick("Robotics/AI")}>Robotics/AI</button>
        <button className="answerButton" disabled={buttonSelected===6} style={{backgroundColor: "#fab387"}}onClick={() => handleButtonClick("Transportation")}>Transportation</button>
      </div>
    </div>
  )
}
export default TechQ6;