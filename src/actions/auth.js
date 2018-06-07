import * as actionTypes from '../constants';
import callApi from '../utils/callApi';

export function onSignup(username, password) {
  return (dispatch) => {
    dispatch({
      type: actionTypes.SIGNUP_REQUEST,
    });

    return callApi({
      endpoint: '/signup',
      token: undefined,
      options: { method: 'POST' },
      payload: {
        username,
        password,
      }
    })
      .then((json) => {
        if (!json.token) {
          throw new Error('Token has not been provided!');
        }

        // Save JWT to localStorage
        localStorage.setItem('token', json.token);

        dispatch({
          type: actionTypes.SIGNUP_SUCCESS,
          payload: json,
        });
      })
      .catch(reason => dispatch({
        type: actionTypes.SIGNUP_FAILURE,
        payload: reason,
      }));
  };
}

export function onLogin(username, password) {
  return (dispatch) => {
    dispatch({
      type: actionTypes.LOGIN_REQUEST,
    });

    return callApi({
      endpoint: '/login',
      token: undefined,
      options: { method: 'POST' },
      payload: {
        username,
        password,
      },
    })
      .then((json) => {
        if (!json.token) {
          throw new Error('Token has not been provided!');
        }

        // Save JWT to localStorage
        localStorage.setItem('token', json.token);

        dispatch({
          type: actionTypes.LOGIN_SUCCESS,
          payload: json,
        });
      })
      .catch(reason => dispatch({
        type: actionTypes.LOGIN_FAILURE,
        payload: reason,
      }));
  };
}

export function logout() {
  return (dispatch) => {
    dispatch({
      type: actionTypes.LOGOUT_REQUEST,
    });
  };
}

export function checkAuth() {
  return (dispatch, getState) => {
    const { token } = getState().auth;

    if (!token) {
      return dispatch({
        type: actionTypes.VERIFY_AUTH_FAILURE,
      });
    }

    return callApi({
      endpoint: '/users/me',
      token,
    })
      .then((json) => {
        dispatch({
          type: actionTypes.VERIFY_AUTH_SUCCESS,
          payload: json,
        });
      })
      .catch(reason => dispatch({
        type: actionTypes.VERIFY_AUTH_FAILURE,
        payload: reason,
      }));
  };
}
