import React from 'react';
import { withStyles } from 'material-ui';

import ChatHeader from './ChatHeader';
import Sidebar from './Sidebar';
import Chat from './Chat';

import { chats, messages } from "../mock-data";

const styles = theme => ({
  appFrame: {
    height: '100%',
    overflow: 'hidden',
    position: 'relative',
    display: 'flex',
    width: '100%',
  },
});

class App extends React.Component {
  render() {
    const { classes } = this.props;

    return <div className={classes.appFrame}>
        <ChatHeader />
        <Sidebar chats={chats} />
        <Chat messages={messages} />
      </div>;
  }
}

export default withStyles(styles)(App);
