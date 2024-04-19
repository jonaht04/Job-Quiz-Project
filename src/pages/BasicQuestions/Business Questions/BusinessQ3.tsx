import "../../Questions.css";

interface Props {
  handleAnswerSelect: () => void;
}

export const BusinessQ3: React.FC<Props> = ({ handleAnswerSelect }) => {
  return (
    <div className='container'>
      <h1>Business Branch: Question 3</h1>
      <h2>Do you have a preference for working in corporate settings or startups?</h2>
      <div className="answerGrid">
        <button className="answerButton" onClick={handleAnswerSelect}>Corporate</button>
        <button className="answerButton" onClick={handleAnswerSelect}>Startup</button>
      </div>
      <div className="spacer"></div>
      <button className="answerButton" onClick={handleAnswerSelect}>No Preference</button>
    </div>
  )
}
export default BusinessQ3;