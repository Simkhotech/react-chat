import React from 'react';
import { ListItem, ListItemText } from 'material-ui/List';
import AppAvatar from './AppAvatar';

export default class ChatListItem extends React.Component {
  render() {
    const { chat } = this.props;

    return (
      <ListItem>
        <AppAvatar text={chat.title} />
        <ListItemText primary={chat.title} />
      </ListItem>
    );
  }
}
