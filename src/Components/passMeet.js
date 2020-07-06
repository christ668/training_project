import React from "react";


import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";

import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%"
  },
  title: {
    flexDirection: "column",
    padding: theme.spacing(5)
  },
  showAll: {
    paddingTop: theme.spacing(7),
    textAlign: "center"
  },
  paper: {
    paddingTop: theme.spacing(2),

    paddingBottom: theme.spacing(1),
    marginBottom: theme.spacing(2),
    textAlign: "left",
    borderBottom: "0.1em solid black",
    fontWeight: theme.typography.fontWeightBold
  },
  paperDetail: {
    textAlign: "left",

    fontWeight: theme.typography.fontWeightBold
  },
  paperDetail2: {
    textAlign: "left",
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2)
  }
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container item xs={12} spacing={1}>
        <Grid item xs={9}>
          <Typography variant="h4" className={classes.title}>
            Members{" "}
          </Typography>
        </Grid>
        <Grid item xs={3}>
          <Typography variant="h6" className={classes.showAll}>
            see all{" "}
          </Typography>
        </Grid>
      </Grid>
      <CssBaseline />
      <Container fixed>
        {/* <Typography component="div" style={{ height: "20vh" }}> */}
        <Grid container spacing={3} style={{ backgroundColor: "#ffffff" }}>
          <Grid style={{ backgroundColor: "#d1e0e0" }} item xs>
            <Typography className={classes.paper}>27 November 2017</Typography>
            <Typography className={classes.paperDetail}>
              #39 JakartaJS April meetup with
            </Typography>
            <Typography className={classes.paperDetail}>kumparan</Typography>
            <Typography className={classes.paperDetail2}>139 went</Typography>
            <Button variant="contained" color="primary">
              View
            </Button>
          </Grid>
          <Grid style={{ backgroundColor: "#d1e0e0" }} item xs>
            <Typography className={classes.paper}>27 Oktober 2017</Typography>
            <Typography className={classes.paperDetail}>
              #38 JakartaJS April meetup with
            </Typography>
            <Typography className={classes.paperDetail}>BliBli</Typography>
            <Typography className={classes.paperDetail2}>113 went</Typography>
            <Button variant="contained" color="primary">
              View
            </Button>
          </Grid>
          <Grid style={{ backgroundColor: "#d1e0e0" }} item xs>
            <Typography className={classes.paper}>27 September 2017</Typography>
            <Typography className={classes.paperDetail}>
              #39 JakartaJS April meetup with
            </Typography>
            <Typography className={classes.paperDetail}>hactiv8</Typography>
            <Typography className={classes.paperDetail2}>110 went</Typography>
            <Button variant="contained" color="primary">
              View
            </Button>
          </Grid>
        </Grid>
        {/* </Typography> */}
      </Container>
    </div>
  );
}
