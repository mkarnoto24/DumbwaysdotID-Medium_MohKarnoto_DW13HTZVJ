import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';


const classes = {
    paper: {

        border: '1px solid #cccccc',
        display: 'flex',
        margin: '0 auto',
        width: '60%',
        marginTop: '100px',
        flexDirection: 'column',
    },
    centermodal: {
        width: '100%',
        textAlign: 'center'
    },
    closeButton: {

        float: 'right',
        position: 'relative',
    },
    btn: {
        color: 'white',
        backgroundColor: 'black',
        marginTop: '60px'
    },
    txtkecil: {
        fontSize: '15px'
    },
}

export default class Login extends Component {
    render() {
        return (
            <div>
                <div style={classes.paper} >
                    <div style={classes.centermodal}>

                        <h2 style={{ paddingBottom: '1px' }} id="transition-modal-title">Sign In with email</h2>

                        <p id="transition-modal-description" style={classes.txtkecil}>
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
                            <Button style={classes.btn}><span className={classes.bntspan}>Continue</span></Button>
                        </form>
                        <p>
                            <Link to="#" className={classes.signoption}><span><ArrowBackIosIcon fontSize="small" />All Sign In option</span></Link>
                        </p>
                    </div>
                </div>
            </div>
        );
    }
}
