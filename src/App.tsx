import React, { useState, useEffect} from 'react';
import './App.css';
import BasicQuestion1 from './pages/BasicQuestions/BasicQuestionOverlay';
import DetailedQuestion from './pages/DetailedQuestions/DetailedQuestion';
import SettingsMenu from './Setting_menu';
import { Modal } from 'react-bootstrap';
import jobImage from './assets/jobImagePassive.png';

function App() {
  const [key, setKey] = useState<string>(''); //APIKey state variable
  const [currentPage, setCurrentPage] = useState<string>(''); //State variable representing current page
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false); //State variable representing what theme is currently active
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); //State variable representing whether menu is open
  const [isSettingsOpen, setIsSettingsOpen] = useState(false); //State variable representing whether settings menu pop-up is on screen
  const [isStartNewShortQuiz, setIsStartNewShortQuiz] = useState(false); //State variables attached to new quiz start
  const [isStartNewLongQuiz, setIsStartNewLongQuiz] = useState(false);
  // Series of functions that activate upon the usage of corresponding page elements,
  //Telling the program that those things are currently open
  const toggleDropdown = () => {
      setIsDropdownOpen(!isDropdownOpen);
  };

  const toggleSettings = () => {
      setIsSettingsOpen(!isSettingsOpen);
  };

  const toggleShortQuiz = () => {
    setIsStartNewShortQuiz(!isStartNewShortQuiz);
  };

  const toggleLongQuiz = () => {
    setIsStartNewLongQuiz(!isStartNewLongQuiz);
  };
  //Change website visuals based on whether dark mode has been selected
  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }, [isDarkMode]);
  //Function to handle submission of APIKey, and throws it into local storage
  function handleSubmit() {
    localStorage.setItem("MYKEY", JSON.stringify(key));
  }
  //Function to toggle darkmode upon button click in settings menu
  function toggleDarkMode() {
    setIsDarkMode(prevMode => !prevMode);
  }

  function changeKey(event: React.ChangeEvent<HTMLInputElement>) {
    setKey(event.target.value);
  }
//Series of functions to handle webpage navigation
  function goToHomePage() {
    setCurrentPage(''); 
  }

  function goToBasicQuestionPage() {
    setCurrentPage('BasicQuestion1');
    toggleShortQuiz();
  }

  function goToDetailedQuestionPage() {
    setCurrentPage('DetailedQuesiton')
    toggleLongQuiz();
  }
//Series of functions to handle new quizzes
  const startNewShortQuiz = () => {
    localStorage.removeItem('savedData');
    goToBasicQuestionPage();
    toggleShortQuiz();
  }

  const startNewLongQuiz = () => {
    localStorage.removeItem('savedData');
    goToDetailedQuestionPage();
    toggleLongQuiz();
  }
//Generate the actual HomePage that you see on screen, as well as the other pages depending on which button is clicked
  return (
    <div className='App'>
      <div>
        {/*Generate main page header*/}
        {currentPage === '' ? (
        <div>
          <header className="homePgHeader">
            <div className="buttonContainer">
                <button className="homePgHeaderButtons" onClick={goToHomePage}>Home</button>
                <button className="homePgHeaderButtons" onClick={toggleShortQuiz}>Short Quiz</button>
                <button className="homePgHeaderButtons" onClick={toggleLongQuiz}>Long Quiz</button>
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
          {/*Generate either basic questions or detailed questions based on currentPage state variable*/}
        </div>
    ) : currentPage === 'BasicQuestion1' ? (
      <BasicQuestion1 goToHomePage={goToHomePage} isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
    ) : (
      <DetailedQuestion goToHomePage={goToHomePage} isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode}/>
    )}
    {currentPage === '' && (
      <div className='container'>
        {/*Display rest of main page*/}
        <p className="spacer"> </p>
        <p className="spacer"> </p>

        <div className="imageLineupContainer">
          <div>
          <p className="largeTextContainer">Welcome to the Blessed job quiz.</p>
          <p className="descriptionTextContainer">Unsure of what career is right for you? We have you covered. With our Blessed
              job quiz, you can discover careers perfect for you in just 10 minutes. By answering a   
              few simple questions, we will get you on the path to success.
          </p>
          <p className="descriptionTextContainer">Understand that we collect some information about you in order to suggest careers. This information is not used elsewhere for any purpose. An API key is needed for this test to function.</p>
          </div>
          <img src={jobImage} alt="logo"></img>
        </div>
        {/*Section containing the two descritions of the quizzes as well as the associated buttons*/}
        <p className="largeTextContainer">Two Quiz Types:</p>
        <div className="promptContainer">
          <div className="buttonAndTextContainer">
            <button className="quizButton" onClick={toggleShortQuiz}>Short Quiz</button>
            <p className ="textContainer">This exam is the shorter quiz. Its questions are all multiple choice and shouldn’t take too long to complete. Choose the answer that best matches your own preferences, beliefs, and opinions. This test is powered by ChatGPT’s Large Language Model.</p>
          </div>
          <div className="buttonAndTextContainer">
            <button className="quizButton" onClick={toggleLongQuiz}>Long Quiz</button>
            <p className ="textContainer">This exam has more complex questions that require more thought with fill-in-the-blank answers being required. Expect this to take longer than the multiple choice. This test is powered by ChatGPT’s Large Language Model.</p>
          </div>
        </div>
        <p></p>
        <p></p>
        {/*APIKey submission box*/}
        <form>
          <label>API Key:</label>
          <input type="password" placeholder="Insert API Key Here" onChange={changeKey} />
          <br></br>
          <button className="Submit-Button" type="button" onClick={handleSubmit}>Submit</button>
        </form>
      </div>
    )}
    <SettingsMenu isOpen={isSettingsOpen} onClose={toggleSettings} onDarkModeToggle={toggleDarkMode} isDarkMode={isDarkMode} toggleDropdown={toggleDropdown}/>

{/*Pop-up menus associated with quizzes; prompts user to either continue old quiz or start new one*/}
    <Modal show={isStartNewShortQuiz} onHide={toggleShortQuiz} className="ShortQuizModal">
      <Modal.Header closeButton>
        <Modal.Title>Short Quiz</Modal.Title>
      </Modal.Header>
      <Modal.Body>
      <ul className="list-unstyled">
          <li className="mb-3">
            <div>
              <button className="ShortQuiz" onClick={goToBasicQuestionPage}>Continue Quiz</button>
            </div>
          </li>
          <li className="mb-3">
            <div className="shortQuiz">
            <button className="ShortQuiz" onClick={startNewShortQuiz}>Start New Quiz</button>
            </div>
          </li>
        </ul>
      </Modal.Body>
    </Modal>
    {/*Pop-up menu for detailed questions quiz*/}
    <Modal show={isStartNewLongQuiz} onHide={toggleLongQuiz} className="ShortQuizModal">
      <Modal.Header closeButton>
        <Modal.Title>Long Quiz</Modal.Title>
      </Modal.Header>
      <Modal.Body>
      <ul className="list-unstyled">
          <li className="mb-3">
            <div>
              <button className="ShortQuiz" onClick={goToDetailedQuestionPage}>Continue Quiz</button>
            </div>
          </li>
          <li className="mb-3">
            <div className="shortQuiz">
            <button className="ShortQuiz" onClick={startNewLongQuiz}>Start New Quiz</button>
            </div>
          </li>
        </ul>
      </Modal.Body>
    </Modal>
      </div> 
    </div>
  );
}

export default App;
