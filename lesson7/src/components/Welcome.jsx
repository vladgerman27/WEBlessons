import React from 'react';

const Welcome = (props) => {
    return (
        <h1>
            Welcome, <i>{props.name}</i>
        </h1>
    );
};

export default Welcome;