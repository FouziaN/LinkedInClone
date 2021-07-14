import Types from './type';

const initialState = {
  email: '',
  otp: '',
};

export const ForgetPasswordReducer = (state = initialState, action) => {
  switch (action.type) {
    case Types.UPDATE_EMAIL_ADDRESS:
      return {...state, ...action.payload};
    case Types.UPDATE_OTP:
      return {...state, ...action.payload};
    default:
      return state;
  }
};
