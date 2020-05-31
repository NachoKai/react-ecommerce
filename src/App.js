import React from 'react';
import './App.scss';
import Homepage from './pages/homepage/Homepage';
import { Switch, Route } from 'react-router-dom';
import Shop from './pages/shop/Shop';

function App() {
  return (
    <div className='App'>
      <Switch>
        <Route exact path='/' component={Homepage} />
        <Route path='/shop' component={Shop} />
      </Switch>
    </div>
  );
}

export default App;
