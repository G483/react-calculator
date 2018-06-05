import React from 'react';

import '../css/Display.css';

const Display = (props) => {
    return <div className="display">
        {props.result}

        <p>{props.expression}</p>
    </div>
} 

export default Display;