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
  constructor(props) {
    super(props);
    this.messagesWrapper = React.createRef();
  }
  componentDidMount() {
    this.scrollDownHistory();
  }
  
  componentDidUpdate() {
    this.scrollDownHistory();
  }

  // TODO Fix it!!!
  scrollDownHistory() {
    const messagesWrapper = this.messagesWrapper.current;

    if (messagesWrapper) {
      messagesWrapper.scrollTop = messagesWrapper.scrollHeight;
    }
  }

  render() {
    const { classes, messages } = this.props;

    return (
      <div className={classes.messagesWrapper} ref={this.messagesWrapper}> 
        {messages && messages.map((message, index) => (
          <ChatMessage key={index} message={message}/>
        ))}
      </div>
    );
  }
}

export default withStyles(styles)(ChatMessageList);
