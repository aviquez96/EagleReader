const styleFooter = theme => ({
  root: {
    textAlign: "center",
    flexGrow: 1,
    height: "100vh"
  },
  paper: {
    maxWidth: "100%",
    height: "35vh",
    width: "100%"
  },
  commands: {
    maxWidth: "100%",
    height: "30vh",
    width: "100%"
  },
  button: {
    width: "100%",
    height: "100%"
  },
  soundButtonOff: {
    width: "100%",
    height: "30vh",
    background: "rgba(255, 40, 77, 0.6)",
    borderRadius: 0,
    "&:hover": {
      backgroundColor: "rgb(255, 40, 77)"
    }
  },
  soundButtonOn: {
    width: "100%",
    height: "30vh",
    background: "rgba(0, 255, 140, 0.6)",
    borderRadius: 0,
    "&:hover": {
      backgroundColor: "rgb(0, 255, 140)"
    }
  },
  touchApp: {
    width: "100%",
    height: "30vh",
    background: "rgba(211,211,211,0.6)",
    borderRadius: 0,
    "&:hover": {
      backgroundColor: "rgb(211,211,211)"
    }
  },
  settingsVoiceOff: {
    width: "100%",
    height: "30vh",
    background: "rgba(140, 205, 255, 0.6)",
    borderRadius: 0,
    "&:hover": {
      backgroundColor: "rgb(140, 205, 255)"
    }
  },
  settingsVoiceOn: {
    width: "100%",
    height: "30vh",
    background: "rgba(10, 245, 255, 0.6)",
    borderRadius: 0,
    "&:hover": {
      backgroundColor: "rgb(10, 245, 255)"
    }
  },
  noDeco: { textDecoration: "none", color: "white" },
  icon: {
    margin: theme.spacing.unit,
    fontSize: 80,
    display: "block"
  },
  selectBooks: {
    width: "100%",
    height: "100%",
    textTransform: "capitalize",
    background: "rgba(210, 193, 130, 0.6)",
    "&:hover": {
      backgroundColor: "rgb(210, 193, 130)"
    }
  },
  resumeReading: {
    width: "100%",
    height: "100%",
    textTransform: "capitalize",
    background: "rgba(220, 223, 70, 0.6)",
    "&:hover": {
      backgroundColor: "rgb(220, 223, 70)"
    }
  },
  block: {
    display: "block"
  }
});

export default styleFooter;
