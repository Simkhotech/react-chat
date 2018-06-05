import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from 'material-ui';

import ChatMessageList from './ChatMessageList';
import MessageInput from './MessageInput';

const styles = theme => ({
  chatLayout: {
    display: 'flex',

    height: '100%',
    overflow: 'hidden',

    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 64,

    width: 'calc(100% - 320px)',
    paddingLeft: 320,
  },
});

class Chat extends React.Component {
  render() {
    const { classes, messages } = this.props;

    return (
      <main className={classes.chatLayout}>
        <ChatMessageList messages={messages} />
        <MessageInput />
      </main>
    );
  }
}

Chat.propTypes = {
  classes: PropTypes.shape({ chatLayout: {} }).isRequired,
  messages: PropTypes.string.isRequired,
};


export default withStyles(styles)(Chat);
