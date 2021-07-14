import {combineReducers} from 'redux';
import {SignUpReducer} from '../module/Auth/SignUp/reducer';
import {SignInReducer} from '../module/Auth/SignIn/reducer';
import {ForgetPasswordReducer} from '../module/Auth/Password/reducer';

export default combineReducers({
  SignUpReducer,
  SignInReducer,
  ForgetPasswordReducer,
});
