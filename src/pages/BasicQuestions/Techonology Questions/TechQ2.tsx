import "../../Questions.css";

interface Props {
  handleAnswerSelect: (selectedString: string) => void;
}

export const TechQ2: React.FC<Props> = ({handleAnswerSelect }) => {
  const handleButtonClick = (selectedString: string) => {
    handleAnswerSelect(selectedString);
  };

  return (
    <div className='container'>
      <h1><strong>Technology Branch: Question 2</strong></h1>
      <h2>Are you interested in working with hardware or software development?</h2>
      <div className="answerGrid">
        <button className="answerButton" onClick={() => handleButtonClick("Hardware")}>Hardware</button>
        <button className="answerButton" onClick={() => handleButtonClick("Software")}>Software</button>
      </div>
      <div className="spacer"></div>
      <button className="answerButton" onClick={() => handleButtonClick("Hardware & Software")}>Both</button>
    </div>
  )
}
export default TechQ2;