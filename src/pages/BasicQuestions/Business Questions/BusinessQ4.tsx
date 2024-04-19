import "../../Questions.css";

interface Props {
  handleAnswerSelect: () => void;
}

export const BusinessQ4: React.FC<Props> = ({ handleAnswerSelect }) => {
  return (
    <div className='container'>
      <h1>Business Branch: Question 4</h1>
      <h2>Are you interested in pursuing an MBA or other advanced business degree?</h2>
      <div className="answerGrid">
        <button className="answerButton" onClick={handleAnswerSelect}>Yes</button>
        <button className="answerButton" onClick={handleAnswerSelect}>No</button>
      </div>
      <div className="spacer"></div>
      <button className="answerButton" onClick={handleAnswerSelect}>Maybe</button>
    </div>
  )
}
export default BusinessQ4;