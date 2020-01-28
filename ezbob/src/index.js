import React from 'react';
import ReactDOM from 'react-dom';
import App from './js/components/App';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store as reduxStore } from './js/redux';

ReactDOM.render(
    <Provider store={reduxStore}>
        <Router>
            <App />
        </Router>
    </Provider>
    ,
    document.getElementById('root')
);


