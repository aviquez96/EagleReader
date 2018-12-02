import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Slide from "@material-ui/core/Slide";

function Transition(props) {
  return <Slide direction="up" {...props} />;
}

class instructionsDialog extends Component {
  state = {
    open: this.props.openInstructions
  };

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  repeatMessage = () => {
    window.responsiveVoice.speak(this.props.instructions, "US English Female");
  };

  componentDidMount = () => {
    if (this.props.openInstructions)
      window.responsiveVoice.speak(
        this.props.instructions,
        "US English Female"
      );
  };

  render() {
    return (
      <div>
        <Dialog
          open={this.props.open}
          TransitionComponent={Transition}
          keepMounted
          onClose={this.props.handleClose}
          aria-labelledby="alert-dialog-slide-title"
          aria-describedby="alert-dialog-slide-description"
        >
          <DialogTitle id="alert-dialog-slide-title">
            {"Instructions"}
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-slide-description">
              {this.props.instructions}
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.repeatMessage} color="primary">
              Repeat
            </Button>
            <Button onClick={this.props.handleClose} color="primary">
              Ok
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

export default instructionsDialog;
