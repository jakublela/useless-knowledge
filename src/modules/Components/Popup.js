import React from 'react';
import './Popup.css';

function Popup(props) {
  return (props.trigger) ? (
    <div>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
        <div className="popup">
            <div className="popup-inner">
                <button type="button" className="close-btn" onClick={() => props.setTrigger(false)}>
                  <span class="material-symbols-outlined">close</span>
                </button>
                {props.children}
            </div>
        </div>
    </div>
  ) : "";
}

export default Popup;