import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    padding: theme.spacing(0, 5)
  },
  spacer: {
    flexGrow: 1,
    padding: theme.spacing(0, 5)
  },
  button: {
    padding: theme.spacing(0, 5)
  }
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            QTemu
          </Typography>
          <Typography variant="h6" className={classes.title}>
            create meetup
          </Typography>
          <Typography variant="h6" className={classes.title}>
            explore
          </Typography>
          <Typography variant="h6" className={classes.spacer}>
            &nbsp;
          </Typography>
          <Button className={classes.button} color="inherit">
            Login
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
