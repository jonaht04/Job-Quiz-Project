import React, { useState} from 'react';
import "./Basic_Question.css";
import MainImage from './giphy.gif';
import Button3 from './old_mac.jpg'
import Button4 from './old_mac.jpg';
import SettingsMenu from './Setting_menu';

interface Props {
  goToWIPMainPage: () => void;
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}

const BasicQuestion1: React.FC<Props> = ({ goToWIPMainPage , isDarkMode, toggleDarkMode }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const toggleSettings = () => {
    setIsSettingsOpen(!isSettingsOpen);
  };

  return (
    <div className={`container ${isDarkMode ? 'dark-mode' : ''}`}>
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
      <h2>This is a placeholder question:</h2>
      <img className="MainImage" src={MainImage} alt="logo" />
      <div className="buttonGrid">
        <button className="bigButton">Yes</button>
        <button className="bigButton">No</button>
        <button className="bigButton">Example with picture
          <img src={Button3} alt="logo" /></button>
        <button className="bigButton">Another Example w/ picture
          <img src={Button4} alt="logo" /></button>
      </div>

      <SettingsMenu isOpen={isSettingsOpen} onClose={toggleSettings} onDarkModeToggle={toggleDarkMode} isDarkMode={isDarkMode}/>
    </div>
    </div>
  );
};

export default BasicQuestion1;
