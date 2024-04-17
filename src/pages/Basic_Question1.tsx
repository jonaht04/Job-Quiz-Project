import React, { useState} from 'react';
import "./Questions.css";
import SettingsMenu from '../Setting_menu';
import Question1 from './BasicQuestions/Question1';

interface Props {
  goToHomePage: () => void;
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}

const BasicQuestion1: React.FC<Props> = ({ goToHomePage , isDarkMode, toggleDarkMode }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const toggleSettings = () => {
    setIsSettingsOpen(!isSettingsOpen);
  };
  
  /*const changePage = (incrementer: number) => {
    if (currentPage !== 1 && currentPage !== 7){
      setCurrentPage(currentPage - incrementer);
    }
  }*/

  return (
    <div>
      <SettingsMenu isOpen={isSettingsOpen} onClose={toggleSettings} onDarkModeToggle={toggleDarkMode} isDarkMode={isDarkMode}/>
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
        {currentPage === 1 ? <Question1/> : <p>page 2</p>}

      </div>
      <div className='container'>
        <button className="changeProgressButton" onClick={() => {
          if (currentPage !== 1) setCurrentPage(currentPage - 1);
        }}>Previous Question</button>
        <button className="changeProgressButton" onClick={() => {
          if (currentPage !== 7) setCurrentPage(currentPage + 1);
        }}>Next Question</button>
      </div>
    </div>
  );
};

export default BasicQuestion1;
