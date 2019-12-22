import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { ProfilButton } from '../components/Header'
import SpeedDial from '@material-ui/lab/SpeedDial';
import SpeedDialIcon from '@material-ui/lab/SpeedDialIcon';
import SpeedDialAction from '@material-ui/lab/SpeedDialAction';
import PhotoCameraOutlinedIcon from '@material-ui/icons/PhotoCameraOutlined';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import PlayArrowOutlinedIcon from '@material-ui/icons/PlayArrowOutlined';
import PrintIcon from '@material-ui/icons/Print';
import CodeOutlinedIcon from '@material-ui/icons/CodeOutlined';
import AddCircleOutlineOutlinedIcon from '@material-ui/icons/AddCircleOutlineOutlined';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import { TextField } from '@material-ui/core';

import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import IconMedium from './assets/icon_medium.jpeg';


const useStyles = makeStyles(theme => ({
    root: {
        margin: '0 auto',
        transform: 'translateZ(0px)',
        flexGrow: 1,
    },
    exampleWrapper: {
        position: 'relative',
        marginTop: theme.spacing(3),
        width: '60%'
    },
    speedDial: {
        position: 'absolute',
        '&.MuiSpeedDial-directionUp, &.MuiSpeedDial-directionLeft': {
            bottom: theme.spacing(2),
            right: theme.spacing(2),
        },
        '&.MuiSpeedDial-directionDown, &.MuiSpeedDial-directionRight': {
            top: theme.spacing(2),
            left: theme.spacing(2),
        },
    },
    title: {
        display: 'flex',
        flexGrow: 1,
        textDecoration: 'none', '&:visited': { color: 'black' },
        float: 'left',

    },
    textSignUp: {
        fontSize: '12px'
    }
}));

const actions = [
    { icon: <PhotoCameraOutlinedIcon />, name: 'add an images' },
    { icon: <SearchOutlinedIcon />, name: 'add image from unsplash' },
    { icon: <PlayArrowOutlinedIcon />, name: 'add a video' },
    { icon: <CodeOutlinedIcon />, name: 'add an embed' },
    { icon: <AddCircleOutlineOutlinedIcon />, name: 'add new part' },
];

export default function SpeedDials() {
    const classes = useStyles();
    const [direction, setDirection] = React.useState('Right');
    const [open, setOpen] = React.useState(false);
    const [isopen, issetOpen] = React.useState(false);

    const handleClose = () => {
        setOpen(false);
    };
    const ishandleClose = () => {
        issetOpen(false);
    };

    const handleOpen = () => {
        setOpen(true);
    };
    const isHandleOpen = () => {
        issetOpen(true);
    };

    return (
        <div className={classes.root}>
            <Toolbar style={{ width: '80%', margin: '0 auto' }}>
                <Link to="/" className={classes.title}>
                    <img src={IconMedium}
                        style={{ width: '36px', height: '36px' }}
                        alt="icon-medium"></img>
                    <Typography variant="p" style={{ lineHeight: '37px', marginLeft: '10px' }}>Draft
                    </Typography></Link>


                <Link to="/register" style={{ textDecoration: 'none' }}>
                    <Button variant="outlined">
                        <span className={classes.textSignUp}>Publish</span>
                    </Button>
                </Link>
                <IconButton>
                    <MoreHorizIcon></MoreHorizIcon>
                </IconButton>

                <IconButton color="inherit">
                    <Badge badgeContent={0} color="secondary">
                        <NotificationsNoneIcon />
                    </Badge>
                </IconButton>
                <ProfilButton />
            </Toolbar>
            <div className={classes.exampleWrapper}
                style={{
                    width: '60%',
                    margin: '0 auto',
                    marginTop: '40px'
                }}>
                <SpeedDial
                    ariaLabel="SpeedDial example"
                    className={classes.speedDial}
                    icon={<SpeedDialIcon />}
                    onClose={ishandleClose}
                    //onOpen={handleOpen}
                    open={isopen}
                    onClick={isHandleOpen}
                    direction={direction}
                >
                    {actions.map(action => (
                        <SpeedDialAction
                            key={action.name}
                            icon={action.icon}
                            tooltipTitle={action.name}
                            onClick={handleClose}
                        />
                    ))}
                </SpeedDial>
                <TextField placeholder="Title" multiline
                    style={{ width: '400px', marginLeft: '100px', paddingTop: '25px' }} />

            </div>
            <div className={classes.exampleWrapper}
                style={{
                    width: '60%',
                    margin: '0 auto',
                    marginTop: '10px'
                }}>
                <SpeedDial
                    ariaLabel="SpeedDial example"
                    className={classes.speedDial}
                    icon={<SpeedDialIcon />}
                    onClose={handleClose}
                    //onOpen={isHandleOpen}
                    open={open}
                    onClick={handleOpen}
                    direction={direction}
                >
                    {actions.map(action => (
                        <SpeedDialAction
                            key={action.name}
                            icon={action.icon}
                            tooltipTitle={action.name}
                            onClick={handleClose}
                        />
                    ))}
                </SpeedDial>
                <TextField placeholder="Title" multiline
                    style={{ width: '400px', marginLeft: '100px', paddingTop: '25px' }} />

            </div>
        </div>
    );
}
