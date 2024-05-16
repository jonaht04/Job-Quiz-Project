import React, {useState} from "react";
import "../../Questions.css";

interface Props {
  handleAnswerSelect: (selectedString: string) => void;
}

export const BusinessQ3: React.FC<Props> = ({handleAnswerSelect }) => {
  const [buttonSelected, setButtonSelected] = useState(0);

  const handleButtonClick = (selectedString: string) => {
    handleAnswerSelect(selectedString);
    if (selectedString === "Corporate") setButtonSelected(1);
    else if (selectedString === "Startup") setButtonSelected(2);
    else if (selectedString === "No Preference") setButtonSelected(3);
  };

  return (
    <div className='container'>
      <h1><strong>Business Branch: Question 3</strong></h1>
      <h2>Do you have a preference for working in corporate settings or startups?</h2>
      <div className="answerGrid">
        <button className="answerButton" disabled={buttonSelected===1} style={{backgroundColor: "#a6e3a1"}} onClick={() => handleButtonClick("Corporate")}>Corporate</button>
        <button className="answerButton" disabled={buttonSelected===2} style={{backgroundColor: "#cba6f7"}} onClick={() => handleButtonClick("Startup")}>Startup</button>
      </div>
      <div className="spacer"></div>
      <button className="answerButton" disabled={buttonSelected===3} style={{backgroundColor: "#74c7ec"}} onClick={() => handleButtonClick("No Preference")}>No Preference</button>
    </div>
  )
}
export default BusinessQ3;