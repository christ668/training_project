import React from "react";


import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  heading: {
    fontSize: theme.typography.pxToRem(17),
    fontWeight: theme.typography.fontWeightBold,
    padding: theme.spacing(2),
  },
  lightHeading:{
    fontSize: theme.typography.pxToRem(12),
    fontWeight: theme.typography.fontWeightLight,
    paddingLeft: theme.spacing(2),
    paddingBottom: theme.spacing(3),    
  },
  content:{
    fontSize: theme.typography.pxToRem(13),
    fontWeight: theme.typography.fontWeightMedium,
    paddingLeft: theme.spacing(2),
  },
  spacer:{
    paddingLeft: theme.spacing(2),
    paddingBottom: theme.spacing(3),
  },
  title: {
    flexDirection: "column",
    padding: theme.spacing(5),
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography variant="h4" className={classes.title}>
        Next Meetup{" "}
      </Typography>
        <CssBaseline />
        <Container fixed>
            <Typography
            component="div"
            style={{ backgroundColor: "#d1e0e0", height: "50vh" }}
            >
             <Typography variant="h6" className={classes.heading}>awesome meetup and event</Typography>
             <Typography variant="body1" className={classes.lightHeading}>25 january 2019</Typography>
             <Typography className={classes.content}>Hello javascript and node.js Ninjas</Typography>
             <Typography className={classes.content}>get ready for our montly meetup JakartaJS!, this will be our fifth meetup of 2018</Typography>
             <Typography className={classes.content}>the meetup format will contain some short stories and technical talks</Typography>
             <Typography className={classes.content}>if you have a short announcement you'd like to share with the audience, you
             may do so during open mic annauncements. </Typography>
             <Typography className={classes.spacer}> </Typography>
             <Typography className={classes.content}>remember to bring a photo ID to get through building security</Typography>
             <Typography className={classes.spacer}> </Typography>
             <Typography className={classes.content}>- - - - -</Typography>
             <Typography className={classes.spacer}> </Typography>
             <Typography className={classes.content}>see you there!</Typography >
             <Typography className={classes.spacer}> </Typography>
             <Typography className={classes.content}>best hengky,giovanni,Sofian,Riza,Agung the JakartaJS Organizers</Typography>
            </Typography>
      </Container>
    </div>
  );
}
