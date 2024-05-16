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
        <button className="answerButton" style={{backgroundColor: "#a6e3a1"}} onClick={() => handleButtonClick("Finance")}>Finance</button>
        <button className="answerButton" style={{backgroundColor: "#cba6f7"}} onClick={() => handleButtonClick("Marketing")}>Marketing</button>
        <button className="answerButton" style={{backgroundColor: "#74c7ec"}} onClick={() => handleButtonClick("Management")}>Management</button>
        <button className="answerButton" style={{backgroundColor: "#f38ba8"}} onClick={() => handleButtonClick("Entrepreneurship")}>Entrepreneurship</button>
      </div>
      <div className="spacer"></div>
      <button className="answerButton" style={{backgroundColor: "#f9e2af"}} onClick={() => handleButtonClick("Consulting")}>Consulting</button>
    </div>
  )
}
export default BusinessQ1;