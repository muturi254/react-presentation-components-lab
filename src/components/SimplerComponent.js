// Code SimplerComponent Here
import React  from 'react';


const SimplerComponent = (props) => {
    return (
        <div>
            <h2 onClick={props.handleClick}>I am just happy</h2>
        </div>
    )
}

export default SimplerComponent;