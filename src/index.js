import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

console.log('Rendering the app');  // This is a JavaScript comment, not JSX

ReactDOM.render(
  <React.StrictMode>
    
    <div></div>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
