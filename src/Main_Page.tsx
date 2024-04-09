import "./Main_Page.css";
import React, { useState } from 'react';


function Main_Page(){
    return(
        <div>
            <header className="header">
            <div className="headerBody">
            <button onClick={goToHomePage}>Home</button>
            <button onClick ={goToBasicQuestions}>Short Quiz</button>
            <button onClick ={goToLongQuestions}>Long Quiz</button>
            </div>
            </header>
            <h1>Welcome to the DDee job quiz.</h1>
        </div>

    )
}
