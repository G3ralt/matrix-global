import React from 'react';

export const HelloComp = ({ click = false }) => {
    return (
        <h1>
            {`${click ? "Hello" : ""}`}
        </h1>
    );
};