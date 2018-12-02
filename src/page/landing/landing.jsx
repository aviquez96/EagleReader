import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import Paper from "@material-ui/core/Paper";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import InstructionsDialog from "./instructionsDialog";
// icons
import VolumeUp from "@material-ui/icons/VolumeUp";
import VolumeOff from "@material-ui/icons/VolumeOff";
import SettingsVoice from "@material-ui/icons/SettingsVoice";
import TouchApp from "@material-ui/icons/TouchApp";
// Router
import { Link } from "react-router-dom";

const styles = theme => ({
  root: {
    textAlign: "center",
    flexGrow: 1,
    height: "100vh"
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
  soundButtonOff: {
    width: "100%",
    height: "33vh",
    background: "rgb(255, 40, 77)",
    borderRadius: 0,
    "&:hover": {
      backgroundColor: "rgba(255, 40, 77, 0.6)"
    }
  },
  soundButtonOn: {
    width: "100%",
    height: "33vh",
    background: "rgb(0, 255, 140)",
    borderRadius: 0,
    "&:hover": {
      backgroundColor: "rgba(0, 255, 140, 0.6)"
    }
  },
  touchApp: {
    width: "100%",
    height: "33vh",
    background: "rgb(211,211,211)",
    borderRadius: 0,
    "&:hover": {
      backgroundColor: "rgba(211,211,211,0.6)"
    }
  },
  settingsVoice: {
    width: "100%",
    height: "33vh",
    background: "rgb(140, 205, 255)",
    borderRadius: 0,
    "&:hover": {
      backgroundColor: "rgba(140, 205, 255, 0.6)"
    }
  },
  noDeco: { textDecoration: "none", color: "white" },
  icon: {
    margin: theme.spacing.unit,
    fontSize: 80,
    display: "block"
  },
  block: {
    display: "block"
  }
});

export class Landing extends Component {
  state = {
    soundButtonStatus: true,
    soundButtonText: "On",
    openInstructions: true,
    mute: false
  };

  handleClose = () => {
    this.setState({ openInstructions: false });
  };

  toggleMute = () => {
    this.setState((prevState, props) => ({
      mute: prevState.mute ? false : true
    }));
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
                <Button className={classes.touchApp}>
                  <TouchApp className={classes.icon} />
                </Button>
              </Grid>
              <Grid item xs={4} md={4} lg={4}>
                <Button className={classes.settingsVoice}>
                  <SettingsVoice className={classes.icon} />
                </Button>
              </Grid>
              <Grid item xs={4} md={4} lg={4}>
                {this.state.mute ? (
                  <Button
                    className={classes.soundButtonOff}
                    onClick={this.toggleMute}
                  >
                    <VolumeOff className={classes.icon} />
                  </Button>
                ) : (
                  <Button
                    className={classes.soundButtonOn}
                    onClick={this.toggleMute}
                  >
                    <VolumeUp className={classes.icon} />
                  </Button>
                )}
              </Grid>
            </Grid>
          </Paper>
        </div>
        <InstructionsDialog
          open={this.state.openInstructions}
          instructions={"Hello user, plese follow this instructions to start"}
          handleClose={this.handleClose}
        />
      </Fragment>
    );
  }
}
Landing.propTypes = {
  classes: PropTypes.object.isRequired
};
export default withStyles(styles)(Landing);
