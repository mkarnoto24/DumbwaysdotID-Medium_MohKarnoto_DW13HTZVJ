import React, { Component } from 'react';
import { AppBar, Toolbar, IconButton, Typography, Button } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import SearchIcon from '@material-ui/icons/Search';
const menuId = 'primary-search-account-menu';

export default class Header extends Component {
    render() {
        return (
            <div className="root">
                <AppBar color="white" position="sticky">
                    <Toolbar style={{ margin: '0 auto', width: '84%' }}>
                        <Typography variant="h5" className="title">
                            Medium
                        </Typography>
                        <SearchIcon></SearchIcon>
                        <NotificationsNoneIcon style={{ margin: '0 15px' }}></NotificationsNoneIcon>
                        <Button color="inherit" size="small" variant="outlined">
                            <span className="btn-upgrade">Upgrade</span>
                        </Button>
                        <IconButton
                            edge="end"
                            aria-label="account of current user"
                            aria-controls={menuId}
                            aria-haspopup="true"
                            color="inherit"
                        >
                            <AccountCircle />
                        </IconButton>
                    </Toolbar>
                </AppBar>

            </div>
        );
    }
}
