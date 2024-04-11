import "./Main_Page.css";
import React, { useState } from 'react';

interface Props {
    goToHomePage: () => void;
  }


  const MainPage: React.FC<Props> = ({ goToHomePage }) => {
    return(
        <div>
            <header className="header">
            <div className="headerBody">
            <button className="homeButton" onClick={goToHomePage}>Home</button>
            <button className="saveButton">Save</button>
            <button className="helpButton">Help</button>
            </div>
            </header>
            <h1>Welcome to the (Placeholder Name) job quiz.</h1>
            <div>Unsure of what career is right for you? We have you covered. With our (Placeholder Name)
                job quiz, you can discover careers perfect for you in just 10 minutes. By answering a   
                few simple questions, we will get you on the path to success.
            </div>
            <h2>There are two types of quizzes that you can take:</h2>
            <div className="promptContainer">
                <div><button className="quizButton">Short Quiz</button>
                <div>This is the short answer quiz. It's a decent bit shorter, but your answers will not be as in-depth.</div></div>
                <div><button className="quizButton">Long Quiz</button>
                <div>This is the long answer quiz. It's longer, but your answers may have greater accuracy.</div></div>
        </div></div>
    )
}
export default MainPage;