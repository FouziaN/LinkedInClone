const {default: Types} = require('./type');

export const updateEmailAddress = email => {
  return (dispatch, getState) => {
    dispatch({
      type: Types.UPDATE_USER_EMAIL_ADDRESS,
      payload: {userEmail: email},
    });
  };
};

export const updatePassword = password => {
  return (dispatch, getState) => {
    dispatch({
      type: Types.UPDATE_USER_PASSWORD,
      payload: {userPassword: password},
    });
  };
};
