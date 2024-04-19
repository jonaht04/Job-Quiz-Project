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
import BusinessQ1 from './Business Questions/BusinessQ1';
import BusinessQ2 from './Business Questions/BusinessQ2';
import BusinessQ3 from './Business Questions/BusinessQ3';
import BusinessQ4 from './Business Questions/BusinessQ4';
import BusinessQ5 from './Business Questions/BusinessQ5';
import BusinessQ6 from './Business Questions/BusinessQ6';
//#endregion

//#region Math Questions
import MathQ1 from './Math Questions/MathQ1';
import MathQ2 from './Math Questions/MathQ2';
import MathQ3 from './Math Questions/MathQ3';
import MathQ4 from './Math Questions/MathQ4';
import MathQ5 from './Math Questions/MathQ5';
import MathQ6 from './Math Questions/MathQ6';
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
          case "Healthcare": return <HealthcareQ1 handleAnswerSelect={handleAnswerSelectSubQ}/>;
          case "Business": return <BusinessQ1 handleAnswerSelect={handleAnswerSelectSubQ}/>;
          case "Math": return <MathQ1 handleAnswerSelect={handleAnswerSelectSubQ}/>;
        }
        break;
      case 3:
        switch(selectedString) {
          case "Technology": return <TechQ2 handleAnswerSelect={handleAnswerSelectSubQ}/>;
          case "Healthcare": return <HealthcareQ2 handleAnswerSelect={handleAnswerSelectSubQ}/>
          case "Business": return <BusinessQ2 handleAnswerSelect={handleAnswerSelectSubQ}/>
          case "Math":return <MathQ2 handleAnswerSelect={handleAnswerSelectSubQ}/>
        }
        break;
      case 4:
        switch(selectedString) {
          case "Technology": return <TechQ3 handleAnswerSelect={handleAnswerSelectSubQ}/>;
          case "Healthcare": return <HealthcareQ3 handleAnswerSelect={handleAnswerSelectSubQ}/>;
          case "Business": return <BusinessQ3 handleAnswerSelect={handleAnswerSelectSubQ}/>;
          case "Math": return <MathQ3 handleAnswerSelect={handleAnswerSelectSubQ}/>;
        }
        break;
      case 5:
        switch(selectedString) {
          case "Technology": return <TechQ4 handleAnswerSelect={handleAnswerSelectSubQ}/>;
          case "Healthcare": return <HealthcareQ4 handleAnswerSelect={handleAnswerSelectSubQ}/>;
          case "Business": return <BusinessQ4 handleAnswerSelect={handleAnswerSelectSubQ}/>;
          case "Math": return <MathQ4 handleAnswerSelect={handleAnswerSelectSubQ}/>;
        }
        break;
      case 6:
        switch(selectedString) {
          case "Technology": return <TechQ5 handleAnswerSelect={handleAnswerSelectSubQ}/>;
          case "Healthcare": return <HealthcareQ5 handleAnswerSelect={handleAnswerSelectSubQ}/>;
          case "Business": return <BusinessQ5 handleAnswerSelect={handleAnswerSelectSubQ}/>;
          case "Math": return <MathQ5 handleAnswerSelect={handleAnswerSelectSubQ}/>;
        }
        break;
      case 7:
        switch(selectedString) {
          case "Technology": return <TechQ6 handleAnswerSelect={handleAnswerSelectSubQ}/>;
          case "Healthcare": return <HealthcareQ6 handleAnswerSelect={handleAnswerSelectSubQ}/>;
          case "Business": return <BusinessQ6 handleAnswerSelect={handleAnswerSelectSubQ}/>;
          case "Math": return <MathQ6 handleAnswerSelect={handleAnswerSelectSubQ}/>;
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
