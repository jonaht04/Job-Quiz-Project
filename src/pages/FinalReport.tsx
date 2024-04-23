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
  
      const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
      };
  
      const toggleSettings = () => {
        setIsSettingsOpen(!isSettingsOpen);
      };
      return (
        <div>
            {/*Header Text*/}
            <h1>General Field: INSERT VARIABLE HERE</h1>
            <div className="finalReportSummary">Summary: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque hendrerit eget mi sit amet laoreet. Nam fringilla est a fringilla egestas. Donec vitae fermentum odio, a imperdiet tortor. Phasellus sed quam dui. Curabitur tortor dui, pulvinar sed auctor eget, hendrerit eget ex. Pellentesque maximus ipsum id lacinia convallis. Pellentesque aliquam eu velit in placerat. Morbi dapibus nibh mi, quis tempor magna cursus sit amet. </div>
            
            <div className="finalReportSubheader">Attributes of User:</div>
            <div className="finalReportSubheader">Possible Jobs:</div>

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
    export default FinalReport;
