import React from 'react';

import '../css/Keypad.css';

const Keypad = (props) => {
    return <div className={"key " + (props.extraClasses || '')} onClick={props.action}>
        <span>{props.symbol}</span>
    </div>
}

export default Keypad;