import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';
import registerServiceWorker from './registerServiceWorker';
// https://medium.freecodecamp.org/learn-react-js-in-5-minutes-526472d292f4
// https://stackoverflow.com/questions/30762734/multiple-react-components-in-a-single-module
ReactDOM.render(<App msg="hello world "/>, document.getElementById('app'));
registerServiceWorker();
