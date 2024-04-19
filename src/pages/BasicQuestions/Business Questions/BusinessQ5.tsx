import "../../Questions.css";

interface Props {
  handleAnswerSelect: () => void;
}

export const BusinessQ5: React.FC<Props> = ({ handleAnswerSelect }) => {
  return (
    <div className='container'>
      <h1>Business Branch: Question 5</h1>
      <h2>Do you enjoy working with numbers and analyzing data?</h2>
      <div className="answerGrid">
        <button className="answerButton" onClick={handleAnswerSelect}>Yes</button>
        <button className="answerButton" onClick={handleAnswerSelect}>No</button>
      </div>
      <div className="spacer"></div>
      <button className="answerButton" onClick={handleAnswerSelect}>Somewhat</button>
    </div>
  )
}
export default BusinessQ5;