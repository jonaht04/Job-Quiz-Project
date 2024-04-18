import React, { useState} from 'react';
import "../Questions.css";
import MainImage from '../../assets/giphy.gif';
import Technology from '../../assets/coding-typing.gif'
import Business from '../../assets/Business.gif'
import Medical from '../../assets/Hospital.gif'

interface Props {
  setSelectedString: (selectedString: string) => void;
}

const Question1: React.FC<Props> = ({ setSelectedString }) => {
  const handleButtonClick = (selectedString: string) => {
    setSelectedString(selectedString);
  };

  return (
    <div className='container'>
      <h1>Question 1</h1>
      <h2>Which of the following areas interests you the most?</h2>
      <img className="MainImage" src={MainImage} alt="logo"/>
      <div className="buttonGrid">
        <button className="bigButton" onClick={() => handleButtonClick("Technology")}>Technology
          <img src={Technology} alt="logo"></img>
        </button>

        <button className="bigButton" onClick={() => handleButtonClick("Medical")}>Medical
          <img src={Medical} alt="logo"></img>
        </button>

        <button className="bigButton" onClick={() => handleButtonClick("Business")}>Business
          <img src={Business} alt="logo"></img>
        </button>
        
        <button className="bigButton" onClick={() => handleButtonClick("Film Making")}>Film Making
        </button>
      </div>
    </div>
  )
}
export default Question1;