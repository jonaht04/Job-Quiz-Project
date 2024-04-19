import "../../Questions.css";

interface Props {
  handleAnswerSelect: () => void;
}

export const BusinessQ1: React.FC<Props> = ({ handleAnswerSelect }) => {
  return (
    <div className='container'>
      <h1>Business Branch: Question 1</h1>
      <h2>Which area of business are you most interested in?</h2>
      <div className="answerGrid">
        <button className="answerButton" onClick={handleAnswerSelect}>Finance</button>
        <button className="answerButton" onClick={handleAnswerSelect}>Marketing</button>
        <button className="answerButton" onClick={handleAnswerSelect}>Management</button>
        <button className="answerButton" onClick={handleAnswerSelect}>Entrepreneurship</button>
      </div>
      <div className="spacer"></div>
      <button className="answerButton" onClick={handleAnswerSelect}>Consulting</button>
    </div>
  )
}
export default BusinessQ1;