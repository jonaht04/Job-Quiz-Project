import React, { useState} from 'react';
import "../Questions.css";
import SettingsMenu from '../../Setting_menu';

export function Detailed3() {
    return (<div className='container'>
    <h1>Question 3</h1>
    <h2>What is the best trait about yourself and why?</h2>
    <div>
            <textarea id="input-text" className="detailedAnswerText" placeholder="Enter Answer Here..."></textarea>
        </div>
  </div>
  
)
}
export {}
export default Detailed3;