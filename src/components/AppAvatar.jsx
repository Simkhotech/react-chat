import React from 'react';
import MUAvatar from 'material-ui/Avatar';

export default class AppAvatar extends React.Component {
  getInitials(text, count) {
    const words = text.split(/[\s.,;\-_]/);
    const ret =
      words.reduce((initials, word) => {
        return initials + word.charAt(0);
      }, '') || '😎';

    return ret.substr(0, 2).toUpperCase();
  }

  render() {
    const { text } = this.props;

    return <MUAvatar>{this.getInitials(text)}</MUAvatar>;
  }
}
