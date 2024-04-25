import React, { useState, useEffect} from 'react';
import './App.css';
import BasicQuestion1 from './pages/BasicQuestions/BasicQuestionOverlay';
import DetailedQuestion from './pages/DetailedQuestions/DetailedQuestion';
import SettingsMenu from './Setting_menu';
import { Modal } from 'react-bootstrap';

function App() {
  const [key, setKey] = useState<string>('');
  const [currentPage, setCurrentPage] = useState<string>('');
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false); 
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [isStartNewShortQuiz, setIsStartNewShortQuiz] = useState(false);

  const toggleDropdown = () => {
      setIsDropdownOpen(!isDropdownOpen);
  };

  const toggleSettings = () => {
      setIsSettingsOpen(!isSettingsOpen);
  };

  const toggleShortQuiz = () => {
    setIsStartNewShortQuiz(!isStartNewShortQuiz);
  };

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }, [isDarkMode]);

  function handleSubmit() {
    localStorage.setItem("MYKEY", JSON.stringify(key));
  }

  function toggleDarkMode() {
    setIsDarkMode(prevMode => !prevMode);
  }

  function changeKey(event: React.ChangeEvent<HTMLInputElement>) {
    setKey(event.target.value);
  }

  function goToHomePage() {
    setCurrentPage(''); 
  }

  function goToBasicQuestionPage() {
    setCurrentPage('BasicQuestion1');
    toggleShortQuiz();
  }

  function goToDetailedQuestionPage() {
    setCurrentPage('DetailedQuesiton')
  }

  const startNewShortQuiz = () => {
    localStorage.removeItem('savedData');
    goToBasicQuestionPage();
    toggleShortQuiz();
  }

  return (
    <div className='App'>
      <div>
        {currentPage === '' ? (
        <div>
          <header className="homePgHeader">
            <div className="buttonContainer">
                <button className="homePgHeaderButtons" onClick={goToHomePage}>Home</button>
                <button className="homePgHeaderButtons" onClick={toggleShortQuiz}>Short Quiz</button>
                <button className="homePgHeaderButtons" onClick={goToDetailedQuestionPage}>Long Quiz</button>
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
        </div>
    ) : currentPage === 'BasicQuestion1' ? (
      <BasicQuestion1 goToHomePage={goToHomePage} isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
    ) : (
      <DetailedQuestion goToHomePage={goToHomePage} isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode}/>
    )}
    {currentPage === '' && (
      <div className='container'>
        <h1>Welcome to the (Placeholder Name) job quiz.</h1>
        <p className="spacer"> </p>
        <p className="textContainer">Unsure of what career is right for you? We have you covered.</p>
        <p></p>
        <p className="textContainer">With our (Placeholder Name)
            job quiz, you can discover careers perfect for you in just 10 minutes. By answering a   
            few simple questions, we will get you on the path to success.
        </p>
        
        <p className="spacer"> </p>
        <p className="spacer"> </p>
        <h2>There are two types of quizzes that you can take:</h2>
        <div className="promptContainer">
            <div><button className="quizButton" onClick={toggleShortQuiz}>Multiple Choice</button>
            <p className ="textContainer">This exam is the shorter quiz. Its questions are all multiple choice and shouldn’t take too long to complete. Choose the answer that best matches your own preferences, beliefs, and opinions. This test is powered by ChatGPT’s Large Language Model.</p></div>
            <div><button className="quizButton" onClick={goToDetailedQuestionPage}>Short Answer</button>
            <p className ="textContainer">This exam has more complex questions that require more thought with fill-in-the-blank answers being required. Expect this to take longer than the multiple choice. This test is powered by ChatGPT’s Large Language Model.</p></div>
        </div>
        <p></p>
        <p></p>
        <p className="wideTextContainer">Understand that we collect some information about you in order to suggest careers. This information is not used elsewhere for any purpose.</p>
        <form>
          <label>API Key:</label>
          <input type="password" placeholder="Insert API Key Here" onChange={changeKey} />
          <br></br>
          <button className="Submit-Button" type="button" onClick={handleSubmit}>Submit</button>
        </form>
      </div>
    )}
    <SettingsMenu isOpen={isSettingsOpen} onClose={toggleSettings} onDarkModeToggle={toggleDarkMode} isDarkMode={isDarkMode} toggleDropdown={toggleDropdown}/>


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
      </div> 
    </div>
  );
}

export default App;
