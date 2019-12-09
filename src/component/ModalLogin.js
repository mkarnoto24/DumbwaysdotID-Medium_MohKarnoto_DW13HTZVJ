import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';


const useStyles = makeStyles(theme => ({
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    paper: {
        backgroundColor: theme.palette.background.paper,
        border: '0px solid #fffff',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(1, 1),
        width: 700,
        height: 450,
        display: 'flex'
    },
    left: {
        width: 175,
    },
    center: {
        width: 350,
        textAlign: 'center'
    },
    right: {
        width: 175,
        margin: '0'
    },
    btn: {
        color: 'white',
        backgroundColor: 'black',
        marginTop: '60px'
    },
    signoption: {
        textStyle: 'none'
    },
    txtkecil: {
        fontSize: '15px'
    },
    closeButton: {

        float: 'right',
        position: 'relative',
        right: theme.spacing(1),
        top: theme.spacing(1),
        color: theme.palette.grey[500],
    }
}));

export default function TransitionsModal() {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    return (
        <div>
            <button type="button" onClick={handleOpen}>
                Login
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
                    <div className={classes.paper}>
                        <div className={classes.left}>

                        </div>
                        <div className={classes.center}>

                            <h2 style={{ paddingBottom: '1px' }} id="transition-modal-title">Sign In with email</h2>

                            <p id="transition-modal-description" className={classes.txtkecil}>
                                Enter the email address associated with your account, and we'll send a magic link to your inbox.
                            </p>
                            <form>
                                <TextField
                                    label="Your Password"
                                    type="password"
                                    autoComplete="current-password"
                                /><br />
                                <TextField
                                    label="Your Email"
                                    type="email"
                                /><br />
                                <Button className={classes.btn}><span className={classes.bntspan}>Continue</span></Button>
                            </form>
                            <p>
                                <Link to="#" className={classes.signoption}><span><ArrowBackIosIcon fontSize="small" />All Sign In option</span></Link>
                            </p>
                        </div>
                        <div className={classes.right}>
                            <IconButton aria-label="close" className={classes.closeButton} onClick={handleClose}>
                                <CloseIcon />
                            </IconButton>
                        </div>
                    </div>
                </Fade>
            </Modal>
        </div >
    );
}
