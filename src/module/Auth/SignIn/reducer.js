import Types from './type';

const initialState = {
  userEmail: '',
  userPassword: '',
};

export const SignInReducer = (state = initialState, action) => {
  switch (action.type) {
    case Types.UPDATE_USER_EMAIL_ADDRESS:
      return {...state, ...action.payload};
    case Types.UPDATE_USER_PASSWORD:
      return {...state, ...action.payload};
    default:
      return state;
  }
};
