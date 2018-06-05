import React from 'react';
import PropTypes from 'prop-types';

import MUAvatar from 'material-ui/Avatar';

export default class AppAvatar extends React.Component {
  static getInitials(text) {
    const words = text.split(/[\s.,;\-_]/);
    const ret =
      words.reduce((initials, word) =>
        (initials + word.charAt(0)), '') || '😎';

    return ret.substr(0, 2).toUpperCase();
  }

  render() {
    const { text } = this.props;

    return <MUAvatar>{this.getInitials(text)}</MUAvatar>;
  }
}

AppAvatar.propTypes = {
  text: PropTypes.string,
};
AppAvatar.defaultProps = {
  text: '😎',
};
