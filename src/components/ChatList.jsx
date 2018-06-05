import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from 'material-ui';
import List from 'material-ui/List';

import ChatListItem from './ChatListItem';

const styles = theme => ({
  chatList: {
    height: 'calc(100% - 56px)',
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

ChatList.propTypes = {
  classes: PropTypes.shape({ chatList: {} }).isRequired,
  // chats: PropTypes.shape({ chatLayout: {} }).isRequired,
};

export default withStyles(styles)(ChatList);
