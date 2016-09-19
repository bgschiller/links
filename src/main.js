import App from './components/app.jsx';
import favorites from './favorites.js';
import ReactDOM from 'react-dom';
import React from 'react';
window.favorites = favorites;
window.React = React;
require('./main.css');

ReactDOM.render(<App favorites={[]}/>, document.getElementById('app'))
favorites.then(function(f){
  ReactDOM.render(<App favorites={f}/>, document.getElementById('app'))
});
