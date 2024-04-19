import "../../Questions.css";

interface Props {
  handleAnswerSelect: () => void;
}

export const TechQ6: React.FC<Props> = ({ handleAnswerSelect }) => {
  return (
    <div className='container'>
      <h1>Technology Branch: Question 6</h1>
      <h2>What industries are you interested in applying your technology skills to?</h2>
      <div className="answerGrid">
        <button className="answerButton" onClick={handleAnswerSelect}>Healthcare</button>
        <button className="answerButton" onClick={handleAnswerSelect}>Finance</button>
        <button className="answerButton" onClick={handleAnswerSelect}>Entertainment</button>
        <button className="answerButton" onClick={handleAnswerSelect}>Education</button>
        <button className="answerButton" onClick={handleAnswerSelect}>Robotics/AI</button>
        <button className="answerButton" onClick={handleAnswerSelect}>Transportation</button>
      </div>
    </div>
  )
}
export default TechQ6;