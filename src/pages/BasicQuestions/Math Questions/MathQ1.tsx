import React, { useState } from 'react';
import "../../Questions.css";

interface Props {
  handleAnswerSelect: (selectedString: string) => void;
}

export const MathQ1: React.FC<Props> = ({handleAnswerSelect }) => {
  const [buttonSelected, setButtonSelected] = useState(0);

  const handleButtonClick = (selectedString: string) => {
    handleAnswerSelect(selectedString);
    if (selectedString === "Pure Mathematics") setButtonSelected(1);
    else if (selectedString === "Applied Mathematics") setButtonSelected(2);
    else if (selectedString === "Statistics") setButtonSelected(3);
  };

  return (
    <div className='container'>
      <h1><strong>Mathematics Branch: Question 1</strong></h1>
      <h2>What specific area of mathematics are you most passionate about?</h2>
      <div className="answerGrid">
        <button className="answerButton" disabled={buttonSelected===1} style={{backgroundColor: "#a6e3a1"}} onClick={() => handleButtonClick("Pure Mathematics")}>Pure Mathematics</button>
        <button className="answerButton" disabled={buttonSelected===2} style={{backgroundColor: "#cba6f7"}} onClick={() => handleButtonClick("Applied Mathematics")}>Applied Mathematics</button>
      </div>
      <div className="spacer"></div>
      <button className="answerButton" disabled={buttonSelected===3} style={{backgroundColor: "#74c7ec"}} onClick={() => handleButtonClick("Statistics")}>Statistics</button>
    </div>
  )
}
export default MathQ1;