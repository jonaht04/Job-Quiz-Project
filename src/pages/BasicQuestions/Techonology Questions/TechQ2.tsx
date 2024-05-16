import React, {useState} from "react";
import "../../Questions.css";

interface Props {
  handleAnswerSelect: (selectedString: string) => void;
}

export const TechQ2: React.FC<Props> = ({handleAnswerSelect }) => {
  const [buttonSelected, setButtonSelected] = useState(0);

  const handleButtonClick = (selectedString: string) => {
    handleAnswerSelect(selectedString);
    if (selectedString === "Hardware") setButtonSelected(1);
    else if (selectedString === "Software") setButtonSelected(2);
    else if (selectedString === "Hardware & Software") setButtonSelected(3);
  };

  return (
    <div className='container'>
      <h1><strong>Technology Branch: Question 2</strong></h1>
      <h2>Are you interested in working with hardware or software development?</h2>
      <div className="answerGrid">
        <button className="answerButton" disabled={buttonSelected===1} style={{backgroundColor: "#a6e3a1"}} onClick={() => handleButtonClick("Hardware")}>Hardware</button>
        <button className="answerButton" disabled={buttonSelected===2} style={{backgroundColor: "#cba6f7"}} onClick={() => handleButtonClick("Software")}>Software</button>
      </div>
      <div className="spacer"></div>
      <button className="answerButton" disabled={buttonSelected===3} style={{backgroundColor: "#74c7ec"}} onClick={() => handleButtonClick("Hardware & Software")}>Both</button>
    </div>
  )
}
export default TechQ2;