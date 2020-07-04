import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Avatar from "@material-ui/core/Avatar";
import { deepOrange } from "@material-ui/core/colors";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  title: {
    flexDirection: "column",
    padding: theme.spacing(5),
  },
  paper: {
    paddingTop: theme.spacing(2),

    paddingBottom: theme.spacing(1),
    marginBottom: theme.spacing(2),
    textAlign: "left",
    fontWeight: theme.typography.fontWeightBold,
  },
  paperDetail: {
    textAlign: "left",
    paddingBottom: theme.spacing(2),
    fontWeight: theme.typography.fontWeightBold,
  },
  orange: {
    color: theme.palette.getContrastText(deepOrange[500]),
    backgroundColor: deepOrange[500],
    width: theme.spacing(27),
    height: theme.spacing(27),
    padding: theme.spacing(2),
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography variant="h4" className={classes.title}>
        {" "}
      </Typography>
      <CssBaseline />
      <Container fixed>
        {/* <Typography component="div" style={{ height: "20vh" }}> */}
          <Grid container spacing={3} style={{ backgroundColor: "#ffffff" }}>
            <Grid style={{ backgroundColor: "#d1e0e0" }} item xs={3}>
            <Avatar
                  alt="Remy Sharp"
                  src="/broken-image.jpg"
                  className={classes.orange}
                >
                  CHR
                </Avatar>
            </Grid>
            <Grid style={{ backgroundColor: "#d1e0e0" }} item xs={9}>
              <Typography className={classes.paper}>Hacktiv8 Meetup</Typography>
              <Typography className={classes.paperDetail}>
              Location :&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;jakarta,indonesia
              </Typography>
              <Typography className={classes.paperDetail}>Members :&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1078</Typography>
              <Typography className={classes.paperDetail}>Organizer :&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Andy wiranata</Typography>
              <Button variant="contained" color="primary">
                Join Us
              </Button>
            </Grid>
          </Grid>
        {/* </Typography> */}

      </Container>
    </div>
  );
}
