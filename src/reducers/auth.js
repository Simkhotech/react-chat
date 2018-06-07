import * as actionTypes from '../constants';

const token = localStorage.getItem('token');

const initialState = {
  isAuthenticated: !!token,
  user: null,
  token,
};

export default function auth(state = initialState, action) {
  switch (action.type) {
    case actionTypes.SIGNUP_SUCCESS:
    case actionTypes.LOGIN_SUCCESS:
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload.user,
        token: action.payload.token,
      };
    case actionTypes.VERIFY_AUTH_SUCCESS:
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload.user,
      };
    case actionTypes.SIGNUP_FAILURE:
    case actionTypes.LOGIN_FAILURE:
    case actionTypes.VERIFY_AUTH_FAILURE:
      return {
        ...state,
        isAuthenticated: false,
        user: null,
        token: '',
      };
    default:
      return state;
  }
}
