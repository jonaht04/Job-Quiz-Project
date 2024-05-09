import "../../Questions.css";

interface Props {
  handleAnswerSelect: (selectedString: string) => void;
}

export const MathQ2: React.FC<Props> = ({handleAnswerSelect }) => {
  const handleButtonClick = (selectedString: string) => {
    handleAnswerSelect(selectedString);
  };

  return (
    <div className='container'>
      <h1><strong>Mathematics Branch: Question 2</strong></h1>
      <h2>In which sector are you interested in pursuing a career?</h2>
      <div className="answerGrid">
        <button className="answerButton" onClick={() => handleButtonClick("Education")}>Education</button>
        <button className="answerButton" onClick={() => handleButtonClick("Industry")}>Industry</button>
      </div>
      <div className="spacer"></div>
      <button className="answerButton" onClick={() => handleButtonClick("Government")}>Government</button>
    </div>
  )
}
export default MathQ2;