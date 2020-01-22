import React from 'react';

const Step = props => {
    return (
        <div className='step-container'>
            <p className='step'>Krok</p>
            <input type="number" value={props.stepValue} onChange={props.changeButtonValue} />
        </div>

    )
}

export default Step;