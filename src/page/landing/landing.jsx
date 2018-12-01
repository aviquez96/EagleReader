import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import Paper from "@material-ui/core/Paper";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import InstructionsDialog from "./instructionsDialog";
// Router
import { Link } from "react-router-dom";

const styles = theme => ({
  body: {
    margin: 0
  },
  root: {
    flexGrow: 1,
    overflow: "hidden",
    padding: 0,
    margin: 0,
    width: "100%"
  },
  paper: {
    maxWidth: "100%",
    height: "33vh",
    width: "100"
  },
  button: {
    width: "100%",
    height: "100%",
    textOverflow: "ellipsis"
  },
  buttonBottom: {
    width: "100%",
    height: "33vh"
  },
  soundButton: {
    width: "100%",
    height: "33vh",
    background: "rgb(0, 255, 140)"
  },
  noDeco: { textDecoration: "none", color: "white" }
});
const message = `Truncation should be conditionally applicable on this long line of text
 as this is a much longer line than what the container can support. `;

export class Landing extends Component {
  state = {
    soundButtonStatus: true,
    soundButtonText: "On",
    openInstructions: true
  };

  render() {
    const { classes } = this.props;
    return (
      <Fragment>
        <div className={classes.root}>
          <Link className={classes.noDeco} to="/reader">
            <Paper className={classes.paper}>
              <Button className={classes.button}>
                <Grid container wrap="nowrap" spacing={0}>
                  <Grid item sm zeroMinWidth>
                    <Typography variant="h1" noWrap align="center">
                      Resume Reading
                    </Typography>
                  </Grid>
                </Grid>
              </Button>
            </Paper>
          </Link>
          <Link className={classes.noDeco} to="/bookSelection">
            <Paper className={classes.paper}>
              <Button className={classes.button}>
                <Grid container wrap="nowrap" spacing={0}>
                  <Grid item sm zeroMinWidth>
                    <Typography variant="h1" noWrap align="center">
                      Select Books
                    </Typography>
                  </Grid>
                </Grid>
              </Button>
            </Paper>
          </Link>
          <Paper className={classes.paper}>
            <Grid container wrap="nowrap" spacing={0}>
              <Grid item xs={4} md={4} lg={4}>
                <Button className={classes.buttonBottom}>
                  <Typography variant="h4" align="center">
                    Action
                  </Typography>
                </Button>
              </Grid>
              <Grid item xs={4} md={4} lg={4}>
                <Button className={classes.buttonBottom}>
                  <Typography variant="h4" align="center">
                    Voice Commands
                  </Typography>
                </Button>
              </Grid>
              <Grid item xs={4} md={4} lg={4}>
                <Button className={classes.soundButton}>
                  <Typography variant="h4" align="center">
                    Sound: {this.state.soundButtonText}
                  </Typography>
                </Button>
              </Grid>
            </Grid>
          </Paper>
        </div>
        <InstructionsDialog
          open={this.state.openInstructions}
          instructions={"Hello user, plese follow this instructions to start"}
        />
      </Fragment>
    );
  }
}
Landing.propTypes = {
  classes: PropTypes.object.isRequired
};
export default withStyles(styles)(Landing);
