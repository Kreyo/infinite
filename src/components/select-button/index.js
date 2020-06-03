import React from 'react';
import './index.css';

const SelectButton = ({ isPrimary, label, primaryLink = '#/', actions = [] }) => {
    return (
        <div className={`if select-button ${isPrimary ? 'primary' : ''} ${!actions.length ? 'no-actions' : ''}`}>
            <a className="button" href={primaryLink}>{label}</a>
            <select className="select">
                {actions.map(action => <option key={action.label} onClick={action.onClick}>{action.label}</option>)}
            </select>
        </div>
    );
}

export default SelectButton;
