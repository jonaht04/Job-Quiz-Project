import React, { useState, useEffect} from 'react';
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
import HealthcareQ1 from './Healthcare Questions/HealthcareQ1';
import HealthcareQ2 from './Healthcare Questions/HealthcareQ2';
import HealthcareQ3 from './Healthcare Questions/HealthcareQ3';
import HealthcareQ4 from './Healthcare Questions/HealthcareQ4';
import HealthcareQ5 from './Healthcare Questions/HealthcareQ5';
import HealthcareQ6 from './Healthcare Questions/HealthcareQ6';
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
  const [isAnswerSelected, setIsAnswerSelected] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const toggleSettings = () => {
    setIsSettingsOpen(!isSettingsOpen);
  };

  const handleAnswerSelect = (selectedString: string) => {
    setSelectedString(selectedString);
    setIsAnswerSelected(true);
  };

  const handleAnswerSelectSubQ = () => {
    setIsAnswerSelected(true);
  }

  const handleNextButtonClick = () => {
    if (isAnswerSelected) {
      setCurrentPage(currentPage + 1)
      setIsAnswerSelected(false);
    }
  };

  useEffect(() => {
    setIsAnswerSelected(false);
  }, [currentPage]);

  const renderCurrentPage = () => {
    switch(currentPage) {
      case 1:
        return <MainBasicQ setSelectedString={setSelectedString} handleAnswerSelect={handleAnswerSelect}/>;
      case 2:
        switch(selectedString) {
          case "Technology": return <TechQ1 handleAnswerSelect={handleAnswerSelectSubQ}/>;
          case "Healthcare": return <HealthcareQ1/>;
          case "Business": return <TechQ1 handleAnswerSelect={handleAnswerSelectSubQ}/>;
          case "Film Making": return <TechQ1 handleAnswerSelect={handleAnswerSelectSubQ}/>;
        }
        break;
      case 3:
        switch(selectedString) {
          case "Technology": return <TechQ2 handleAnswerSelect={handleAnswerSelectSubQ}/>;
          case "Healthcare": return <HealthcareQ2/>
          case "Business": return <TechQ2 handleAnswerSelect={handleAnswerSelectSubQ}/>
          case "Film Making":return <TechQ2 handleAnswerSelect={handleAnswerSelectSubQ}/>
        }
        break;
      case 4:
        switch(selectedString) {
          case "Technology": return <TechQ3 handleAnswerSelect={handleAnswerSelectSubQ}/>;
          case "Healthcare": return <HealthcareQ3/>;
          case "Business": return <TechQ3 handleAnswerSelect={handleAnswerSelectSubQ}/>;
          case "Film Making": return <TechQ3 handleAnswerSelect={handleAnswerSelectSubQ}/>;
        }
        break;
      case 5:
        switch(selectedString) {
          case "Technology": return <TechQ4 handleAnswerSelect={handleAnswerSelectSubQ}/>;
          case "Healthcare": return <HealthcareQ4/>;
          case "Business": return <TechQ4 handleAnswerSelect={handleAnswerSelectSubQ}/>;
          case "Film Making": return <TechQ4 handleAnswerSelect={handleAnswerSelectSubQ}/>;
        }
        break;
      case 6:
        switch(selectedString) {
          case "Technology": return <TechQ5 handleAnswerSelect={handleAnswerSelectSubQ}/>;
          case "Healthcare": return <HealthcareQ5/>;
          case "Business": return <TechQ5 handleAnswerSelect={handleAnswerSelectSubQ}/>;
          case "Film Making": return <TechQ5 handleAnswerSelect={handleAnswerSelectSubQ}/>;
        }
        break;
      case 7:
        switch(selectedString) {
          case "Technology": return <TechQ6 handleAnswerSelect={handleAnswerSelectSubQ}/>;
          case "Healthcare": return <HealthcareQ6/>;
          case "Business": return <TechQ6 handleAnswerSelect={handleAnswerSelectSubQ}/>;
          case "Film Making": return <TechQ6 handleAnswerSelect={handleAnswerSelectSubQ}/>;
        }
        break;
      default:
        return <MainBasicQ setSelectedString={setSelectedString} handleAnswerSelect={handleAnswerSelect}/>;
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
        {currentPage > 1 && (
          <button 
            className={`changeProgressButton ${currentPage === 1 ? 'disabled' : ''}`} 
            disabled={currentPage === 1}
            onClick={() => setCurrentPage(currentPage - 1)}>
            Previous Question
          </button>
        )}
        
        {currentPage < 7 && (
          <button 
            className={`changeProgressButton ${currentPage === 7 ? 'disabled' : ''}`} 
            disabled={!isAnswerSelected}
            onClick={handleNextButtonClick}>
            Next Question
          </button>
        )}

        {currentPage === 7 && (
          <button className='changeProgressButton'> Submit </button>
        )}
      </div>
    </div>
  );
};

export default BasicQuestionOverlay;
