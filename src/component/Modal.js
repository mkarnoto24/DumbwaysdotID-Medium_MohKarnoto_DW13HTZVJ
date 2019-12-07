import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import Bgimage from './bg.jpeg';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import './style.css';
import Link from '@material-ui/core/Link';

const useStyles = makeStyles(theme => ({

    root: {
        fontSize: '15px'
    },
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',

    },
    paper: {
        backgroundColor: theme.palette.background.paper,
        backgroundImage: `url(${Bgimage})`,
        border: '1px solid #fffff',
        backgroundRepeat: 'no-repeat',
        width: 700,
        height: 450,
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
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
                            <h1 id="transition-modal-title">Join Medium</h1>
                            <p id="transition-modal-description">Create an account to receive great stories in your inbox, personalize your homepage, and follow authors and topics that you love.</p>
                            <form className={classes.root} noValidate autoComplete="off">
                                <TextField id="standard-basic" label="Your Username" /><br />
                                <TextField
                                    id="standard-password-input"
                                    label="Your Password"
                                    type="password"
                                    autoComplete="current-password"
                                /><br />
                                <TextField
                                    id="standard-password-input"
                                    label="Your Email"
                                    type="email"
                                /><br />
                                <Button style={{ marginTop: '10px' }} variant="contained" color="primary">
                                    Primary
                                </Button>

                            </form>
                            <p>Already have an account?<Link to="#">
                                Sign In</Link></p>
                            <p>
                                To make Medium work, we log user data and share it with service providers. Click “Sign Up” above to accept Medium’s <Link to="#">Terms of Service</Link> & <Link to="#">Privacy Policy</Link>.
                                </p>
                        </div>

                    </div>
                </Fade>
            </Modal>
        </div>
    );
}
