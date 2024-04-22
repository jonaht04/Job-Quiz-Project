import "../../Questions.css";

interface Props {
  setSelectedString: (selectedString: string) => void;
  handleAnswerSelect: (selectedString: string) => void;
}

export const BusinessQ1: React.FC<Props> = ({ setSelectedString, handleAnswerSelect }) => {
  const handleButtonClick = (selectedString: string) => {
    setSelectedString(selectedString);
    handleAnswerSelect(selectedString);
  };

  return (
    <div className='container'>
      <h1><strong>Business Branch: Question 1</strong></h1>
      <h2>Which area of business are you most interested in?</h2>
      <div className="answerGrid">
        <button className="answerButton" onClick={() => handleButtonClick("Medicine")}>Finance</button>
        <button className="answerButton" onClick={() => handleButtonClick("Medicine")}>Marketing</button>
        <button className="answerButton" onClick={() => handleButtonClick("Medicine")}>Management</button>
        <button className="answerButton" onClick={() => handleButtonClick("Medicine")}>Entrepreneurship</button>
      </div>
      <div className="spacer"></div>
      <button className="answerButton" onClick={() => handleButtonClick("Medicine")}>Consulting</button>
    </div>
  )
}
export default BusinessQ1;