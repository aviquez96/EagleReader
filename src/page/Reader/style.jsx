const styles = theme => ({
  root: {
    textAlign: "center",
    flexGrow: 1,
    height: "100vh"
  },
  reader: {
    height: "70vh"
  },
  innerReadr: {
    height: "calc(70vh - 104px)",
    alignItems: "center"
  },
  header: {
    display: "flex",
    alignItems: "center",
    height: 50,
    paddingLeft: theme.spacing.unit * 4,
    backgroundColor: theme.palette.background.default
  },
  img: {
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: "auto",
    marginBottom: "auto",
    maxHeight: "calc(70vh - 104px)",
    display: "block",
    overflow: "hidden",
    width: "100hw",
    height: "auto"
  },
  buttonBottom: {
    height: "30vh",
    width: "100%"
  },
  homeButton: {
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
  noDeco: { textDecoration: "none", color: "white" },
  icon: {
    margin: theme.spacing.unit,
    fontSize: 80
  }
});

export default styles;
