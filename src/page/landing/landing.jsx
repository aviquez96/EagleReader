import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import Paper from "@material-ui/core/Paper";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";

const styles = theme => ({
  root: {
    flexGrow: 1,
    overflow: "hidden",
    padding: `0 ${theme.spacing.unit * 3}px`
  },
  paper: {
    // maxWidth: 400,
    height: "25vh",
    margin: `${theme.spacing.unit}px auto`,
    padding: theme.spacing.unit * 2
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
            <Grid container wrap="nowrap" spacing={16}>
              <Grid item xs zeroMinWidth>
                <Typography noWrap>{"resume"}</Typography>
              </Grid>
            </Grid>
          </Paper>
          <Paper className={classes.paper}>
            <Grid container wrap="nowrap" spacing={16}>
              <Grid item xs>
                <Typography noWrap>{"library"}</Typography>
              </Grid>
            </Grid>
          </Paper>
          <Paper className={classes.paper}>
            <Grid container wrap="nowrap" spacing={16}>
              <Grid item xs={4} md={4} lg={4}>
                <Typography>{message}</Typography>
              </Grid>
              <Grid item xs={4} md={4} lg={4}>
                <Typography>{message}</Typography>
              </Grid>
              <Grid item xs={4} md={4} lg={4}>
                <Typography>{message}</Typography>
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
