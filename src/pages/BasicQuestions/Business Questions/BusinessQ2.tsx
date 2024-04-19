import "../../Questions.css";

interface Props {
  handleAnswerSelect: () => void;
}

export const BusinessQ2: React.FC<Props> = ({ handleAnswerSelect }) => {
  return (
    <div className='container'>
      <h1><strong>Business Branch: Question 2</strong></h1>
      <h2>What specific aspect of finance or business management intrigues you?</h2>
      <div className="answerGrid">
        <button className="answerButton" onClick={handleAnswerSelect}>Investment Banking</button>
        <button className="answerButton" onClick={handleAnswerSelect}>Financial Analysis</button>
        <button className="answerButton" onClick={handleAnswerSelect}>Marketing Strategy</button>
        <button className="answerButton" onClick={handleAnswerSelect}>Project Management</button>
      </div>
      <div className="spacer"></div>
      <button className="answerButton" onClick={handleAnswerSelect}>Business Development</button>
    </div>
  )
}
export default BusinessQ2;