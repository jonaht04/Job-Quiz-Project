import "../Questions.css";

interface Props {
  setSelectedString: (selectedString: string) => void;
  handleAnswerSelect: (selectedString: string) => void;
}


export const Detailed2: React.FC<Props> = ({ setSelectedString, handleAnswerSelect }) => {
  const handleAnswer = (string: React.ChangeEvent<HTMLTextAreaElement>) => {
    setSelectedString(string.target.value);
    handleAnswerSelect(string.target.value);
  };
  
  ;

  return (<div className='container'>
    <h1>Question 2</h1>
    <h2>What are your hobbies and why do you enjoy them?</h2>
    <div>
            <textarea id="input-text" className="detailedAnswerText" placeholder="Enter Answer Here..." onChange={handleAnswer}></textarea>
        </div>
  </div>
  
)
}

export default Detailed2;