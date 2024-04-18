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

const BasicQuestionOverlay: React.FC<Props> = ({ goToHomePage , isDarkMode, toggleDarkMode }) => {
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
    switch(currentPage) {
      case 1:
        return <MainBasicQ setSelectedString={setSelectedString}/>;
      case 2:
        switch(selectedString) {
          case "Technology": return <TechQ1/>;
          case "Medical": return <TechQ1/>;
          case "Business": return <TechQ1/>;
          case "Film Making": return <TechQ1/>;
        }
        break;
      case 3:
        switch(selectedString) {
          case "Technology": return <TechQ2/>;
          case "Medical": return <TechQ2/>
          case "Business": return <TechQ2/>
          case "Film Making":return <TechQ2/>
        }
        break;
      case 4:
        switch(selectedString) {
          case "Technology": return <TechQ3/>;
          case "Medical": return <TechQ3/>;
          case "Business": return <TechQ3/>;
          case "Film Making": return <TechQ3/>;
        }
        break;
      case 5:
        switch(selectedString) {
          case "Technology": return <TechQ4/>;
          case "Medical": return <TechQ4/>;
          case "Business": return <TechQ4/>;
          case "Film Making": return <TechQ4/>;
        }
        break;
      case 6:
        switch(selectedString) {
          case "Technology": return <TechQ5/>;
          case "Medical": return <TechQ5/>;
          case "Business": return <TechQ5/>;
          case "Film Making": return <TechQ5/>;
        }
        break;
      case 7:
        switch(selectedString) {
          case "Technology": return <TechQ6/>;
          case "Medical": return <TechQ6/>;
          case "Business": return <TechQ6/>;
          case "Film Making": return <TechQ6/>;
        }
        break;
      default:
        return <MainBasicQ setSelectedString={setSelectedString}/>;
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

export default BasicQuestionOverlay;
