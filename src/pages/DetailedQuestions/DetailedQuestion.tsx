import React, { useEffect, useState} from 'react';
import "../Questions.css";
import SettingsMenu from '../../Setting_menu';
import Detailed1 from './Detailed1';
import Detailed2 from './Detailed2';
import Detailed3 from './Detailed3';
import Detailed4 from './Detailed4';
import Detailed5 from './Detailed5';
import Detailed6 from './Detailed6';
import Detailed7 from './Detailed7';
import FinalReport from '../FinalReport';

interface Props {
  goToHomePage: () => void;
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}
  
const DetailedQuestion: React.FC<Props> = ({ goToHomePage , isDarkMode, toggleDarkMode }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [isAnswerSelected, setIsAnswerSelected] = useState(false);

  //#region Question Answers
  const [Q1Answer, setQ1Answer] = useState("");
  const [Q2Answer, setQ2Answer] = useState("");
  const [Q3Answer, setQ3Answer] = useState("");
  const [Q4Answer, setQ4Answer] = useState("");
  const [Q5Answer, setQ5Answer] = useState("");
  const [Q6Answer, setQ6Answer] = useState("");
  const [Q7Answer, setQ7Answer] = useState("");
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

  const handleNextButtonClick = () => {
    if (isAnswerSelected) {
      setCurrentPage(currentPage + 1)
      setIsAnswerSelected(false);
      //saveData();
    }
  };

  useEffect(() => {
    setIsAnswerSelected(false);
  }, [currentPage]);

  /*//#region Save System
  useEffect(() => {
    const savedData = JSON.parse(localStorage.getItem('savedData') || '{"answers":[],"page":1}');
    setQ1Answer(savedData.answers[0] || "");
    setQ2Answer(savedData.answers[1] || "");
    setQ3Answer(savedData.answers[2] || "");
    setQ4Answer(savedData.answers[3] || "");
    setQ5Answer(savedData.answers[4] || "");
    setQ6Answer(savedData.answers[5] || "");
    setQ7Answer(savedData.answers[6] || "");
    setCurrentPage(savedData.page);
  }, []);
  
  const saveData = () => {
    const dataToSave = {
      answers: [Q1Answer, Q2Answer, Q3Answer, Q4Answer, Q5Answer, Q6Answer, Q7Answer],
      page: currentPage
    };
    localStorage.setItem('savedData', JSON.stringify(dataToSave));
  };
  //#endregion
  */
    const toggleDropdown = () => {
      setIsDropdownOpen(!isDropdownOpen);
    };

    const toggleSettings = () => {
      setIsSettingsOpen(!isSettingsOpen);
    };

    /* Handles the counter for progress bar
  Ensures that the progress bar does not go up
  until an answer is selectef
  */
  const progressCounter = () => {
    if (isAnswerSelected) return currentPage;
    else return currentPage - 1;
  }

  /*Switch Case from Basic question overlay, adjuseted for detailed question*/
  const renderCurrentPage = () => {
    switch(currentPage) {
      case 1:
        return <Detailed1 setSelectedString={setQ1Answer} handleAnswerSelect={MainQuestion1Answer}/>
      case 2:
        return <Detailed2/>
      case 3:
        return <Detailed3/>
      case 4:
        return <Detailed4/>
      case 5:
        return <Detailed5/>
      case 6:
        return <Detailed6/>
      case 7:
        return <Detailed7/>
      case 8:
        return <FinalReport goToHomePage={goToHomePage} isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode}/>
      default:
        return <Detailed1 setSelectedString={setQ1Answer} handleAnswerSelect={MainQuestion1Answer}/>;
    }
  };

  return (
    <div>
      {/*Header for Questions*/}
      <header className="questionHeader">
      <p className="questionCounter">Question {currentPage}/7</p>
        <div className="buttonContainer">
          <button className="homeButton" onClick={goToHomePage}>Home</button>
          <button className="saveButton">Save</button>

        {/*Settings Menu*/}
          <SettingsMenu isOpen={isSettingsOpen} onClose={toggleSettings} onDarkModeToggle={toggleDarkMode} isDarkMode={isDarkMode}/>
          <div className={`dropdown ${isDropdownOpen ? 'open' : ''}`}>
          <button className="dropdownButton" onClick={toggleDropdown}>
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
          </button>
          {/*Settings Options*/}
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
          
      {/*Page Counter && Logic*/}
      <div className='container'>
        {renderCurrentPage()}
    </div>

    {/*Next and Previous Page Buttons*/}
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
      <button onClick={() => console.log(Q1Answer)}>log</button>
    </div>
  );
};  
export default DetailedQuestion;
  