import "../../Questions.css";

interface Props {
  handleAnswerSelect: (selectedString: string) => void;
}

export const BusinessQ1: React.FC<Props> = ({handleAnswerSelect }) => {
  const handleButtonClick = (selectedString: string) => {
    handleAnswerSelect(selectedString);
  };

  return (
    <div className='container'>
      <h1><strong>Business Branch: Question 1</strong></h1>
      <h2>Which area of business are you most interested in?</h2>
      <div className="answerGrid">
        <button className="answerButton" onClick={() => handleButtonClick("Finance")}>Finance</button>
        <button className="answerButton" onClick={() => handleButtonClick("Marketing")}>Marketing</button>
        <button className="answerButton" onClick={() => handleButtonClick("Management")}>Management</button>
        <button className="answerButton" onClick={() => handleButtonClick("Entrepreneurship")}>Entrepreneurship</button>
      </div>
      <div className="spacer"></div>
      <button className="answerButton" onClick={() => handleButtonClick("Consulting")}>Consulting</button>
    </div>
  )
}
export default BusinessQ1;