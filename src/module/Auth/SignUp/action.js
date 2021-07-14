const {default: Types} = require('./type');

export const updateFirstName = name => {
  return (dispatch, getState) => {
    dispatch({
      type: Types.UPDATE_FIRST_NAME,
      payload: {userName: name},
    });
  };
};

export const updatePassword = password => {
  return (dispatch, getState) => {
    dispatch({
      type: Types.UPDATE_PASSWORD,
      payload: {password: password},
    });
  };
};

export const updateEmailAddress = email => {
  return (dispatch, getState) => {
    dispatch({
      type: Types.UPDATE_EMAIL_ADDRESS,
      payload: {email: email},
    });
  };
};
export const updateLastName = lastName => {
  return (dispatch, getState) => {
    dispatch({
      type: Types.UPDATE_LAST_NAME,
      payload: {lastName: lastName},
    });
  };
};
