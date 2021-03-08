import './App.css';
import { makeStyles } from "@material-ui/styles";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import { TrackChanges as TrackChangesIcon } from '@material-ui/icons';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';

const DARK_COLOR = '#3f51b5'
const LIGHT_COLOR = '#3ba4ff29'
const GREEN_COLOR = '#3dce62'

const useStyle = makeStyles(theme => ({
  root: {
    background: LIGHT_COLOR,
    position: 'absolute',
    width: '100%',
    height: '100%'
  },
  menuButton: {
    marginRight: 10,
  },
  appBar: {
    minHeight: '40px !important',
    height: 45
  },
  body: {
    display: 'flex',
    width: '100%',
    height: '100%',
    padding: 20
  },
  objectsListButtons: {
    height: '85%',
    width: '15%',
    background: DARK_COLOR,
    textAlign: 'center'
  },
  objectsListButton: {
    marginTop: 10,
    background: GREEN_COLOR,
    color: 'black',
    fontWeight: 'bold',
    width: '83%'
  },
  imageDisplay: {
    height: '85%',
    width: '78%',
    marginLeft: 20
  }
}))

const App = () => {
  const classes = useStyle();

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.appBar}>
        <Toolbar variant="dense">
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <TrackChangesIcon />
          </IconButton>
          <Typography variant="h6" color="inherit">
            Last Seen Object Reminder - System
          </Typography>
        </Toolbar>
      </AppBar>
      <div className={classes.body}>
        <Paper className={classes.objectsListButtons}>
          <Button className={classes.objectsListButton} variant="contained">Bag</Button>
        </Paper>
        <Paper className={classes.imageDisplay}>
          {/* <img ></img> */}
        </Paper>
      </div>
    </div>
  );
}

export default App;
