import React from "react";
import PropTypes from "prop-types";

import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  heading: {
    fontSize: theme.typography.pxToRem(17),
    fontWeight: theme.typography.fontWeightBold,
    padding: theme.spacing(2),
  },
  lightHeading: {
    fontSize: theme.typography.pxToRem(12),
    fontWeight: theme.typography.fontWeightLight,
    paddingLeft: theme.spacing(2),
    paddingBottom: theme.spacing(3),
  },
  content: {
    fontSize: theme.typography.pxToRem(13),
    fontWeight: theme.typography.fontWeightMedium,
    paddingLeft: theme.spacing(2),
  },
  spacer: {
    paddingLeft: theme.spacing(2),
    paddingTop: theme.spacing(3),
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
    borderBottom: "0.1em solid black",
    fontWeight: theme.typography.fontWeightBold,
  },
  paperDetail: {
    textAlign: "left",

    fontWeight: theme.typography.fontWeightBold,
  },
  copyright: {
    textAlign: "center",
    borderTop: "0.1em solid black",
    paddingTop: theme.spacing(5),
    paddingBottom: theme.spacing(2),
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Container fixed>
        <Typography component="div" style={{ height: "5vh" }}>
        <Typography  className={classes.copyright}>copyright hactiv8 2018</Typography> 
        </Typography>
        
      </Container>
    </div>
  );
}
