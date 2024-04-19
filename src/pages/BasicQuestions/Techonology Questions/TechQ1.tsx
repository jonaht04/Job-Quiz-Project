import "../../Questions.css";

export function TechQ1() {
  return (
    <div className='container'>
      <h1>Technology Branch: Question 1</h1>
      <h2>Which aspect of technology interests you the most?</h2>
      <div className="answerGrid">
        <button className="answerButton">Software Engineering</button>
        <button className="answerButton">Data Science and Analytics</button>
        <button className="answerButton">Cybersecurity</button>
        <button className="answerButton">Artificial Intelligence and Machine Learning</button>
      </div>
      <div className="spacer"></div>
      <button className="answerButton">IT Management</button>
    </div>
  )
}
export default TechQ1;