const {default: Types} = require('./type');

export const updateEmailAddress = email => {
  return (dispatch, getState) => {
    dispatch({
      type: Types.UPDATE_EMAIL_ADDRESS,
      payload: {email: email},
    });
  };
};

export const updateOtp = otp => {
  return (dispatch, getState) => {
    dispatch({
      type: Types.UPDATE_OTP,
      payload: {otp: otp},
    });
  };
};
