import "./Main_Page.css";
import React, { useState } from 'react';

interface Props {
    goToHomePage: () => void;
  }
interface Props { 
    goToBasicQuestionPage: () => void;
}

interface Props { 
    goToDetailedQuestionPage: () => void;
}

    return(
        <div>
            <header className="header">
            <div className="headerBody">
            <button className="homeButton" onClick={goToHomePage}>Home</button>
            <button className="quizButton" onClick={goToBasicQuestionPage}>Short Questions</button>
            <button className="saveButton">Save</button>
            <button className="helpButton">Help</button>
            </div>
            </header>
            <h1>Welcome to the (Placeholder Name) job quiz.</h1>
        </div>
    )
}
export default MainPage;