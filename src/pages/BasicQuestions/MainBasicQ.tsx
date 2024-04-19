import React, { useState } from 'react';
import "../Questions.css";
import MainImage from '../../assets/giphy.gif';
import Technology from '../../assets/coding-typing.gif'
import Business from '../../assets/Business.gif'
import Medical from '../../assets/Healthcare.gif'
import FilmMaking from '../../assets/FilmMaking.gif'
import MIITheme from '../../assets/MII_Theme.mp3'

interface Props {
  setSelectedString: (selectedString: string) => void;
  handleAnswerSelect: (selectedString: string) => void;
}

const Question1: React.FC<Props> = ({ setSelectedString, handleAnswerSelect }) => {
  const handleButtonClick = (selectedString: string) => {
    setSelectedString(selectedString);
    handleAnswerSelect(selectedString);
  };

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
      <h1>Question 1</h1>
      <h2>Which of the following areas interests you the most?</h2>
      <img className="MainImage" src={MainImage} alt="logo" onClick={togglePlay}/>
      <div className="answerGrid">
        <button className="answerButton" onClick={() => handleButtonClick("Technology")}>Technology
          <img src={Technology} alt="logo"></img>
        </button>

        <button className="answerButton" onClick={() => handleButtonClick("Healthcare")}>Medical
          <img src={Medical} alt="logo"></img>
        </button>

        <button className="answerButton" onClick={() => handleButtonClick("Business")}>Business
          <img src={Business} alt="logo"></img>
        </button>
        
        <button className="answerButton" onClick={() => handleButtonClick("Film Making")}>Film Making
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