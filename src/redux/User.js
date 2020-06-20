// SELECTORS ================================
// ==========================================
// ==========================================

import { createSelector } from 'reselect';

const selectUser = state => state.user;

export const selectCurrentUser = createSelector(
  [selectUser],
  user => user.currentUser
);

// ACTIONS ==================================
// ==========================================
// ==========================================

export const setCurrentUser = user => ({
  type: UserActionTypes.SET_CURRENT_USER,
  payload: user,
});

// REDUCER ==================================
// ==========================================
// ==========================================

const INITIAL_STATE = {
  currentUser: null,
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UserActionTypes.SET_CURRENT_USER:
      return {
        ...state,
        currentUser: action.payload,
      };
    default:
      return state;
  }
};

export default userReducer;

// TYPES ====================================
// ==========================================
// ==========================================

export const UserActionTypes = {
  SET_CURRENT_USER: 'SET_CURRENT_USER',
};
