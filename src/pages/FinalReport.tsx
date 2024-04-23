import React, { useState} from 'react';
import "./Questions.css";
import SettingsMenu from '../Setting_menu';

interface Props {
    goToHomePage: () => void;
    isDarkMode: boolean;
    toggleDarkMode: () => void;
  }
    
  const FinalReport: React.FC<Props> = ({ goToHomePage , isDarkMode, toggleDarkMode }) => {
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
      );
    };  
    export {};
    export default FinalReport;
