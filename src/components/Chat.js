import React from 'react'
import { withStyles } from 'material-ui';
import Typography from 'material-ui/Typography';

const styles = theme => ({
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing.unit * 3,
  },
});

class Chat extends React.Component {
  render() {
    const { classes } = this.props;

    return (
      <div>
        {/* <div className={classes.toolbar} /> */}
        <main className={classes.content}>
          <div className={classes.toolbar} />
          <Typography>{'You think water moves fast? You should see ice.'}</Typography>
        </main>
      </div>
    );
  }
}

export default withStyles(styles)(Chat);
