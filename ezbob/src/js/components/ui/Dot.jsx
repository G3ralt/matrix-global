import React from 'react';
import { NavLink } from 'react-router-dom';

const Dot = () => {
    return (
        <>
            <NavLink to="/react-task">Other comps</NavLink>
            <div className="circle" >
                <div className="insideCircle" >
                </div>
            </div>
        </>
    );
}

export default Dot;