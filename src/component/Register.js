import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import gmbrkiri from './kiri.jpeg';
import gmbrkanan from './kanan.jpeg';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import './style.css';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Link from '@material-ui/core/Link';

const useStyle = makeStyles(theme => ({

    modal: {
        margin: '0',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    paper: {
        backgroundColor: theme.palette.background.paper,
        border: '1px solid #000000',
        width: 800,
        height: 550,
        boxShadow: theme.shadows[5],
        color: theme.palette.text.secondary,
        display: 'flex'
    },
    left: {
        width: 200,
    },
    center: {
        width: 400,
        textAlign: 'center'
    },
    right: {
        width: 200,
    },
    closeButton: {

        float: 'right',
        position: 'relative',
        right: theme.spacing(),
        top: theme.spacing(),
        color: theme.palette.grey[500],
    }
}));

export default function Register() {

    const classes = useStyle();
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    const Login = () => {
        setOpen(false);
    }



    return (

        <div>
            <button type="button" onClick={handleOpen}>
                Create Account
            </button>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                className={classes.modal}
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={open}>

                    <div className={classes.root}>
                        <div className={classes.paper}>
                            <div className={classes.left}>
                                <img src={gmbrkiri} alt="logo" style={{ height: '90%' }} />
                            </div>
                            <div className={classes.center}>
                                <h1 id="transition-modal-title">Join Medium</h1>
                                <p id="transition-modal-description" style={{ textAlign: 'justify' }}>Create an account to receive great stories in your inbox, personalize your homepage, and follow authors and topics that you love.</p>
                                <form className={classes.root} noValidate autoComplete="off">
                                    <TextField id="standard-basic" label="Your Username" /><br />
                                    <TextField
                                        label="Your Password"
                                        type="password"
                                        autoComplete="current-password"
                                    /><br />
                                    <TextField
                                        label="Your Email"
                                        type="email"
                                    /><br />
                                    <Button style={{ marginTop: '10px' }} variant="contained" color="primary">
                                        Registration
                                </Button>

                                </form>
                                <p>Already have an account? <Link onClick={Login} style={{ cursor: 'pointer' }}>
                                    Sign In</Link></p>
                                <p>
                                    To make Medium work, we log user data and share it with service providers. Click “Sign Up” above to accept Medium’s <Link to="#">Terms of Service</Link> & <Link to="#">Privacy Policy</Link>.
                                </p>
                            </div>
                            <div className={classes.right}>
                                <IconButton aria-label="close" className={classes.closeButton} onClick={handleClose}>
                                    <CloseIcon />
                                </IconButton>
                                <img src={gmbrkanan} alt="logo" style={{ width: '100%', posiotion: 'static' }} />

                            </div>

                        </div>

                    </div>
                </Fade>
            </Modal>
        </div>
    );
}
