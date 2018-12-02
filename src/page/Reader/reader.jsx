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
import PlayArrow from "@material-ui/icons/PlayArrow";
import Pause from "@material-ui/icons/Pause";
// axios
import axios from "axios";
// Router
import { Link, Switch, Redirect } from "react-router-dom";
// speech
import SpeechRecognition from "react-speech-recognition";

const propTypes = {
  // Props injected by SpeechRecognition
  transcript: PropTypes.string,
  resetTranscript: PropTypes.func,
  browserSupportsSpeechRecognition: PropTypes.bool
};

const AutoPlaySwipeableViews = SwipeableViews;

export class Reader extends Component {
  state = {
    activeStep: 0,
    mute: false,
    speakingMessage: "",
    text: ["", "", "", "", ""],
    ran: false,
    paused: false,
    voice: false
  };

  handleNext = () => {
    this.setState(prevState => ({
      activeStep: prevState.activeStep + 1
    }));

    let prevText = this.state.text;
    // console.log(book[this.state.activeStep].url);
    let reqBody = {
      requests: [
        {
          image: {
            source: {
              imageUri: book[this.state.activeStep + 1].url //image URL
            }
          },
          features: [
            {
              type: "TEXT_DETECTION",
              maxResults: 1
            }
          ],
          imageContext: {
            languageHints: ["en"]
          }
        }
      ]
    };
    axios
      .post(
        "https://vision.googleapis.com/v1/images:annotate?key=AIzaSyB_tGSHmcxwM7WJrBJXSNzZCJH3pvJwk_U",
        reqBody
      )
      .then(response => {
        try {
          let temp = response.data.responses[0].fullTextAnnotation.text;
          this.setState(
            { speakingMessage: temp },
            window.responsiveVoice.speak(temp, "US English Female", {
              rate: 0.9
            }),
            (prevText[this.state.activeStep + 1] =
              response.responses[0].description),
            this.setState(
              {
                text: prevText
              },
              console.log(this.state.text)
            )
          );
        } catch (e) {}
      });
  };

  handleBack = () => {
    this.setState(prevState => ({
      activeStep: prevState.activeStep - 1
    }));
    let text = this.state.text;
    window.responsiveVoice.speak(
      text[this.state.activeStep],
      "US English Female",
      {
        rate: 0.9
      }
    );
  };

  handleStepChange = activeStep => {
    // this.setState({ activeStep });
    if (activeStep > this.state.activeStep) {
      this.handleNext();
    } else {
      this.handleBack();
    }
  };

  toggleMute = () => {
    console.log("entered Toggle Mute");
    this.setState((prevState, props) => ({
      mute: prevState.mute ? false : true
    }));
    if (!this.state.paused) {
      //if (window.responsiveVoice.isPlaying()) {
      console.log("PAUSE");
      this.setState({
        paused: true
      });
      window.responsiveVoice.pause();
    } else {
      console.log("RESUME");
      this.setState({
        paused: false
      });
      window.responsiveVoice.resume();
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

  componentDidMount = () => {
    this.props.resetTranscript();
    this.props.abortListening();
    console.log("Entered COmponent will Mount");
    if (!this.state.ran) {
      let prevText = this.state.text;
      let body = {
        requests: [
          {
            image: {
              source: {
                imageUri:
                  "https://raw.githubusercontent.com/aviquez96/EagleReader/master/src/books/grinch/imgs/1.jpg" //image URL
              }
            },
            features: [
              {
                type: "TEXT_DETECTION",
                maxResults: 1
              }
            ],
            imageContext: {
              languageHints: ["en"]
            }
          }
        ]
      };

      axios
        .post(
          "https://vision.googleapis.com/v1/images:annotate?key=AIzaSyB_tGSHmcxwM7WJrBJXSNzZCJH3pvJwk_U",
          body
        )
        .then(response => {
          try {
            // console.log(response.data.responses[0]);
            let temp = response.data.responses[0].fullTextAnnotation.text;
            this.setState(
              { speakingMessage: temp },
              window.responsiveVoice.speak(temp, "US English Female", {
                rate: 0.9
              })
            );
            prevText[this.state.activeStep + 1] =
              response.responses[0].description;
            this.setState(
              {
                text: prevText,
                ran: true
              },
              console.log(this.state.text)
            );
          } catch (e) {
            // console.log(e);
          }
        });

      this.setState({
        text: prevText
      });
    }
  };

  render() {
    const {
      classes,
      theme,
      transcript,
      resetTranscript,
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
        <Switch>{myRedirect}</Switch>
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
                onClick={this.handleNext.bind(this)}
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
              <Button
                className={classes.homeButton}
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
            {!this.state.mute ? (
              <Button
                className={classes.soundButtonOn}
                onClick={this.toggleMute}
              >
                <Pause className={classes.icon} />
              </Button>
            ) : (
              <Button
                className={classes.soundButtonOff}
                onClick={this.toggleMute}
              >
                <PlayArrow className={classes.icon} />
              </Button>
            )}
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

export default SpeechRecognition(
  withStyles(style, { withTheme: true })(Reader)
);
