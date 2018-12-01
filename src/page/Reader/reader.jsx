import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import MobileStepper from "@material-ui/core/MobileStepper";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft";
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
import style from "./style";
import book from "../../books/grinch/book";
import Grid from "@material-ui/core/Grid";
// icons
import Home from "@material-ui/icons/Home";
import SettingsVoice from "@material-ui/icons/SettingsVoice";
import VolumeUp from "@material-ui/icons/VolumeUp";
import VolumeOff from "@material-ui/icons/VolumeOff";
// Router
import { Link } from "react-router-dom";

const AutoPlaySwipeableViews = SwipeableViews;

export class Reader extends Component {
  state = {
    activeStep: 0,
    mute: false
  };

  handleNext = () => {
    this.setState(prevState => ({
      activeStep: prevState.activeStep + 1
    }));
  };

  handleBack = () => {
    this.setState(prevState => ({
      activeStep: prevState.activeStep - 1
    }));
  };

  handleStepChange = activeStep => {
    this.setState({ activeStep });
  };

  toggleMute = () => {
    this.setState((prevState, props) => ({
      mute: prevState.mute ? false : true
    }));
  };

  render() {
    const { classes, theme } = this.props;
    const { activeStep } = this.state;
    const maxSteps = book.length;

    return (
      <div className={classes.root}>
        <div className={classes.reader}>
          <Paper square elevation={0} className={classes.header}>
            <Typography>{book[activeStep].label}</Typography>
          </Paper>
          <AutoPlaySwipeableViews
            className={classes.innerReadr}
            axis={theme.direction === "rtl" ? "x-reverse" : "x"}
            index={activeStep}
            onChangeIndex={this.handleStepChange}
            enableMouseEvents
          >
            {book.map((step, index) => (
              <div key={step.label}>
                {Math.abs(activeStep - index) <= 2 ? (
                  <img
                    className={classes.img}
                    src={step.imgPath}
                    alt={step.label}
                  />
                ) : null}
              </div>
            ))}
          </AutoPlaySwipeableViews>
          <MobileStepper
            steps={maxSteps}
            variant="progress"
            position="static"
            activeStep={activeStep}
            className={classes.mobileStepper}
            nextButton={
              <Button
                size="small"
                onClick={this.handleNext}
                disabled={activeStep === maxSteps - 1}
              >
                Next
                {theme.direction === "rtl" ? (
                  <KeyboardArrowLeft />
                ) : (
                  <KeyboardArrowRight />
                )}
              </Button>
            }
            backButton={
              <Button
                size="small"
                onClick={this.handleBack}
                disabled={activeStep === 0}
              >
                {theme.direction === "rtl" ? (
                  <KeyboardArrowRight />
                ) : (
                  <KeyboardArrowLeft />
                )}
                Back
              </Button>
            }
          />
        </div>
        <Grid container wrap="nowrap" spacing={0}>
          <Grid item xs={4} md={4} lg={4}>
            <Link className={classes.noDeco} to="/">
              <Button className={classes.buttonBottom}>
                <Home className={classes.icon} />
              </Button>
            </Link>
          </Grid>
          <Grid item xs={4} md={4} lg={4}>
            <Button className={classes.buttonBottom}>
              <SettingsVoice className={classes.icon} />
            </Button>
          </Grid>
          <Grid item xs={4} md={4} lg={4}>
            <Button className={classes.buttonBottom} onClick={this.toggleMute}>
              {this.state.mute ? (
                <VolumeOff className={classes.icon} />
              ) : (
                <VolumeUp className={classes.icon} />
              )}
            </Button>
          </Grid>
        </Grid>
      </div>
    );
  }
}

Reader.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired
};

export default withStyles(style, { withTheme: true })(Reader);
