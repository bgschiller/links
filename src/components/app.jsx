import React from 'react';
import Favorite from './favorite.jsx';
import favorites from '../favorites.js';

const App = React.createClass({
  render(){
    return (
      <div>
        <h1>Brian's Favorites</h1>
        {this.props.favorites.map((f)=> <Favorite {...f} />)}
      </div>
    );
  }
});
export default App;
