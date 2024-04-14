import React, { useState} from 'react';
import "./Questions.css";
import SettingsMenu from '../Setting_menu';

interface Props {
    goToWIPMainPage: () => void;
    isDarkMode: boolean;
    toggleDarkMode: () => void;
  }
  
  const DetailedQuestion: React.FC<Props> = ({ goToWIPMainPage , isDarkMode, toggleDarkMode }) => {

    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isSettingsOpen, setIsSettingsOpen] = useState(false);

    const toggleDropdown = () => {
      setIsDropdownOpen(!isDropdownOpen);
    };

    const toggleSettings = () => {
      setIsSettingsOpen(!isSettingsOpen);
    };

    return (
      <div className='container'>
        <header className="questionHeader">
            <p className="questionCounter">Question 1/7</p>
          <div className="buttonContainer">
            <button className="homeButton" onClick={goToWIPMainPage}>Home</button>
            <button className="saveButton">Save</button>
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
    
        <h1>Question 1</h1>
        <h2>This is a placeholder for detailed Question page, format to be done later</h2>
        <div>
          <textarea id="input-text" className="detailedAnswerText" placeholder="Enter Answer Here..."></textarea>
        </div>
        <SettingsMenu isOpen={isSettingsOpen} onClose={toggleSettings} onDarkModeToggle={toggleDarkMode} isDarkMode={isDarkMode}/>
      </div>
    );
  };
  
  export default DetailedQuestion;
  