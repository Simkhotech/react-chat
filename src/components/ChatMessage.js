import React from 'react'
import classnames from "classnames";
import { withStyles } from 'material-ui';
import Paper from "material-ui/Paper";
import Typography from "material-ui/Typography";

import AppAvatar from "./AppAvatar";

const styles = theme => ({
  messageWrapper: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: `${theme.spacing.unit}px ${theme.spacing.unit * 3}px`,
  },
  messageWrappperFromMe: {
    justifyContent: 'flex-end',
  },
  message: {
    maxWidth: '70%',
    minWidth: '10%',
    padding: theme.spacing.unit,
    marginLeft: theme.spacing.unit * 2,
  },
  messageFromMe: {
    marginRight: theme.spacing.unit * 2,
    backgroundColor: '#e6dcff'
  },
});

class ChatMessage extends React.Component { 
  render() {
    const { classes, message } = this.props;
    const isMessageFromMe = message.sender === "me";

    console.log('message', message);

    return <div className={classnames(classes.messageWrapper, isMessageFromMe && classes.messageWrappperFromMe)}>
      {!isMessageFromMe && <AppAvatar text={message.sender} />}
        <Paper className={classnames(classes.message, isMessageFromMe && classes.messageFromMe)}>
          <Typography variant="caption">{message.sender}</Typography>
          <Typography variant="body1">{message.content}</Typography>
        </Paper>
      {isMessageFromMe && <AppAvatar text={message.sender} />}
      </div>;
  }
}

export default withStyles(styles)(ChatMessage);
