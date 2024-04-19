import "../../Questions.css";

export function HealthcareQ5() {
  return (
    <div className='container'>
      <h1>Healthcare Branch: Question 5</h1>
      <h2>Are you comfortable working in high-stress environments such as hospitals or clinics?</h2>
      <div className="answerGrid">
        <button className="answerButton">Yes</button>
        <button className="answerButton">No</button>
      </div>
      <div className="spacer"></div>
      <button className="answerButton">Maybe</button>
    </div>
  )
}
export default HealthcareQ5;