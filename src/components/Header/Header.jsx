import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { ReactComponent as Logo } from '../../assets/knight.svg';
import { auth } from '../../firebase/utils';

const HeaderContainer = styled.div`
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
    padding: 10px 15px;

    &:hover {
      cursor: pointer;
    }
  }
`;

const Header = ({ currentUser }) => {
  return (
    <HeaderContainer>
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
      </Options>
    </HeaderContainer>
  );
};

const mapStateToProps = user => ({
  currentUser: user.currentUser,
});

export default connect(mapStateToProps)(Header);
