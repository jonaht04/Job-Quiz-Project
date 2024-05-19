import React from 'react';
import { Modal } from 'react-bootstrap';
import "./Setting_Menu.css"

interface Props {
  isOpen: boolean;
  onClose: () => void;
  onDarkModeToggle: (isChecked: boolean) => void;
  isDarkMode: boolean;
  toggleDropdown: () => void;
}

const SettingsMenu: React.FC<Props> = ({ isOpen, onClose, onDarkModeToggle, isDarkMode, toggleDropdown }) => {
  if (!isOpen) return null;

  const handleDarkModeToggle = (event: React.ChangeEvent<HTMLInputElement>) => {
    onDarkModeToggle(event.target.checked);
  };
//Function handling exiting the settings menu
  const CloseSettings = () =>
    {
      onClose();
      toggleDropdown();
    }

  return (
    <Modal show={isOpen} onHide={CloseSettings}>
      <Modal.Header closeButton>
        <Modal.Title>Settings</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <ul className="list-unstyled">
          <li className="mb-3">
            <div className="d-flex justify-content-between align-items-center">
              <label className="form-label">Dark Mode</label>
              <div className="form-check form-switch">
                {/*Form to enable Dark Mode*/}
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
        </ul>
      </Modal.Body>
    </Modal>
  );
};

export default SettingsMenu;
