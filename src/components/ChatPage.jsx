import React from 'react';

import { withStyles } from 'material-ui';

import ChatHeader from './ChatHeader';
import Sidebar from './Sidebar';
import Chat from './Chat';


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

    return (
      <div className={classes.appFrame}>
        <ChatHeader />
        <Sidebar chats />
        <Chat messages />
      </div>
    );
  }
}

export default withStyles(styles)(App);
