import React from 'react'
import { withStyles } from 'material-ui';

import ChatMessage from "./ChatMessage";

const styles = theme => ({
  messagesWrapper: {
    overflowX: 'scroll',
    height: '100%',
    width: '100%',
    paddingTop: theme.spacing.unit * 3,
    paddingBottom: '120px',
  },
});

class ChatMessageList extends React.Component {
  componentDidMount() {
    this.scrollDownHistory();
  }
  
  componentDidUpdate() {
    console.log("componentDidUpdate");
    
    this.scrollDownHistory();
  }

  scrollDownHistory() {
    console.log("scrollDownHistory");
    
    const messagesWrapper = this.refs.messagesWrapper;

    if (messagesWrapper) {
      messagesWrapper.scrollTop = messagesWrapper.scrollHeight;
    }
  }

  render() {
    const { classes, messages } = this.props;

    return (
      <div className={classes.messagesWrapper} ref="messagesWrapper"> 
        {messages && messages.map((message, index) => (
          <ChatMessage key={index} message={message}/>
        ))}
      </div>
    );
  }
}

export default withStyles(styles)(ChatMessageList);
