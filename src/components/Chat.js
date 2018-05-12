import React from 'react'
import { withStyles } from 'material-ui';

import ChatMessageList from "./ChatMessageList";
import MessageInput from "./MessageInput";

const styles = theme => ({
  chatLayout: {
    display: 'flex',

    height: '100%',
    overflow: 'hidden',
    
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: '64px',
  }
});

class Chat extends React.Component {
  render() {
    const { classes, messages } = this.props;

    return <main className={classes.chatLayout}>
        <ChatMessageList messages={messages} />
        <MessageInput />
      </main>;
  }
}

export default withStyles(styles)(Chat);
