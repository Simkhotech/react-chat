import React from 'react'
import { withStyles } from 'material-ui';

import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';

const styles = theme => ({
  appBar: {
    width: `calc(100% - 320px)`,
    position: 'fixed'
  }
});

class ChatHeader extends React.Component {
  render() {
    const { classes } = this.props;

    return (
      <AppBar className={classes.appBar}>
        <Toolbar>
          <Typography 
            variant='title' 
            color='inherit' 
            noWrap>
            React Chat!
          </Typography>
        </Toolbar>
      </AppBar>
    );
  }
}

export default withStyles(styles)(ChatHeader);
