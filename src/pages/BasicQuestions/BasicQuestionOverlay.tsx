import React, { useState} from 'react';
import "../Questions.css";
import SettingsMenu from '../../Setting_menu';
import MainBasicQ from './MainBasicQ';

//#region Tech Questions
import TechQ1 from './Techonology Questions/TechQ1';
import TechQ2 from './Techonology Questions/TechQ2';
import TechQ3 from './Techonology Questions/TechQ3';
import TechQ4 from './Techonology Questions/TechQ4';
import TechQ5 from './Techonology Questions/TechQ5';
import TechQ6 from './Techonology Questions/TechQ6';
//#endregion

//#region Medical Questions

//#endregion

//#region Business Questions

//#endregion

interface Props {
  goToHomePage: () => void;
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}

const BasicQuestion1: React.FC<Props> = ({ goToHomePage , isDarkMode, toggleDarkMode }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedString, setSelectedString] = useState("");

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const toggleSettings = () => {
    setIsSettingsOpen(!isSettingsOpen);
  };

  const renderCurrentPage = () => {
    switch(selectedString) {
      case "Technology":
        switch(currentPage) {
          case 1: return <MainBasicQ setSelectedString={setSelectedString}/>;
          case 2: return <TechQ1/>;
          case 3: return <TechQ2/>;
          case 4: return <TechQ3/>;
          case 5: return <TechQ4/>;
          case 6: return <TechQ5/>;
          case 7: return <TechQ6/>;
        }
        break;
      case "Medical":
        switch(currentPage) {
          case 1: return <MainBasicQ setSelectedString={setSelectedString}/>;
          case 2: return <TechQ1/>;
          case 3: return <TechQ2/>;
          case 4: return <TechQ3/>;
          case 5: return <TechQ4/>;
          case 6: return <TechQ5/>;
          case 7: return <TechQ6/>;
        }
        break;
      case "Business":
        switch(currentPage) {
          case 1: return <MainBasicQ setSelectedString={setSelectedString}/>;
          case 2: return <TechQ1/>;
          case 3: return <TechQ2/>;
          case 4: return <TechQ3/>;
          case 5: return <TechQ4/>;
          case 6: return <TechQ5/>;
          case 7: return <TechQ6/>;
        }
        break;
      case "Film Making":
        switch(currentPage) {
          case 1: return <MainBasicQ setSelectedString={setSelectedString}/>;
          case 2: return <TechQ1/>;
          case 3: return <TechQ2/>;
          case 4: return <TechQ3/>;
          case 5: return <TechQ4/>;
          case 6: return <TechQ5/>;
          case 7: return <TechQ6/>;
        }
        break;
    }
  };
  
  return (
    <div>
      <SettingsMenu isOpen={isSettingsOpen} onClose={toggleSettings} onDarkModeToggle={toggleDarkMode} isDarkMode={isDarkMode}/>
      <header className="questionHeader">
          <p className="questionCounter">Question {currentPage}/7</p>
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
        {renderCurrentPage()}
      </div>
      <div className='container'>
        <button className="changeProgressButton" disabled={currentPage===1} onClick={() => {
          setCurrentPage(currentPage - 1)}}>Previous Question</button>
        <button className="changeProgressButton" disabled={currentPage===7} onClick={() => {
          setCurrentPage(currentPage + 1);}}>Next Question</button>
      </div>
    </div>
  );
};

export default BasicQuestion1;
