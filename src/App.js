import React, { useState, useEffect } from 'react';
import './App.scss';
import Homepage from './pages/homepage/Homepage';
import { Switch, Route } from 'react-router-dom';
import Shop from './pages/shop/Shop';
import Header from './components/Header/Header';
import SignInSignOut from './pages/sign-in-sign-out/SignInSignOut';
import { auth, createUserProfileDocument } from './firebase/utils';

function App() {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    auth.onAuthStateChanged(userAuth => {
      setCurrentUser(userAuth);
    });
  }, [currentUser]);

  useEffect(() => {
    auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data(),
          });
        });
      } else {
        setCurrentUser({ userAuth });
      }
    });
  }, []);

  return (
    <div className='App'>
      <Header currentUser={currentUser} />
      <Switch>
        <Route exact path='/' component={Homepage} />
        <Route path='/shop' component={Shop} />
        <Route path='/signin' component={SignInSignOut} />
      </Switch>
    </div>
  );
}

export default App;
