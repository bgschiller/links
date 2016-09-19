import React from 'react';
import Favorite from './favorite.jsx';
import favorites from '../favorites.js';

const App = React.createClass({
  render(){
    return (
      <div>
        <h1>Favorite Links</h1>
        <div className="container">
          <ul className="items">
            {this.props.favorites.map((f)=> <Favorite {...f} />)}
          </ul>
        </div>
      </div>
    );
  }
});
export default App;
