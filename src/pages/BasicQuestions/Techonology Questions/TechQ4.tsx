import "../../Questions.css";

interface Props {
  handleAnswerSelect: () => void;
}

export const TechQ4: React.FC<Props> = ({ handleAnswerSelect }) => {
  return (
    <div className='container'>
      <h1><strong>Technology Branch: Question 4</strong></h1>
      <h2>Do you prefer working in a large corporate environment or a startup culture?</h2>
      <div className="answerGrid">
        <button className="answerButton" onClick={handleAnswerSelect}>Large Corporation</button>
        <button className="answerButton" onClick={handleAnswerSelect}>Startup</button>
      </div>
      <div className="spacer"></div>
      <button className="answerButton" onClick={handleAnswerSelect}>No Preference</button>
    </div>
  )
}
export default TechQ4;