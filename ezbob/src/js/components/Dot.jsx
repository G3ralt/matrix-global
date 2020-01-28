import React from 'react';
import { NavLink } from 'react-router-dom';

const Dot = () => {
    return (
        <>
            <NavLink to="/react-task">Other comps</NavLink>
            <div className="circle center" >
                <div className="insideCircle center" >
                </div>
            </div>
        </>
    );
}

export default Dot;