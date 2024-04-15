import React, { useState} from 'react';
import "./Main_Page.css";
import SettingsMenu from '../Setting_menu';

interface Props {
    goToHomePage: () => void;
    goToDetailedQuestion: () => void;
    goToBasicQuestion: () => void;
    isDarkMode: boolean;
    toggleDarkMode: () => void;
  }


  const MainPage: React.FC<Props> = ({ goToHomePage , goToDetailedQuestion, goToBasicQuestion, isDarkMode, toggleDarkMode }) => {

    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isSettingsOpen, setIsSettingsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    const toggleSettings = () => {
        setIsSettingsOpen(!isSettingsOpen);
    };

    return(
        <div>
            <header className="homePgHeader">
                <div className="buttonContainer">
                    <button className="homePgHeaderButtons" onClick={goToHomePage}>Home</button>
                    <button className="homePgHeaderButtons" onClick={goToBasicQuestion}>Short Quiz</button>
                    <button className="homePgHeaderButtons" onClick={goToDetailedQuestion}>Long Quiz</button>
                <div className={`dropdown ${isDropdownOpen ? 'open' : ''}`}>
                <button className="dropdownButton" onClick={toggleDropdown}>
                    <div className="bar"></div>
                    <div className="bar"></div>
                    <div className="bar"></div>
                </button>
                {isDropdownOpen && (
                    <div className="dropdownContent">
                    <button className="dropdownItem">Help</button>
                    <button className="dropdownItem">Account</button>
                    <button className="dropdownItem" onClick={toggleSettings}>Settings</button>
                    <button className="dropdownItem">Logout</button>
                    </div>
                )}
                </div>
                </div>
            </header>
            <div className='container'>
                <h1>Welcome to the (Placeholder Name) job quiz.</h1>
                <p className="spacer"> </p>
                <p className="textContainer">Unsure of what career is right for you? We have you covered.</p>
                <p></p>
                <p className="textContainer">With our (Placeholder Name)
                    job quiz, you can discover careers perfect for you in just 10 minutes. By answering a   
                    few simple questions, we will get you on the path to success.
                </p>
                
                <p className="spacer"> </p>
                <p className="spacer"> </p>
                <h2>There are two types of quizzes that you can take:</h2>
                <div className="promptContainer">
                    <div><button className="quizButton" onClick={goToBasicQuestion}>Multiple Choice</button>
                    <p className ="textContainer">This exam is the shorter quiz. Its questions are all multiple choice and shouldn’t take too long to complete. Choose the answer that best matches your own preferences, beliefs, and opinions. This test is powered by ChatGPT’s Large Language Model.</p></div>
                    <div><button className="quizButton" onClick={goToDetailedQuestion}>Short Answer</button>
                    <p className ="textContainer">This exam has more complex questions that require more thought with fill-in-the-blank answers being required. Expect this to take longer than the multiple choice. This test is powered by ChatGPT’s Large Language Model.</p></div>
                </div>
                <p></p>
                <p></p>
                <p className="wideTextContainer">Understand that we collect some information about you in order to suggest careers. This information is not used elsewhere for any purpose.</p>
            </div>
            <SettingsMenu isOpen={isSettingsOpen} onClose={toggleSettings} onDarkModeToggle={toggleDarkMode} isDarkMode={isDarkMode}/>
        </div>
    )
}
export default MainPage;