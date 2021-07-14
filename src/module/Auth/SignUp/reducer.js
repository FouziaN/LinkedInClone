import Types from './type';

const initialState = {
  firstName: '',
  password: '',
  email: '',
  lastName: '',
};

export const SignUpReducer = (state = initialState, action) => {
  switch (action.type) {
    case Types.UPDATE_FIRST_NAME:
      return {...state, ...action.payload};
    case Types.UPDATE_PASSWORD:
      return {...state, ...action.payload};
    case Types.UPDATE_EMAIL_ADDRESS:
      return {...state, ...action.payload};
    case Types.UPDATE_LAST_NAME:
      return {...state, ...action.payload};
    default:
      return state;
  }
};
