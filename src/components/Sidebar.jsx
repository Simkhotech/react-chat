import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from 'material-ui';
import Drawer from 'material-ui/Drawer';
import Divider from 'material-ui/Divider';
import TextField from 'material-ui/TextField';
import BottomNavigation, { BottomNavigationAction } from 'material-ui/BottomNavigation';
import RestoreIcon from '@material-ui/icons/Restore';
import ExploreIcon from '@material-ui/icons/Explore';

import ChatList from './ChatList';
import NewChatButton from './NewChatButton';

const styles = theme => ({
  drawerPaper: {
    position: 'fixed',
    width: 320,
  },
  drawerHeader: {
    ...theme.mixins.toolbar,
    paddingLeft: theme.spacing.unit * 3,
    paddingRight: theme.spacing.unit * 3,
  }
});

class Sidebar extends React.Component {
  render() {
    const { classes, chats } = this.props;

    return (
      <Drawer
        variant='permanent'
        classes={{
          paper: classes.drawerPaper
        }}
      >
        <div className={classes.drawerHeader}>
          <TextField
            fullWidth
            margin='normal'
            placeholder='Search chats...'
          />
        </div>
        <Divider />
        <ChatList chats={chats} />
        <NewChatButton />
        <BottomNavigation showLabels>
          <BottomNavigationAction label='My Chats' icon={<RestoreIcon />} />
          <BottomNavigationAction label='Explore' icon={<ExploreIcon />} />
        </BottomNavigation>
      </Drawer>
    );
  }
}

Sidebar.propTypes = {
  classes: PropTypes.shape({ drawerPaper: {}, drawerHeader: {} }).isRequired,
  // chats:
};

export default withStyles(styles)(Sidebar);
