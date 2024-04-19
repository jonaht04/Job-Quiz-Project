import "../../Questions.css";

interface Props {
  handleAnswerSelect: () => void;
}

export const TechQ3: React.FC<Props> = ({ handleAnswerSelect }) => {
  return (
    <div className='container'>
      <h1>Technology Branch: Question 3</h1>
      <h2>What programming languages or technical skills are you most proficient in?</h2>
      <div className="answerGrid">
        <button className="answerButton" onClick={handleAnswerSelect}>Java</button>
        <button className="answerButton" onClick={handleAnswerSelect}>Python</button>
        <button className="answerButton" onClick={handleAnswerSelect}>C++</button>
        <button className="answerButton" onClick={handleAnswerSelect}>SQL</button>
      </div>
      <div className="spacer"></div>
      <button className="answerButton" onClick={handleAnswerSelect}>JavaScript</button>
    </div>
  )
}
export default TechQ3;