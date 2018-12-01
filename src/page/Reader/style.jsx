const styles = theme => ({
  root: {
    textAlign: "center",
    flexGrow: 1
  },
  header: {
    display: "flex",
    alignItems: "center",
    height: 50,
    paddingLeft: theme.spacing.unit * 4,
    backgroundColor: theme.palette.background.default
  },
  img: {
    maxHeight: "70vh",
    display: "block",
    overflow: "hidden",
    width: "auto"
  }
});

export default styles;
