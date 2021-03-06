import React from 'react'
import { withStyles } from 'material-ui';
import List from 'material-ui/List';

import ChatListItem from "./ChatListItem";

const styles = theme => ({
  chatList: {
    height: `calc(100% - 56px)`,
    overflowY: 'scroll',
  },
});

class ChatList extends React.Component {
  render() {
    const { chats, classes } = this.props;

    return (
      <List className={classes.chatList}>
        {chats && chats.map((chat, index) => (
          <ChatListItem key={index + '_kye'} chat={chat} />
        ))}
      </List>
    );
  }
}

export default withStyles(styles)(ChatList);
