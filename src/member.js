import React from "react";
import PropTypes from "prop-types";

import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Avatar from "@material-ui/core/Avatar";
import { deepOrange } from "@material-ui/core/colors";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  spacer: {
    paddingLeft: theme.spacing(2),
    paddingBottom: theme.spacing(3),
  },
  head:{
    paddingTop: theme.spacing(2),
    fontWeight: theme.typography.fontWeightBold,  
  },
  title: {
    flexDirection: "column",
    padding: theme.spacing(5),
  },
  image: {
    backgroundColor: "#d1e0e0",
    height: "8vh",
    padding: theme.spacing(2.5),
  },
  orange: {
    color: theme.palette.getContrastText(deepOrange[500]),
    backgroundColor: deepOrange[500],
    width: theme.spacing(7),
    height: theme.spacing(7),
    padding: theme.spacing(1),
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography variant="h4" className={classes.title}>
        Members{" "}
      </Typography>
      <CssBaseline />
      <Container fixed>
        <Typography
          component="div"
          style={{ backgroundColor: "#d1e0e0", height: "13.5vh" }}
        >
          <Grid container item xs={3} spacing={1}>
            <Grid item xs={4}>
              <Typography component="div" className={classes.image}>
                <Avatar
                  alt="Remy Sharp"
                  src="/broken-image.jpg"
                  className={classes.orange}
                >
                  CHR
                </Avatar>
              </Typography>
            </Grid>
            <Grid item xs={8}>
              <Typography className={classes.head}>Organizers</Typography>
              <Typography>
                Adhy wiranata&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;4 others
              </Typography>
            </Grid>
          </Grid>
        </Typography>
      </Container>
    </div>
  );
}
