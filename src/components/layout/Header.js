import React, { Component } from 'react';
import { AppBar, Toolbar, IconButton, Typography, Button } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu'
import './layout.css';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import SearchIcon from '@material-ui/icons/Search';

export default class Header extends Component {
    render() {
        return (
            <div className="root">
                <AppBar color="white" position="sticky">
                    <Toolbar>
                        <Typography variant="h5" className="title">
                            Medium
                        </Typography>
                        <SearchIcon></SearchIcon>
                        <NotificationsNoneIcon></NotificationsNoneIcon>
                        <Button color="inherit" size="small" variant="outlined">
                            <span className="btn-upgrade">Upgrade</span>
                        </Button>
                    </Toolbar>
                </AppBar>

            </div>
        );
    }
}
