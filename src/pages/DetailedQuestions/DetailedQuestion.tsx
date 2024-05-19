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
import genReport from '../GPT';
import fanfare from '../../assets/final-fantasy-vii-victory-fanfare-1.mp3'

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
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = React.createRef<HTMLAudioElement>();
  const [report, setReport] = useState("");
  const [isLoading, setIsLoading] = useState(true); // will be passed into final report
//Toggles whether or not the page's music is playing, and also progresses the page to the Final Report
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
    generateDetailedQuestionReport().then(response => {setReport(response); setIsLoading(false);}).catch(error => {setReport(error); setIsLoading(false)});
  };

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
    setIsAnswerSelected(selectedString !== '' ? true : false);
  };

  const SubQuestion1Answer = (selectedString: string) => {
    setQ2Answer(selectedString);
    setIsAnswerSelected(selectedString !== '' ? true : false);
  };

  const SubQuestion2Answer = (selectedString: string) => {
    setQ3Answer(selectedString);
    setIsAnswerSelected(selectedString !== '' ? true : false);
  };

  const SubQuestion3Answer = (selectedString: string) => {
    setQ4Answer(selectedString);
    setIsAnswerSelected(selectedString !== '' ? true : false);
  };

  const SubQuestion4Answer = (selectedString: string) => {
    setQ5Answer(selectedString);
    setIsAnswerSelected(selectedString !== '' ? true : false);
  };

  const SubQuestion5Answer = (selectedString: string) => {
    setQ6Answer(selectedString);
    setIsAnswerSelected(selectedString !== '' ? true : false);
  };

  const SubQuestion6Answer = (selectedString: string) => {
    setQ7Answer(selectedString);
    setIsAnswerSelected(selectedString !== '' ? true : false);
  };
  //#endregion
  //Proceeds to the next page, and informs the system that there is no longer an answer selected
  //Additionally, saves current quiz progress
  const handleNextButtonClick = () => {
    if (isAnswerSelected) {
      setCurrentPage(currentPage + 1)
      setIsAnswerSelected(false);
      saveData();
    }
  };

  useEffect(() => {
    setIsAnswerSelected(false);
  }, [currentPage]);

  //#region Save System
  useEffect(() => {
    const savedData = JSON.parse(localStorage.getItem('DetailedQuiz') || '{"answers":[],"page":1}');
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
    const toggleDropdown = () => {
      setIsDropdownOpen(!isDropdownOpen);
    };

    const toggleSettings = () => {
      setIsSettingsOpen(!isSettingsOpen);
    };

    /** Handles the counter for progress bar
  Ensures that the progress bar does not go up
  until an answer is selectef
  */
  const progressCounter = () => {
    if (isAnswerSelected) return currentPage;
    else return currentPage - 1;
  }
  /*Generates a report, by first generating a report prompt and then feeding the report prompt to ChatGPT*/
  const generateDetailedQuestionReport = () => {
    var reportPrompt = "";
    reportPrompt = "What was your favorite subject in highschool and why? " + Q1Answer + 
    " What are your hobbies and why do you enjoy them? " + Q2Answer + 
    " What is the best trait about yourself and why? " + Q3Answer + 
    " Do you enjoy school and education, why or why not? " + Q4Answer + 
    " What is one career that you would never want to work at and why? " + Q5Answer + 
    " Choose your favorite career and explain why you chose it. " + Q6Answer + 
    " List your values and explain why they are important to you. " + Q7Answer;
    return genReport(reportPrompt);}
  

  /*Switch Case from Basic question overlay, adjuseted for detailed question*/
  const renderCurrentPage = () => {
    switch(currentPage) {
      case 1:
        return <Detailed1 handleAnswerSelect={MainQuestion1Answer}/>
      case 2:
        return <Detailed2 handleAnswerSelect={SubQuestion1Answer}/>
      case 3:
        return <Detailed3 handleAnswerSelect={SubQuestion2Answer}/>
      case 4:
        return <Detailed4 handleAnswerSelect={SubQuestion3Answer}/>
      case 5:
        return <Detailed5 handleAnswerSelect={SubQuestion4Answer}/>
      case 6:
        return <Detailed6 handleAnswerSelect={SubQuestion5Answer}/>
      case 7:
        return <Detailed7 handleAnswerSelect={SubQuestion6Answer}/>
      case 8:
        return <FinalReport gptResponse={report} isLoading={isLoading}></FinalReport> // replaced placeholder
      default:
        return <Detailed1 handleAnswerSelect={MainQuestion1Answer}/>;
    }
  };
  return (
    <div>
      {/*Header for Questions*/}
      <header className="questionHeader">
      {currentPage === 8 ? (<p className="questionCounter">Final Report</p>) : (<p className="questionCounter">Question {currentPage}/7</p>) }
        <div className="buttonContainer">
          <button className="homeButton" onClick={goToHomePage}>Home</button>
          <button className="saveButton">Save</button>

        {/*Settings Menu*/}
          <SettingsMenu isOpen={isSettingsOpen} onClose={toggleSettings} onDarkModeToggle={toggleDarkMode} isDarkMode={isDarkMode} toggleDropdown={toggleDropdown}/>
          <div className={`dropdown ${isDropdownOpen ? 'open' : ''}`}>
          <button className="dropdownButton" onClick={toggleDropdown}>
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
          </button>
          {/*Settings Options*/}
          {isDropdownOpen && (
            <div className="dropdownContent">
              <button className="dropdownItem" onClick={toggleSettings}>Settings</button>
            </div>
          )}
        </div>
        </div>
      </header>
      {/*Page Counter && Logic*/}
      <div className='container'>
      <progress className='progressBar' value={progressCounter() / 7}></progress>
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
          <button className='changeProgressButton' onClick={() => {handleNextButtonClick(); togglePlay() }}> Submit </button>
        )}
      </div>
      <audio ref={audioRef}>
        <source src={fanfare} type="audio/mpeg" />
      </audio>
    </div>
  );
};  
export default DetailedQuestion;
  