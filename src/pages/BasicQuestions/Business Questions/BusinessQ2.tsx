import "../../Questions.css";

interface Props {
  handleAnswerSelect: (selectedString: string) => void;
}

export const BusinessQ2: React.FC<Props> = ({handleAnswerSelect }) => {
  const handleButtonClick = (selectedString: string) => {
    handleAnswerSelect(selectedString);
  };

  return (
    <div className='container'>
      <h1><strong>Business Branch: Question 2</strong></h1>
      <h2>What specific aspect of finance or business management intrigues you?</h2>
      <div className="answerGrid">
        <button className="answerButton" style={{backgroundColor: "#a6e3a1"}} onClick={() => handleButtonClick("Investment Banking")}>Investment Banking</button>
        <button className="answerButton" style={{backgroundColor: "#cba6f7"}} onClick={() => handleButtonClick("Financial Analysis")}>Financial Analysis</button>
        <button className="answerButton" style={{backgroundColor: "#74c7ec"}} onClick={() => handleButtonClick("Marketing Strategy")}>Marketing Strategy</button>
        <button className="answerButton" style={{backgroundColor: "#f38ba8"}} onClick={() => handleButtonClick("Project Management")}>Project Management</button>
      </div>
      <div className="spacer"></div>
      <button className="answerButton" style={{backgroundColor: "#f9e2af"}} onClick={() => handleButtonClick("Business Development")}>Business Development</button>
    </div>
  )
}
export default BusinessQ2;