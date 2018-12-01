import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import Paper from "@material-ui/core/Paper";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

const styles = theme => ({
  root: {
    flexGrow: 1,
    overflow: "hidden",
    padding: 0,
    margin: 0,
    textAlign: "center"
  },
  paper: {
    maxWidth: "100%",
    height: "40vh",
    width: "100"
  },
  button: {
    width: "100%",
    height: "100%"
  },
  buttonBottom: {
    padding: 10,
  }
});
const message = `Truncation should be conditionally applicable on this long line of text
 as this is a much longer line than what the container can support. `;

export class Landing extends Component {
  render() {
    const { classes } = this.props;
    return (
      <Fragment>
        <div className={classes.root}>
          <Paper className={classes.paper}>
            <Button className={classes.button}>
              <Grid container wrap="nowrap" spacing={0}>
                <Grid item xs zeroMinWidth>
                  <Typography variant="h1" noWrap>
                    Resume Reading
                  </Typography>
                </Grid>
              </Grid>
            </Button>
          </Paper>
          <Paper className={classes.paper}>
            <Button className={classes.button}>
              <Grid container wrap="nowrap" spacing={0}>
                <Grid item xs zeroMinWidth>
                  <Typography variant="h1" noWrap>
                    Select Books
                  </Typography>
                </Grid>
              </Grid>
            </Button>
          </Paper>
          <Paper className={classes.paper}>
            <Grid container wrap="nowrap" spacing={0}>
              <Grid item xs={4} md={4} lg={4}>
                <Button className={classes.button}>
                  <Typography variant="h4">Select</Typography>
                </Button>
              </Grid>
              <Grid item xs={4} md={4} lg={4}>
                <Button className={classes.button}>
                  <Typography variant="h4">Select</Typography>
                </Button>
              </Grid>
              <Grid item xs={4} md={4} lg={4}>
                <Button className={classes.button}>
                  <Typography variant="h4">Select</Typography>
                </Button>
              </Grid>
            </Grid>
          </Paper>
        </div>
      </Fragment>
    );
  }
}
Landing.propTypes = {
  classes: PropTypes.object.isRequired
};
export default withStyles(styles)(Landing);
