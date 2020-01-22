import React from 'react';


const ButtonsPanel = (props) => {
    return (
        <div className='buttons-panel'>
            To jest panel przycisków
            <button onClick={props.changeValue}>Add 1</button>
            <button onClick={props.stepChange}>Add {props.stepValue}</button>
            <button onClick={() => props.resetValue(true)}>Set 0</button>
            <button onClick={() => props.resetValue(false)}>Reset</button>
        </div>
    );
}

export default ButtonsPanel;