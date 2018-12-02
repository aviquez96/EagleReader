import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import Paper from "@material-ui/core/Paper";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import styleFooter from "./style"
import InstructionsDialog from "./instructionsDialog";
// icons
import VolumeUp from "@material-ui/icons/VolumeUp";
import VolumeOff from "@material-ui/icons/VolumeOff";
import SettingsVoice from "@material-ui/icons/SettingsVoice";
import TouchApp from "@material-ui/icons/TouchApp";
// Router
import { Link } from "react-router-dom";

export class Landing extends Component {
  state = {
    soundButtonStatus: true,
    soundButtonText: "On",
    openInstructions: true,
    mute: false
  };

  componentWillMount(){
    let shouldOpen= localStorage.getItem("openInstructions");
    (shouldOpen == 'true') ?
    this.setState({ openInstructions: true }):
     this.setState({ openInstructions: false });

  }


  handleClose = () => {
    this.setState({ openInstructions: false });
    localStorage.setItem("openInstructions", false)
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
              <Button className={classes.resumeReading}>
                <Grid container wrap="nowrap" spacing={0}>
                  <Grid item sm zeroMinWidth>
                    <Typography variant="h1" noWrap align="center" style={{padding: "10px 0px"}}>
                      Resume Reading
                    </Typography>
                  </Grid>
                </Grid>
              </Button>
            </Paper>
          </Link>
          <Link className={classes.noDeco} to="/bookSelection">
            <Paper className={classes.paper}>
              <Button className={classes.selectBooks}>
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

export default withStyles(styleFooter, { withTheme: true })(Landing);
