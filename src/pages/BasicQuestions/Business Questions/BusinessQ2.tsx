import "../../Questions.css";

interface Props {
  setSelectedString: (selectedString: string) => void;
  handleAnswerSelect: (selectedString: string) => void;
}

export const BusinessQ2: React.FC<Props> = ({ setSelectedString, handleAnswerSelect }) => {
  const handleButtonClick = (selectedString: string) => {
    setSelectedString(selectedString);
    handleAnswerSelect(selectedString);
  };

  return (
    <div className='container'>
      <h1><strong>Business Branch: Question 2</strong></h1>
      <h2>What specific aspect of finance or business management intrigues you?</h2>
      <div className="answerGrid">
        <button className="answerButton" onClick={() => handleButtonClick("Investment Banking")}>Investment Banking</button>
        <button className="answerButton" onClick={() => handleButtonClick("Financial Analysis")}>Financial Analysis</button>
        <button className="answerButton" onClick={() => handleButtonClick("Marketing Strategy")}>Marketing Strategy</button>
        <button className="answerButton" onClick={() => handleButtonClick("Project Management")}>Project Management</button>
      </div>
      <div className="spacer"></div>
      <button className="answerButton" onClick={() => handleButtonClick("Business Development")}>Business Development</button>
    </div>
  )
}
export default BusinessQ2;