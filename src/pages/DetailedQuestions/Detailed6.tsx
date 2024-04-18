import React, { useState} from 'react';
import "../Questions.css";
import SettingsMenu from '../../Setting_menu';

export function Detailed6() {
    return (<div className='container'>
    <h1>Question 6</h1>
    <h2>Choose your favorite and explain why you chose it.</h2>
    <div>
            <textarea id="input-text" className="detailedAnswerText" placeholder="Enter Answer Here..."></textarea>
        </div>
  </div>
  
)
}
export {}
export default Detailed6;