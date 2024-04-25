import "../../Questions.css";

interface Props {
  setSelectedString: (selectedString: string) => void;
  handleAnswerSelect: (selectedString: string) => void;
}

export const BusinessQ3: React.FC<Props> = ({ setSelectedString, handleAnswerSelect }) => {
  const handleButtonClick = (selectedString: string) => {
    setSelectedString(selectedString);
    handleAnswerSelect(selectedString);
  };

  return (
    <div className='container'>
      <h1><strong>Business Branch: Question 3</strong></h1>
      <h2>Do you have a preference for working in corporate settings or startups?</h2>
      <div className="answerGrid">
        <button className="answerButton" onClick={() => handleButtonClick("Corporate")}>Corporate</button>
        <button className="answerButton" onClick={() => handleButtonClick("Startup")}>Startup</button>
      </div>
      <div className="spacer"></div>
      <button className="answerButton" onClick={() => handleButtonClick("No Preference")}>No Preference</button>
    </div>
  )
}
export default BusinessQ3;