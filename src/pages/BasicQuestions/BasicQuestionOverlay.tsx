import React, { useState, useEffect} from 'react';
import "../Questions.css";
import SettingsMenu from '../../Setting_menu';
import MainBasicQ from './MainBasicQ';
import fanfare from '../../assets/final-fantasy-vii-victory-fanfare-1.mp3'

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
  const [isAnswerSelected, setIsAnswerSelected] = useState(false);
  
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = React.createRef<HTMLAudioElement>();

  const togglePlay = () => {
    const audio = audioRef.current;
    if (audio) {
      if (isPlaying) {
        audio.pause();
      } else {
        audio.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  //#region Question Answers
  const [Q1Answer, setQ1Answer] = useState("");
  const [/*Q2Answer*/, setQ2Answer] = useState("");
  const [/*Q3Answer*/, setQ3Answer] = useState("");
  const [/*Q4Answer*/, setQ4Answer] = useState("");
  const [/*Q5Answer*/, setQ5Answer] = useState("");
  const [/*Q6Answer*/, setQ6Answer] = useState("");
  const [/*Q7Answer*/, setQ7Answer] = useState("");
  //#endregion

  //#region Question Answer functions
  const MainQuestion1Answer = (selectedString: string) => {
    setQ1Answer(selectedString);
    setIsAnswerSelected(true);
  };

  const SubQuestion1Answer = (selectedString: string) => {
    setQ2Answer(selectedString);
    setIsAnswerSelected(true);
  };

  const SubQuestion2Answer = (selectedString: string) => {
    setQ3Answer(selectedString);
    setIsAnswerSelected(true);
  };

  const SubQuestion3Answer = (selectedString: string) => {
    setQ4Answer(selectedString);
    setIsAnswerSelected(true);
  };

  const SubQuestion4Answer = (selectedString: string) => {
    setQ5Answer(selectedString);
    setIsAnswerSelected(true);
  };

  const SubQuestion5Answer = (selectedString: string) => {
    setQ6Answer(selectedString);
    setIsAnswerSelected(true);
  };

  const SubQuestion6Answer = (selectedString: string) => {
    setQ7Answer(selectedString);
    setIsAnswerSelected(true);
  };
  //#endregion

  //#region Settings functions
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const toggleSettings = () => {
    setIsSettingsOpen(!isSettingsOpen);
  };
  //#endregion

  const handleNextButtonClick = () => {
    if (isAnswerSelected) {
      setCurrentPage(currentPage + 1)
      setIsAnswerSelected(false);
    }
  };

  useEffect(() => {
    setIsAnswerSelected(false);
  }, [currentPage]);

  const progressCounter = () => {
    if (isAnswerSelected) return currentPage;
    else return currentPage - 1;
  }

  const renderCurrentPage = () => {
    switch(currentPage) {
      case 1:
        return <MainBasicQ setSelectedString={setQ1Answer} handleAnswerSelect={MainQuestion1Answer}/>;
      case 2:
        switch(Q1Answer) {
          case "Technology": return <TechQ1 setSelectedString={setQ2Answer} handleAnswerSelect={SubQuestion1Answer}/>;
          case "Healthcare": return <HealthcareQ1 setSelectedString={setQ2Answer} handleAnswerSelect={SubQuestion1Answer}/>;
          case "Business": return <BusinessQ1 setSelectedString={setQ2Answer} handleAnswerSelect={SubQuestion1Answer}/>;
          case "Math": return <MathQ1 setSelectedString={setQ2Answer} handleAnswerSelect={SubQuestion1Answer}/>;
        }
        break;
      case 3:
        switch(Q1Answer) {
          case "Technology": return <TechQ2 setSelectedString={setQ3Answer} handleAnswerSelect={SubQuestion2Answer}/>;
          case "Healthcare": return <HealthcareQ2 setSelectedString={setQ3Answer} handleAnswerSelect={SubQuestion2Answer}/>
          case "Business": return <BusinessQ2 setSelectedString={setQ3Answer} handleAnswerSelect={SubQuestion2Answer}/>
          case "Math":return <MathQ2 setSelectedString={setQ3Answer} handleAnswerSelect={SubQuestion2Answer}/>
        }
        break;
      case 4:
        switch(Q1Answer) {
          case "Technology": return <TechQ3 setSelectedString={setQ4Answer} handleAnswerSelect={SubQuestion3Answer}/>;
          case "Healthcare": return <HealthcareQ3 setSelectedString={setQ4Answer} handleAnswerSelect={SubQuestion3Answer}/>;
          case "Business": return <BusinessQ3 setSelectedString={setQ4Answer} handleAnswerSelect={SubQuestion3Answer}/>;
          case "Math": return <MathQ3 setSelectedString={setQ4Answer} handleAnswerSelect={SubQuestion3Answer}/>;
        }
        break;
      case 5:
        switch(Q1Answer) {
          case "Technology": return <TechQ4 setSelectedString={setQ5Answer} handleAnswerSelect={SubQuestion4Answer}/>;
          case "Healthcare": return <HealthcareQ4 setSelectedString={setQ5Answer} handleAnswerSelect={SubQuestion4Answer}/>;
          case "Business": return <BusinessQ4 setSelectedString={setQ5Answer} handleAnswerSelect={SubQuestion4Answer}/>;
          case "Math": return <MathQ4 setSelectedString={setQ5Answer} handleAnswerSelect={SubQuestion4Answer}/>;
        }
        break;
      case 6:
        switch(Q1Answer) {
          case "Technology": return <TechQ5 setSelectedString={setQ6Answer} handleAnswerSelect={SubQuestion5Answer}/>;
          case "Healthcare": return <HealthcareQ5 setSelectedString={setQ6Answer} handleAnswerSelect={SubQuestion5Answer}/>;
          case "Business": return <BusinessQ5 setSelectedString={setQ6Answer} handleAnswerSelect={SubQuestion5Answer}/>;
          case "Math": return <MathQ5 setSelectedString={setQ6Answer} handleAnswerSelect={SubQuestion5Answer}/>;
        }
        break;
      case 7:
        switch(Q1Answer) {
          case "Technology": return <TechQ6 setSelectedString={setQ7Answer} handleAnswerSelect={SubQuestion6Answer}/>;
          case "Healthcare": return <HealthcareQ6 setSelectedString={setQ7Answer} handleAnswerSelect={SubQuestion6Answer}/>;
          case "Business": return <BusinessQ6 setSelectedString={setQ7Answer} handleAnswerSelect={SubQuestion6Answer}/>;
          case "Math": return <MathQ6 setSelectedString={setQ7Answer} handleAnswerSelect={SubQuestion6Answer}/>;
        }
        break;
      default:
        return <MainBasicQ setSelectedString={setQ1Answer} handleAnswerSelect={MainQuestion1Answer}/>;
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
            </div>
          )}
        </div>
        </div>
      </header>
      <div className='container'>
      <progress className='progressBar' value={progressCounter() / 7}></progress>
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
          <button className='changeProgressButton' onClick={togglePlay}> Submit </button>
        )}
      </div>
      <audio ref={audioRef}>
        <source src={fanfare} type="audio/mpeg" />
      </audio>
    </div>
  );
};

export default BasicQuestionOverlay;
