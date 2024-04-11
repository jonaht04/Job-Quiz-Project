import "./Main_Page.css";
import React, { useState } from 'react';

interface Props {
    goToHomePage: () => void;
  }

  const Main_Page: React.FC<Props> = ({ goToHomePage }) => {
    return(
        <div>
            <header className="header">
            <div className="headerBody">
            <button>Home</button>
            <button>Short Quiz</button>
            <button>Long Quiz</button>
            <button>Help</button>
            </div>
            </header>
            <h1>Welcome to the DDee job quiz.</h1>
        </div>
    )
}
