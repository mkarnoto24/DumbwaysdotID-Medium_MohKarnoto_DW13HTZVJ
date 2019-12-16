import React, { Component } from 'react';

import gmbrkiri from './kiri.jpeg';
import gmbrkanan from './kanan.jpeg';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import './style.css';
import { Link } from 'react-router-dom';

const classes = {
    paper: {
        border: '1px solid #cccccc',
        width: 800,
        height: 550,
        display: 'flex',
        margin: '0 auto',
        marginTop: '50px'
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
    }
}

export default class Register extends Component {
    render() {
        return (
            <div>
                <div style={classes.root}>
                    <div style={classes.paper}>
                        <div style={classes.left}>
                            <img src={gmbrkiri} alt="logo" style={{ height: '90%' }} />
                        </div>
                        <div style={classes.center}>
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
                            <p>Already have an account? <Link to="/login" style={{ cursor: 'pointer' }}>
                                Sign In</Link></p>
                            <p>
                                To make Medium work, we log user data and share it with service providers. Click “Sign Up” above to accept Medium’s <Link to="#">Terms of Service</Link> & <Link to="#">Privacy Policy</Link>.
                                </p>
                        </div>
                        <div style={classes.right}>
                            <img src={gmbrkanan} alt="logo" style={{ width: '100%', posiotion: 'static' }} />

                        </div>

                    </div>

                </div>
            </div >
        );
    }
}


