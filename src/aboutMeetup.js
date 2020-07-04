import React from "react";
import PropTypes from "prop-types";

import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
  title: {
    flexDirection: "column",
    padding: theme.spacing(5),
  },
  content: {
    flexDirection: "column",
    paddingLeft: theme.spacing(8),
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography variant="h4" className={classes.title}>
        About Meetup{" "}
      </Typography>
      <CssBaseline />
      <Container fixed>
        <Typography variant="body1">come and meet other developers interested in the javascript and it's 
        library in the greater jakarta area.</Typography>
        <Typography variant="body1">Twitter :@jakartaJS and we use the hastag #jakartaJS </Typography>
      </Container>
    </div>
  );
}
