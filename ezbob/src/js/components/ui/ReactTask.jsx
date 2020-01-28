import React from 'react';
import { HelloComp } from '../containers/HelloComp';

export const ReactTask = ({ click = f => f }) => {
    return (
        <>
            <button onClick={() => click()
            } >Click me</button>
            <HelloComp />
            <HelloComp />
        </>
    );
};