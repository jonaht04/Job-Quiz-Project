import React, { useState} from 'react';
import "../Questions.css";
import SettingsMenu from '../../Setting_menu';

export function Detailed7() {
    return (<div className='container'>
    <h1>Question 7</h1>
    <h2>List your values and explain why they are important to you.</h2>
    <div>
            <textarea id="input-text" className="detailedAnswerText" placeholder="Enter Answer Here..."></textarea>
        </div>
  </div>
  
)
}
export {}
export default Detailed7;