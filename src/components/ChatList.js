import React from 'react'
import { withStyles } from 'material-ui';
import List from 'material-ui/List';
import { ListItem, ListItemText } from 'material-ui/List';
import Avatar from 'material-ui/Avatar';

const styles = theme => ({
  chatList: {
    heigth: `calc(100% - 64px)`,
    overflowY: 'scroll',
  },
});

class ChatList extends React.Component {

  getInitials(text, count) {
    const words = text.split(/[\s.,;\-_]/);
    const ret = words.reduce((initials, word) => { return initials + word.charAt(0); }, '') || '😎';

    return ret.substr(0, 2).toUpperCase();
}

  render() {
    const { chats, classes } = this.props;

    return (
      <List className={classes.chatList}>
        {chats && chats.map((chat, index) => (
          <ListItem key={index}>
            <Avatar>
              {this.getInitials(chat.title)}
            </Avatar>
            <ListItemText primary={chat.title} />
          </ListItem>
        ))}
      </List>
    );
  }
}

export default withStyles(styles)(ChatList);
