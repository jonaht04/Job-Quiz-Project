import React, { useState} from 'react';
import "../Questions.css";
import SettingsMenu from '../../Setting_menu';

export function Detailed2() {
    return (<div className='container'>
    <h1>Question 2</h1>
    <h2>What are your hobbies and why do you enjoy them?</h2>
    <div>
            <textarea id="input-text" className="detailedAnswerText" placeholder="Enter Answer Here..."></textarea>
        </div>
  </div>
  
)
}
export {}
export default Detailed2;