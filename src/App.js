import React from 'react';
import {HashRouter} from 'react-router-dom'
import routes from './routes'
import Nav from './Components/Nav'
import './App.css';

function App() {
  return (
    <HashRouter>
      <div className="App">
        <Nav />
      {routes}
      </div>
    </HashRouter>
  );
}

export default App;
