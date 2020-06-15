import React, { useState, useEffect } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import './App.scss';
import Homepage from './pages/homepage/Homepage';
import Shop from './pages/shop/Shop';
import Header from './components/Header/Header';
import SignInSignOut from './pages/sign-in-sign-out/SignInSignOut';
import Checkout from './pages/checkout/Checkout';
import { auth, createUserProfileDocument } from './firebase/utils';
import { setCurrentUser } from './redux/user/user.actions';
import { selectCurrentUser } from './redux/user/user.selectors';

function App() {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    auth.onAuthStateChanged(userAuth => {
      setCurrentUser(userAuth);
    });
  }, []);

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
      <Header />
      <Switch>
        <Route exact path='/' component={Homepage} />
        <Route path='/shop' component={Shop} />
        <Route exact path='/checkout' component={Checkout} />
        <Route
          exact
          path='/signin'
          render={() => (currentUser ? <Redirect to='/' /> : <SignInSignOut />)}
        />
      </Switch>
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
