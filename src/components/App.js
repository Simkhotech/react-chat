import React from 'react';
import { withStyles } from 'material-ui';

import ChatHeader from './ChatHeader';
import Sidebar from './Sidebar';
import Chat from './Chat';

import { chats } from '../mock-data';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  appFrame: {
    height: '100%',
    zIndex: 1,
    overflow: 'hidden',
    position: 'relative',
    display: 'flex',
    width: '100%',
  },
});

class PermanentDrawer extends React.Component {
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.appFrame}>
        <ChatHeader />
        <Sidebar chats={chats}/>
        <Chat />
      </div>
    );
  }
}

export default withStyles(styles)(PermanentDrawer);
