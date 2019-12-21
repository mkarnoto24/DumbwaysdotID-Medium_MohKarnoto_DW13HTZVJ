import React from 'react';
import { fade, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircle from '@material-ui/icons/AccountCircle';
import InputBase from '@material-ui/core/InputBase';
import { Link } from 'react-router-dom'
import Button from '@material-ui/core/Button'
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { Avatar } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    marginBottom: '20px',

  },
  child: {
    padding: '0 110px'
  },
  title: {
    display: 'flex',
    flexGrow: 1,
    textDecoration: 'none', '&:visited': { color: 'black' },
    float: 'left',

  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  },
  searchIcon: {
    width: theme.spacing(7),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  textSignUp: {
    fontSize: '12px'
  },
  textMenuItem: {
    fontSize: '12px'
  },

  inputInput: {
    padding: theme.spacing(1, 1, 1, 7),
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: 120,
      '&:focus': {
        width: 200,
      },
    },
  },

}))

export function ProfilButton() {

  const [anchorEl, setAnchorEl] = React.useState(null);


  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const classes = useStyles();
  return (
    <div>

      <IconButton color="inherit" aria-controls="simple-menu" aria-hanspopup="true" onClick={handleClick}>
        <AccountCircle />
      </IconButton>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
        style={{ marginTop: 40 }}
      >
        <MenuItem className={classes.textMenuItem}>
          <div style={{ display: 'flex' }}>
            <div style={{ flex: 1, marginRight: 8, marginTop: 5 }}>
              <Avatar />

            </div>
            <div style={{ flex: 1 }}>
              <Typography variant="subtitle1" style={{ fontWeight: 'bold' }}>Moh Karnoto</Typography>
              <Typography variant="caption">@mohkarnoto123</Typography>
            </div>


          </div>
        </MenuItem>
        <MenuItem className={classes.textMenuItem} style={{ color: 'green' }}>Become a member</MenuItem>
        <hr />
        <MenuItem className={classes.textMenuItem} onClick={handleClose}>New Story</MenuItem>
        <MenuItem className={classes.textMenuItem} onClick={handleClose}>Stories</MenuItem>
        <MenuItem className={classes.textMenuItem} onClick={handleClose}>Stats</MenuItem>
        <hr />
        <MenuItem className={classes.textMenuItem} onClick={handleClose}>Bookmark</MenuItem>
        <MenuItem className={classes.textMenuItem} onClick={handleClose}>Profile</MenuItem>
        <MenuItem className={classes.textMenuItem} onClick={handleClose}>Setting</MenuItem>
        <MenuItem className={classes.textMenuItem} onClick={handleClose}>Help</MenuItem>
        <MenuItem className={classes.textMenuItem} onClick={handleClose}>Logout</MenuItem>
      </Menu>
    </div>
  );
}


;



function ButtonAppBar() {
  const classes = useStyles();


  return (
    <div className={classes.root}>
      <AppBar position="static" color="white">
        <div className={classes.child}>
          <Toolbar>
            <Link to="/" className={classes.title}><Typography variant="h4">
              Medium
          </Typography></Link>
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase
                placeholder="Search…"
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
                inputProps={{ 'aria-label': 'search' }}
              />
            </div>
            <IconButton color="inherit">
              <Badge badgeContent={0} color="secondary">
                <NotificationsNoneIcon />
              </Badge>
            </IconButton>
            <Link to="/register" style={{ textDecoration: 'none' }}><Button variant="outlined">
              <span className={classes.textSignUp}>Sign Up</span>
            </Button></Link>
            <ProfilButton />
          </Toolbar>
        </div>
      </AppBar>
    </div>
  );
}

export default ButtonAppBar;