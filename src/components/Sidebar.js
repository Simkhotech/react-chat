import React from 'react'
import { withStyles } from 'material-ui';
import Drawer from 'material-ui/Drawer';
import Divider from 'material-ui/Divider';

const styles = theme => ({
  drawerPaper: {
    position: 'relative',
    width: 320,
  },
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
          <p>//TODO search</p>
        <Divider />
      </Drawer>
    );
  }
}

export default withStyles(styles)(Sidebar);
