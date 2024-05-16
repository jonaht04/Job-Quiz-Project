import React, {useState} from "react";
import "../../Questions.css";

interface Props {
  handleAnswerSelect: (selectedString: string) => void;
}

export const HealthcareQ1: React.FC<Props> = ({handleAnswerSelect }) => {
  const [buttonSelected, setButtonSelected] = useState(0);

  const handleButtonClick = (selectedString: string) => {
    handleAnswerSelect(selectedString);
    if (selectedString === "Medicine") setButtonSelected(1);
    else if (selectedString === "Nursing") setButtonSelected(2);
    else if (selectedString === "Medical Research") setButtonSelected(3);
    else if (selectedString === "Healthcare Administration") setButtonSelected(4);
    else if (selectedString === "Pharmaceuticals") setButtonSelected(5);
  };

  return (
    <div className='container'>
      <h1><strong>Healthcare Branch: Question 1</strong></h1>
      <h2>Which type of healthcare role interests you the most?</h2>
      <div className="answerGrid">
        <button className="answerButton" disabled={buttonSelected===1} style={{backgroundColor: "#a6e3a1"}} onClick={() => handleButtonClick("Medicine")}>Medicine (Physician, Surgeon, etc.)</button>
        <button className="answerButton" disabled={buttonSelected===2} style={{backgroundColor: "#cba6f7"}} onClick={() => handleButtonClick("Nursing")}>Nursing</button>
        <button className="answerButton" disabled={buttonSelected===3} style={{backgroundColor: "#74c7ec"}} onClick={() => handleButtonClick("Medical Research")}>Medical Research</button>
        <button className="answerButton" disabled={buttonSelected===4} style={{backgroundColor: "#f38ba8"}} onClick={() => handleButtonClick("Healthcare Administration")}>Healthcare Administration</button>
      </div>
      <div className="spacer"></div>
      <button className="answerButton" disabled={buttonSelected===5} style={{backgroundColor: "#f9e2af"}} onClick={() => handleButtonClick("Pharmaceuticals")}>Pharmaceuticals</button>
    </div>
  )
}
export default HealthcareQ1;