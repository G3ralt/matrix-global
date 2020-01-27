import React from 'react';
import '../styles/App.css';

function App() {
  return (
    <>
    <div className="circle center" 
      onAnimationIteration={() => {console.log('blinked')}}
    >
      <div className="insideCircle center" >
        

      </div>

    </div>
    </>
  );
}

export default App;
