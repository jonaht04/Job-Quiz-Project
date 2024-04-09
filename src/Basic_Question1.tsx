import React from 'react';
import "./Basic_Question.css";
import MainImage from './giphy.gif';
import Button3 from './QwReiS0.gif';
import Button4 from './xUjg9eFRCjwANWb4t4P8Qbi1QKG_w-tpxnSSwFcRaSzm2IL7QEEggDsapCWUYTX_Yo13GcLeaRDXhXfgfCUHEOaxYdX6hfR-xHfzta1js6M.gif';

interface Props {
  goToHomePage: () => void;
}

const BasicQuestion1: React.FC<Props> = ({ goToHomePage }) => {
  return (
    <div>
      <header className="header">
        <p className="questionCounter">Question 1/7</p>
        <div className="buttonContainer">
          <button className="homeButton" onClick={goToHomePage}>Home</button>
          <button className="saveButton">Save</button>
          <button className="helpButton">Help</button>
        </div>
      </header>

      <h1>Question 1</h1>
      <h2>Should Anime be allowed in UDCIScord?</h2>
      <img src={MainImage} alt="logo" />
      <div className="buttonGrid">
        <button className="bigButton">Yes</button>
        <button className="bigButton">No</button>
        <button className="bigButton">Ban it
          <img src={Button3} alt="logo" /></button>
        <button className="bigButton">Legalize it
          <img src={Button4} alt="logo" /></button>
      </div>
    </div>
  );
};

export default BasicQuestion1;
