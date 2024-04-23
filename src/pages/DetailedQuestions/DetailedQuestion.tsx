import React, { useState} from 'react';
import "../Questions.css";
import SettingsMenu from '../../Setting_menu';
import Detailed1 from './Detailed1';
import Detailed2 from './Detailed2';
import Detailed3 from './Detailed3';
import Detailed4 from './Detailed4';
import Detailed5 from './Detailed5';
import Detailed6 from './Detailed6';
import Detailed7 from './Detailed7';

interface Props {
  goToHomePage: () => void;
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}
  
const DetailedQuestion: React.FC<Props> = ({ goToHomePage , isDarkMode, toggleDarkMode }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

    const toggleDropdown = () => {
      setIsDropdownOpen(!isDropdownOpen);
    };

    const toggleSettings = () => {
      setIsSettingsOpen(!isSettingsOpen);
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
        {currentPage === 1 ?
          <Detailed1/> : currentPage === 2 ?
            <Detailed2/> : currentPage === 3 ?
              <Detailed3/> : currentPage === 4 ?
                <Detailed4/> : currentPage === 5 ?
                  <Detailed5/> : currentPage === 6 ?
                    <Detailed6/> : <Detailed7/>}
    </div>

    {/*Next and Previous Page Buttons*/}
    <div className='container'>
      <button className="changeProgressButton" disabled={currentPage===1} onClick={() => {
        setCurrentPage(currentPage - 1)}}>Previous Question</button>
      <button className="changeProgressButton" disabled={currentPage===7} onClick={() => {
        setCurrentPage(currentPage + 1);}}>Next Question</button>
    </div>
    </div>
  );
};  
export default DetailedQuestion;
  
