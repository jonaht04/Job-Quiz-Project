//import React, { useState} from 'react';
import "./Questions.css";
//import Congrats from '../assets/GoodJob.gif'

interface Props {
    goToHomePage: () => void;
    isDarkMode: boolean;
    toggleDarkMode: () => void;
  }
    
  const FinalReport: React.FC<Props> = ({ goToHomePage , isDarkMode, toggleDarkMode }) => {
    /*
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  
      const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
      };

      const toggleSettings = () => {
        setIsSettingsOpen(!isSettingsOpen);
      };
      */
      return (
        <div>
            {/*Header Text*/}
            <h1>General Field: INSERT VARIABLE HERE</h1>
            <div className="finalReportSummary">Summary: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque hendrerit eget mi sit amet laoreet. Nam fringilla est a fringilla egestas. Donec vitae fermentum odio, a imperdiet tortor. Phasellus sed quam dui. Curabitur tortor dui, pulvinar sed auctor eget, hendrerit eget ex. Pellentesque maximus ipsum id lacinia convallis. Pellentesque aliquam eu velit in placerat. Morbi dapibus nibh mi, quis tempor magna cursus sit amet. </div>
            

            <div className="finalReportSubheader">Attributes of User:</div>

            <div className="finalReportListContainer">
            <ul className="finalReportList">
              <li>Trait One</li>
              <li>Trait Two</li>
              <li>Trai Three</li>
            </ul>
            </div>
 
            <div className="finalReportSubheader">Possible Jobs:</div>
            <div className="finalReportListContainer">
            <ul className="finalReportList">
              <li>Job One</li>
              <li>Job Two</li>
              <li>Job Three</li>
            </ul>
            </div>
            </div>
      );
    };  
    export default FinalReport;
