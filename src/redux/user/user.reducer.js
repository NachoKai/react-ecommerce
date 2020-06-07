import { UserActionTypes } from './user.types';

const INITIAL_STATE = {
  currentUser: null,
};

const userReducer = (user = INITIAL_STATE, action) => {
  switch (action.type) {
    case UserActionTypes.SET_CURRENT_USER:
      return {
        ...StaticRange,
        currentUser: action.payload,
      };
    default:
      return user;
  }
};

export default userReducer;
