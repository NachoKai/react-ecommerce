import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { ReactComponent as Logo } from '../assets/knight.svg';
import { auth } from '../firebase/utils';
import CartIcon from './CartIcon';
import CartDropdown from './CartDropdown';
import { selectCartHidden } from '../redux/Cart';
import { selectCurrentUser } from '../redux/User';

const Container = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;

  .logo-container {
    height: 100%;
    width: 70px;
    padding: 25px;
  }

  .logo {
    max-width: 45px;
    height: auto;
  }
`;

const Options = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  .option {
    min-width: 60px;
    padding: 10px 15px;

    &:hover {
      cursor: pointer;
    }
  }
`;

const Header = ({ currentUser, hidden }) => {
  return (
    <Container>
      <Link className='logo-container' to='/'>
        <Logo className='logo' />
      </Link>
      <Options>
        <Link className='option' to='/shop'>
          SHOP
        </Link>
        <Link className='option' to='/contact'>
          CONTACT
        </Link>
        {currentUser ? (
          <div className='option' onClick={() => auth.signOut()}>
            SIGN OUT
          </div>
        ) : (
          <Link className='option' to='/signin'>
            SIGN IN
          </Link>
        )}
        <CartIcon />
      </Options>
      {hidden ? null : <CartDropdown />}
    </Container>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden,
});

export default connect(mapStateToProps)(Header);
