import React, {useState} from "react";
import "../../Questions.css";

interface Props {
  handleAnswerSelect: (selectedString: string) => void;
}

export const HealthcareQ4: React.FC<Props> = ({handleAnswerSelect }) => {
  const [buttonSelected, setButtonSelected] = useState(0);

  const handleButtonClick = (selectedString: string) => {
    handleAnswerSelect(selectedString);
    if (selectedString === "Yes") setButtonSelected(1);
    else if (selectedString === "No") setButtonSelected(2);
    else if (selectedString === "Not Sure") setButtonSelected(3);
  };

  return (
    <div className='container'>
      <h1><strong>Healthcare Branch: Question 4</strong></h1>
      <h2>Do you have any specific medical conditions or areas of interest you'd like to focus on?</h2>
      <div className="answerGrid">
        <button className="answerButton" disabled={buttonSelected===1} style={{backgroundColor: "#a6e3a1"}} onClick={() => handleButtonClick("Yes")}>Yes</button>
        <button className="answerButton" disabled={buttonSelected===2} style={{backgroundColor: "#cba6f7"}} onClick={() => handleButtonClick("No")}>No</button>
      </div>
      <div className="spacer"></div>
      <button className="answerButton" disabled={buttonSelected===3} style={{backgroundColor: "#74c7ec"}} onClick={() => handleButtonClick("Not Sure")}>Not Sure</button>
    </div>
  )
}
export default HealthcareQ4;