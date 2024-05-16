import React, {useState} from "react";
import "../../Questions.css";

interface Props {
  handleAnswerSelect: (selectedString: string) => void;
}

export const HealthcareQ5: React.FC<Props> = ({handleAnswerSelect }) => {
  const [buttonSelected, setButtonSelected] = useState(0);

  const handleButtonClick = (selectedString: string) => {
    handleAnswerSelect(selectedString);
    if (selectedString === "Yes") setButtonSelected(1);
    else if (selectedString === "No") setButtonSelected(2);
    else if (selectedString === "Maybe") setButtonSelected(3);
  };

  return (
    <div className='container'>
      <h1><strong>Healthcare Branch: Question 5</strong></h1>
      <h2>Are you comfortable working in high-stress environments such as hospitals or clinics?</h2>
      <div className="answerGrid">
        <button className="answerButton" disabled={buttonSelected===1} style={{backgroundColor: "#a6e3a1"}}  onClick={() => handleButtonClick("Yes")}>Yes</button>
        <button className="answerButton" disabled={buttonSelected===2} style={{backgroundColor: "#cba6f7"}} onClick={() => handleButtonClick("No")}>No</button>
      </div>
      <div className="spacer"></div>
      <button className="answerButton" disabled={buttonSelected===3} style={{backgroundColor: "#74c7ec"}} onClick={() => handleButtonClick("Maybe")}>Maybe</button>
    </div>
  )
}
export default HealthcareQ5;