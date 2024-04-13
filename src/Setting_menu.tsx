import React from 'react';
import './Setting_Menu.css';

interface Props {
  isOpen: boolean;
  onClose: () => void;
  onDarkModeToggle: (isChecked: boolean) => void;
  isDarkMode: boolean; // New prop for dark mode state
}

const SettingsMenu: React.FC<Props> = ({ isOpen, onClose, onDarkModeToggle, isDarkMode }) => {
  if (!isOpen) return null;

  const handleDarkModeToggle = (event: React.ChangeEvent<HTMLInputElement>) => {
    onDarkModeToggle(event.target.checked);
  };

  return (
    <div className="overlay">
      <div className="modal">
        <button className="closeButton" onClick={onClose}>Close</button>
        <h1 className='settingHeader'>Settings</h1>
        <ul className="settingsList">
          <li className='settingItem'>
            <span className='settingName'>Dark Mode</span>
            <div className="options">
              <label className="toggle">
                <input type="checkbox" checked={isDarkMode} onChange={handleDarkModeToggle} />
                <span className="slider dark"></span>
              </label>
            </div>
          </li>
          <li className='settingItem'>
            <span className='settingName'>Language</span>
            <div className="options">
              <select>
                <option value="en">English</option>
                <option value="ja">Japanese</option>
              </select>
            </div>
          </li>
          <li className='settingItem'>
            <span className='settingName'>Music</span>
            <div className="options">
              <input type="checkbox" />
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SettingsMenu;
