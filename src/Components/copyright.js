import React from "react";


import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";


const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
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
