import React from "react";
import { withStyles } from "material-ui/styles";

import Button from "material-ui/Button";
import AddIcon from "@material-ui/icons/Add";

const styles = theme => ({
  newChatButton: {
    position: "absolute",
    left: "auto",
    right: theme.spacing.unit * 3,
    bottom: theme.spacing.unit * 3 + 48,
  }
});

class NewChatButton extends React.Component {
  render() {
    const { classes } = this.props;

    return (
      <Button variant="fab" color="primary" className={classes.newChatButton}>
        <AddIcon />
      </Button>
    );
  }
}

export default withStyles(styles)(NewChatButton);
