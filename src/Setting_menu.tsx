import React from 'react';
import { Modal } from 'react-bootstrap';

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
    <Modal show={isOpen} onHide={onClose}>
      <Modal.Header closeButton>
        <Modal.Title>Settings</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <ul className="list-unstyled">
          <li className="mb-3">
            <div className="d-flex justify-content-between align-items-center">
              <label className="form-label">Dark Mode</label>
              <div className="form-check form-switch">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="darkModeToggle"
                  checked={isDarkMode}
                  onChange={handleDarkModeToggle}
                />
                <label className="form-check-label" htmlFor="darkModeToggle"></label>
              </div>
            </div>
          </li>
          <li className="mb-3">
            <div className="d-flex justify-content-between align-items-center">
              <label className="form-label">Language</label>
              <select className="form-select" id="languageSelect" style={{ width: '50%' }}>
                <option value="en">English</option>
                <option value="ja">Japanese</option>
              </select>
            </div>
          </li>
          <li className="mb-3">
            <div className="d-flex justify-content-between align-items-center">
              <label className="form-label">Music</label>
              <div className="form-check">
                <input className="form-check-input" type="checkbox" id="musicToggle" />
              </div>
            </div>
          </li>
        </ul>
      </Modal.Body>
    </Modal>
  );
};

export default SettingsMenu;
