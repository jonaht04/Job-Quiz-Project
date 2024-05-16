import React, { useState } from 'react';
import "../Questions.css";
import MainImage from '../../assets/giphy.gif';
import Technology from '../../assets/Technology.gif'
import Business from '../../assets/Business.gif'
import Medical from '../../assets/Healthcare.gif'
import FilmMaking from '../../assets/Math.gif'
import MIITheme from '../../assets/MII_Theme.mp3'

interface Props {
  handleAnswerSelect: (selectedString: string) => void;
}

const Question1: React.FC<Props> = ({handleAnswerSelect }) => {
  const handleButtonClick = (selectedString: string) => {
    handleAnswerSelect(selectedString);
    if (selectedString === "Technology") setButtonSelected(1);
    else if (selectedString === "Healthcare") setButtonSelected(2);
    else if (selectedString === "Business") setButtonSelected(3);
    else if (selectedString === "Math") setButtonSelected(4);
  };

  const [buttonSelected, setButtonSelected] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = React.createRef<HTMLAudioElement>();

  const togglePlay = () => {
    const audio = audioRef.current;
    if (audio) {
      if (isPlaying) {
        audio.pause();
      } else {
        audio.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className='container'>
      <h1><strong>Question 1</strong></h1>
      <h2>Which of the following areas interests you the most?</h2>
      <img className="MainImage" src={MainImage} alt="logo" onClick={togglePlay}/>
      <div className="answerGrid">
        <button className="answerButton" disabled={buttonSelected===1} style={{backgroundColor: "#a6e3a1"}} onClick={() => handleButtonClick("Technology")}>Technology
          <img src={Technology} alt="logo"></img>
        </button>

        <button className="answerButton" disabled={buttonSelected===2} style={{backgroundColor: "#cba6f7"}} onClick={() => handleButtonClick("Healthcare")}>Healthcare
          <img src={Medical} alt="logo"></img>
        </button>

        <button className="answerButton" disabled={buttonSelected===3} style={{backgroundColor: "#74c7ec"}} onClick={() => handleButtonClick("Business")}>Business
          <img src={Business} alt="logo"></img>
        </button>
        
        <button className="answerButton" disabled={buttonSelected===4} style={{backgroundColor: "#f38ba8"}} onClick={() => handleButtonClick("Math")}>Mathematics
          <img src={FilmMaking} alt="logo"></img>
        </button>
      </div>

      <audio ref={audioRef}>
        <source src={MIITheme} type="audio/mpeg" />
      </audio>
    </div>
  )
}
export default Question1;