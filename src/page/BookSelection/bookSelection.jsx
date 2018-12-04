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
import book from "./books";
import Grid from "@material-ui/core/Grid";
// icons
import Home from "@material-ui/icons/Home";
import SettingsVoice from "@material-ui/icons/SettingsVoice";
import VolumeUp from "@material-ui/icons/VolumeUp";
import VolumeOff from "@material-ui/icons/VolumeOff";
import SpeechRecognition from "react-speech-recognition";
// Router
import { Link, Switch, Redirect } from "react-router-dom";

const propTypes = {
  // Props injected by SpeechRecognition
  transcript: PropTypes.string,
  resetTranscript: PropTypes.func,
  browserSupportsSpeechRecognition: PropTypes.bool
};

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

class bookSelection extends Component {
  state = {
    activeStep: 0,
    playSpeech: true,
    voice: false
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
    if (window.responsiveVoice.isPlaying()) {
    } else {
      this.setState({ activeStep });
      if (this.state.playSpeech) {
        window.responsiveVoice.speak(
          book[activeStep].label,
          "US English Female"
        );
      }
    }
  };

  toggleMute = () => {
    this.setState((prevState, props) => ({
      mute: prevState.mute ? false : true
    }));
    if (this.state.playSpeech) {
      console.log("should stop speech");
      this.setState({ playSpeech: false });
      window.responsiveVoice.cancel();
    } else {
      console.log("Should resume speech");
      this.setState({ playSpeech: true });
      window.responsiveVoice.speak(
        book[this.state.activeStep].label,
        "US English Female"
      );
    }
  };

  componentDidMount = () => {
    this.props.resetTranscript();
    this.props.abortListening();
    if (this.state.playSpeech) {
      console.log("START SPEAKUNG");
      window.responsiveVoice.speak(
        book[this.state.activeStep].label,
        "US English Female"
      );
    }
  };

  handleMic = () => {
    if (this.props.listening) {
      this.props.resetTranscript();
      this.props.abortListening();
      this.props.stopListening();
      this.setState((prevState, props) => ({
        voice: prevState.voice ? false : true
      }));
    } else {
      this.props.resetTranscript();
      this.props.startListening();
      this.setState((prevState, props) => ({
        voice: prevState.voice ? false : true
      }));
    }
  };

  render() {
    const {
      classes,
      theme,
      transcript,
      browserSupportsSpeechRecognition
    } = this.props;
    const { activeStep } = this.state;
    const maxSteps = book.length;

    let myRedirect = transcript.includes("home") ? (
      <Redirect to="/" />
    ) : (
      <div></div>
    );

    return (
      <div className={classes.root}>
        <Paper square elevation={0} className={classes.header}>
          <Typography>{book[activeStep].label}</Typography>
        </Paper>
        <AutoPlaySwipeableViews
          className={classes.autoplay}
          duration={2500}
          axis={theme.direction === "rtl" ? "x-reverse" : "x"}
          index={activeStep}
          onChangeIndex={this.handleStepChange}
          enableMouseEvents
        >
          {book.map((step, index) => (
            <div key={step.label}>
              <Link className={classes.noDeco} to="/reader">
                {Math.abs(activeStep - index) <= 2 ? (
                  <img
                    className={classes.img}
                    src={step.imgPath}
                    alt={step.label}
                  />
                ) : null}
              </Link>
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
        <Grid container wrap="nowrap" spacing={0}>
          <Grid item xs={4} md={4} lg={4}>
            <Link className={classes.noDeco} to="/">
              <Button
                className={classes.touchApp}
                onClick={() => window.responsiveVoice.pause()}
              >
                <Home className={classes.icon} />
              </Button>
            </Link>
          </Grid>
          
          <Grid item xs={4} md={4} lg={4}>
                {!this.state.voice ? (
                  <Button
                    className={classes.settingsVoiceOff}
                    onClick={this.handleMic}
                  >
                    <SettingsVoice className={classes.icon} />
                  </Button>
                ) : (
                  <Button
                    className={classes.settingsVoiceOn}
                    onClick={this.handleMic}
                  >
                    <SettingsVoice className={classes.icon} />
                  </Button>
                )}
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
      </div>
    );
  }
}

bookSelection.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired
};

export default SpeechRecognition({ autoStart: false })(
  withStyles(style, { withTheme: true })(bookSelection)
);
