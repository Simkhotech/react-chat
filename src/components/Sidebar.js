import React from 'react'
import { withStyles } from 'material-ui';
import Drawer from 'material-ui/Drawer';
import Divider from 'material-ui/Divider';
import TextField from 'material-ui/TextField';

import ChatList from './ChatList';

const styles = theme => ({
  drawerPaper: {
    position: 'relative',
    width: 320,
  },
  drawerHeader: {
    padding: '0 24px',
    minHeight: 64,
  }
});

class Sidebar extends React.Component {
  render() {
    const { classes } = this.props;

    return (
      <Drawer
          variant="permanent"
          classes={{
            paper: classes.drawerPaper,
          }}
        >
        <div className={classes.drawerHeader}>
            <TextField
            fullWidth
            id="margin-normal"
            margin="normal"
            placeholder="Search chats..."
          />
        </div>
        <Divider />
        <ChatList chats={this.props.chats} />
      </Drawer>
    );
  }
}

export default withStyles(styles)(Sidebar);
