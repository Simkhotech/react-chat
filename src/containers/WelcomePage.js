import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { onSignup, onLogin } from '../actions';
import WelcomePage from '../components/WelcomePage';

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  onSignup,
  onLogin,
}, dispatch);


export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(WelcomePage);
