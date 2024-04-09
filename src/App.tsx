// App.tsx
import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import BasicQuestion1 from './Basic_Question1';
import DetailedQuestion from './DetailedQuestion';

function App() {
  const [key, setKey] = useState<string>('');
  const [currentPage, setCurrentPage] = useState<string>('');

  function handleSubmit() {
    localStorage.setItem("MYKEY", JSON.stringify(key));
  }

  function changeKey(event: React.ChangeEvent<HTMLInputElement>) {
    setKey(event.target.value);
  }

  function goToHomePage() {
    setCurrentPage(''); 
  }

  function goToBasicQuestionPage() {
    setCurrentPage('BasicQuestion1'); // Navigate to the first new page
  }

  function goToDetailedQuestionPage() {
    setCurrentPage('DetailedQuesiton')
  }

  return (
    <div className="App">
      {currentPage === '' ? (
        <div>
          <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.tsx</code> and save to reload and also I'm NATHAN CHEN RAHHH.
            Juan Saquino
            Jonah Thomas
            Alexander Lee
            main
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <button onClick={goToBasicQuestionPage}>Go to Basic Question Page</button>
          <button onClick={goToDetailedQuestionPage}>Go to Detailed Question Page</button>
        </header>
          <form>
            <label>API Key:</label>
            <input type="password" placeholder="Insert API Key Here" onChange={changeKey} />
            <br></br>
            <button className="Submit-Button" type="button" onClick={handleSubmit}>Submit</button>
          </form>
        </div>
      ) : currentPage === 'BasicQuestion' ? (
        <BasicQuestion1 goToHomePage={goToHomePage} />
      ) : (<DetailedQuestion goToHomePage={goToHomePage} />)}
    </div>
  );
}

export default App;