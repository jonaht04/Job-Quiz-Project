import React, { useState, useEffect} from 'react';
import "../Questions.css";
import SettingsMenu from '../../Setting_menu';
import MainBasicQ from './MainBasicQ';
//Import music used upon finishing the quiz
import fanfare from '../../assets/final-fantasy-vii-victory-fanfare-1.mp3'
//Importing all of the quiz questions from storage files
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

//#region GPT imports
import genReport from '../GPT';
import FinalReport from '../FinalReport';

interface Props {
  goToHomePage: () => void;
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}

const BasicQuestionOverlay: React.FC<Props> = ({ goToHomePage , isDarkMode, toggleDarkMode}) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false); //State variable representing whether the settings menu is currently open
  const [currentPage, setCurrentPage] = useState(1); //State variable representing the current page of the quiz that the user is on
  const [isAnswerSelected, setIsAnswerSelected] = useState(false); //State variable representing whether there is an answer selected on page
  const [report, setReport] = useState(""); //Variable used to store report message from ChatGPT
  const [isLoading, setIsLoading] = useState(true); // will be passed into final report
  
  const [isPlaying, setIsPlaying] = useState(false); //State variable representing whether the victory music is playing
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
    generateBasicQuestionReport().then(response => {setReport(response); setIsLoading(false);}).catch(error => {setReport(error); setIsLoading(false);});
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
      saveData();
    }
  };

  useEffect(() => {
    setIsAnswerSelected(false);
  }, [currentPage]);

  /* Handles the counter for progress bar
  Ensures that the progress bar does not go up
  until an answer is selectef
  */
  const progressCounter = () => {
    if (isAnswerSelected) return currentPage;
    else return currentPage - 1;
  }

  //#region Save System
  useEffect(() => {
    //interpret save data from JSON file
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
    //save current answers to local storage, including answers and current page of quiz
    localStorage.setItem('savedData', JSON.stringify(dataToSave));
  };
  //#endregion
  //#region report generation functions
  //Generates a report to feed to ChatGPT, based on the answer the user has provided to each of the questions + the questions themselves.
  //Branching system tracks which kind of quiz the user opted into from the first question of the BasicQuestionsQuiz
  const generateBasicQuestionReport = () => {
    var reportPrompt = "";
    if(Q1Answer === "Technology"){
      reportPrompt = "Which aspect of technology interests you the most? Answer: "  + Q2Answer + 
      " Are you interested in working with hardware or software development? Answer: " + Q3Answer + 
      " What programming languages or technical skills are you most proficient in?  Answer: " + Q4Answer + 
      " Do you prefer in a large corporate environment or a startup culture? Answer: " + Q5Answer + 
      " Are you interested in pursuing further education or certifications in your field? Answer: " + Q6Answer + 
      " What industries are you interested in applying your technology skills to? Answer: " + Q7Answer;
    }
    if(Q1Answer === "Healthcare"){
      reportPrompt = "Which type of healthcare role interests you the most? Answer: "  + Q2Answer + 
      " What area of medicine or healthcare are you passionate about? Answer: " + Q3Answer + 
      " Are you interested in patient care or research-oriented roles?  Answer: " + Q4Answer + 
      " Do you have any specific medical conditions or areas of interest you'd like to focus on? Answer: " + Q5Answer + 
      " Are you comfortable working in high-stress environments such as hospitals or clinics? Answer: " + Q6Answer + 
      " Are you interested in always being “On-call”? Answer: " + Q7Answer;
    }
    if(Q1Answer === "Business"){
      reportPrompt = "Which area of business are you most interested in? Answer: "  + Q2Answer + 
      " What specific aspect of finance or business management intrigues you? Answer: " + Q3Answer + 
      " Do you have a preference for working in corporate settings or startups?  Answer: " + Q4Answer + 
      " Are you interested in pursuing an MBA or other advanced business degree? Answer: " + Q5Answer + 
      " Do you enjoy working with numbers and analyzing data? Answer: " + Q6Answer + 
      " Are you interested in international business opportunities or global markets? Answer: " + Q7Answer;
    }
    if(Q1Answer === "Math"){
      reportPrompt = "What specific area of mathematics are you most passionate about? Answer: "  + Q2Answer + 
      " In which sector are you interested in pursuing a career? Answer: " + Q3Answer + 
      " Do you have experience or interest in using mathematical modeling and simulation techniques?  Answer: " + Q4Answer + 
      " Are you comfortable working with large datasets and applying mathematical algorithms for analysis? Answer: " + Q5Answer + 
      " Which type of role are you interested in? Answer: " + Q6Answer + 
      " Are you open to further education or obtaining certifications? Answer: " + Q7Answer;
    }
    return genReport(reportPrompt);}
  //end region

//Function to render the Basic Questions Page.
//switch command will change the questions shown to the user based on the interest indicated in the first question (IE: Tech, Healthcare, Business or Math).
  const renderCurrentPage = () => {
    //swap to next page of quiz
    switch(currentPage) {
      case 1:
        return <MainBasicQ   handleAnswerSelect={MainQuestion1Answer}/>;
      //second question
      case 2:
        switch(Q1Answer) {
          case "Technology": return <TechQ1 handleAnswerSelect={SubQuestion1Answer}/>;
          case "Healthcare": return <HealthcareQ1 handleAnswerSelect={SubQuestion1Answer}/>;
          case "Business": return <BusinessQ1 handleAnswerSelect={SubQuestion1Answer}/>;
          case "Math": return <MathQ1 handleAnswerSelect={SubQuestion1Answer}/>;
        }
        break;
      //third question
      case 3:
        switch(Q1Answer) {
          case "Technology": return <TechQ2   handleAnswerSelect={SubQuestion2Answer}/>;
          case "Healthcare": return <HealthcareQ2   handleAnswerSelect={SubQuestion2Answer}/>
          case "Business": return <BusinessQ2   handleAnswerSelect={SubQuestion2Answer}/>
          case "Math":return <MathQ2   handleAnswerSelect={SubQuestion2Answer}/>
        }
        break;
      //fourth question
      case 4:
        switch(Q1Answer) {
          case "Technology": return <TechQ3   handleAnswerSelect={SubQuestion3Answer}/>;
          case "Healthcare": return <HealthcareQ3   handleAnswerSelect={SubQuestion3Answer}/>;
          case "Business": return <BusinessQ3   handleAnswerSelect={SubQuestion3Answer}/>;
          case "Math": return <MathQ3   handleAnswerSelect={SubQuestion3Answer}/>;
        }
        break;
      //fifth question
      case 5:
        switch(Q1Answer) {
          case "Technology": return <TechQ4   handleAnswerSelect={SubQuestion4Answer}/>;
          case "Healthcare": return <HealthcareQ4   handleAnswerSelect={SubQuestion4Answer}/>;
          case "Business": return <BusinessQ4   handleAnswerSelect={SubQuestion4Answer}/>;
          case "Math": return <MathQ4   handleAnswerSelect={SubQuestion4Answer}/>;
        }
        break;
      //sixth question
      case 6:
        switch(Q1Answer) {
          case "Technology": return <TechQ5   handleAnswerSelect={SubQuestion5Answer}/>;
          case "Healthcare": return <HealthcareQ5   handleAnswerSelect={SubQuestion5Answer}/>;
          case "Business": return <BusinessQ5   handleAnswerSelect={SubQuestion5Answer}/>;
          case "Math": return <MathQ5   handleAnswerSelect={SubQuestion5Answer}/>;
        }
        break;
      //seventh question
      case 7:
        switch(Q1Answer) {
          case "Technology": return <TechQ6   handleAnswerSelect={SubQuestion6Answer}/>;
          case "Healthcare": return <HealthcareQ6   handleAnswerSelect={SubQuestion6Answer}/>;
          case "Business": return <BusinessQ6   handleAnswerSelect={SubQuestion6Answer}/>;
          case "Math": return <MathQ6   handleAnswerSelect={SubQuestion6Answer}/>;
        }
        break;
      case 8:
      //Show the final report page once all questions have been completed
        return <FinalReport gptResponse={report} isLoading={isLoading}></FinalReport>
      default:
        return <MainBasicQ   handleAnswerSelect={MainQuestion1Answer}/>;
    }
  };
  //Basic Question display
  return (
    <div>
      <SettingsMenu isOpen={isSettingsOpen} onClose={toggleSettings} onDarkModeToggle={toggleDarkMode} isDarkMode={isDarkMode} toggleDropdown={toggleDropdown}/>
      <header className="questionHeader">
      {currentPage === 8 ? (<p className="questionCounter">Final Report</p>) : (<p className="questionCounter">Question {currentPage}/7</p>) }
        <div className="buttonContainer">
          <button className="homeButton" onClick={goToHomePage}>Home</button>
          <button className="saveButton" onClick={saveData}>Save</button>
          <div className={`dropdown ${isDropdownOpen ? 'open' : ''}`}>
          <button className="dropdownButton" onClick={toggleDropdown}>
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
          </button>
          {isDropdownOpen && (
            <div className="dropdownContent">
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
          <button 
          className='changeProgressButton'
          disabled={!isAnswerSelected} 
          onClick={() => {togglePlay(); handleNextButtonClick()}}>
             Submit 
          </button>
        )}
      </div>
      <audio ref={audioRef}>
        <source src={fanfare} type="audio/mpeg" />
      </audio>
    </div>
  );
};

export default BasicQuestionOverlay;
