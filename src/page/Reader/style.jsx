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
    width: "auto"
  },
  buttonBottom: {
    height: "30vh",
    width: 100
  },
  noDeco: { textDecoration: "none", color: "white" }
});

export default styles;
