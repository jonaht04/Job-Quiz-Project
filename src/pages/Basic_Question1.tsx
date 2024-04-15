
import React, { useState} from 'react';
import "./Questions.css";
import MainImage from '../assets/giphy.gif';
import Button3 from '../assets/old_mac.jpg'
import Button4 from '../assets/old_mac.jpg';
import SettingsMenu from '../Setting_menu';

interface Props {
  goToHomePage: () => void;
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}

const BasicQuestion1: React.FC<Props> = ({ goToHomePage , isDarkMode, toggleDarkMode }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const toggleSettings = () => {
    setIsSettingsOpen(!isSettingsOpen);
  };

  return (
    <div>
      <header className="questionHeader">
          <p className="questionCounter">Question 1/7</p>
        <div className="buttonContainer">
          <button className="homeButton" onClick={goToHomePage}>Home</button>
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

      <div className='container'>
        <h1>Question 1</h1>
        <h2>This is a placeholder question:</h2>
        <img className="MainImage" src={MainImage} alt="logo" />
        <div className="buttonGrid">
          <button className="bigButton">Yes</button>
          <button className="bigButton">No</button>
          <button className="bigButton">Example with picture
          <div></div>
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
