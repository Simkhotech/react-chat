import * as actionTypes from '../constants';

export function onSignup(username, password) {
  return (dispatch) => {
    dispatch({
      type: actionTypes.SIGNUP_REQUEST,
    });

    return fetch('http://localhost:8000/v1/signup', {
      method: 'POST',
      body: JSON.stringify({
        username,
        password,
      }),
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    })
      .then(response => response.json())
      .then((json) => {
        if (json.success) {
          return json;
        }

        throw new Error(json.message);
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

    return fetch('http://localhost:8000/v1/login', {
      method: 'POST',
      body: JSON.stringify({
        username,
        password,
      }),
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    })
      .then(response => response.json())
      .then((json) => {
        if (json.success) {
          return json;
        }

        throw new Error(json.message);
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
    console.log('checkAuth');

    if (!token) {
      return dispatch({
        type: actionTypes.VERIFY_AUTH_FAILURE,
      });
    }

    return fetch('http://localhost:8000/v1/users/me', {
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    })
      .then(response => response.json())
      .then((json) => {
        if (json.success) {
          return json;
        }

        throw new Error(json.message);
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
