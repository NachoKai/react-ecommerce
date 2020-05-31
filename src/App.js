import React from 'react';
import './App.scss';
import Homepage from './pages/homepage/Homepage';
import { Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div className='App'>
      <Switch>
        <Route exact path='/' component={Homepage} />
      </Switch>
    </div>
  );
}

export default App;
