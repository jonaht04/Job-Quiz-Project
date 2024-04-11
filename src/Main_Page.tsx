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
            <h2>There are two types of quizzes that you can take.</h2>
            
        </div>
    )
}
export default MainPage;