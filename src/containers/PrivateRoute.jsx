import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect, withRouter } from 'react-router-dom';

import { checkAuth } from '../actions';

class PrivateRoute extends React.Component {
  componentDidMount() {
    this.props.checkAuth();

    console.log('PrivateRoute.componentDidMount');
  }

  render() {
    const { component: Component, isAuthenticated, ...rest } = this.props;

    console.log('PrivateRoute.render');

    return (
      <Route
        {...rest}
        render={
          props => (
            isAuthenticated
              ? <Component {...props} />
              : <Redirect to={{
                  pathname: '/login',
                  state: { from: props.location },
                  }}
              />
        )}
      />
    );
  }
}

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
});

const mapDispatchToProps = dispatch => ({
  checkAuth: () => dispatch(checkAuth()),
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps,
)(PrivateRoute));
