import React, { Component } from 'react';
import { Toolbar, Typography, Button, Link, Grid, Box } from '@material-ui/core';
import './../App.css';
import gmbIcon from './icon_medium.jpeg';
import gbrartikel_onezero1 from './gbrartikel_onezero1.jpeg';
import SearchIcon from '@material-ui/icons/Search';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import icononezero from './onezero.jpeg';

export default class CategoryPage extends Component {
    render() {
        return (
            <div className="AppMedium">
                {/* ========START TOPBAR AND HEDER ========= */}
                <Toolbar>
                    <img src={gmbIcon} alt="icon-medium" />
                    <div className="grow">
                        <SearchIcon></SearchIcon>
                        <NotificationsNoneIcon />
                        <Button variant="outlined" color="primary">Upgrade</Button>
                    </div>
                </Toolbar>
                <Toolbar>
                    <img style={{
                        margin: '40px 30px',
                        width: '250px',
                        height: '60px'
                    }} src={icononezero} alt="icon-onezero" />
                    <div>
                        <strong><p>
                            <Link>The front lines of the future.</Link><br />
                            A Medium publication about tech and science.</p></strong>
                    </div>
                    <div className="grow">
                        <Button size="small" variant="outlined" color="secondary">Follow</Button>
                    </div>
                </Toolbar>
                {/* ========END TOPBAR AND HEDER ========= */}

                {/* ========START CONTENT ========= */}
                <div>


                    {/* <Box display="flex" flexDirection="row" bgcolor="background.paper">
                        <Box width="60%">

                            <img
                                style={{
                                    width: '100%',
                                    height: '50%',
                                    marginTop: '20px'
                                }}

                                src={gbrartikel_onezero1} alt="gbr-artikel" />

                        </Box>
                        <Box width="40%">
                            <div style={{
                                backgroundColor: '#46b3e6',
                                width: '100%',
                                height: '50%',
                                textAlign: 'center'
                            }}>
                                <h1 style={{
                                    paddingTop: '30px'
                                }}
                                >The Influencer and the Hit Man</h1>
                                <div>
                                    <p>How a years-long domain name feud ended in a bloody shootout</p>
                                    <span>Ian Frisch</span><br></br>
                                    <span>Dec 10. 24 min read</span>
                                </div>
                            </div>
                        </Box>
                    </Box> */}
                    {/* <Grid container spacing={1}>
                        <Grid item xs={12}>
                            <Box
                                display="flex"
                                flexWrap="wrap"
                                alignContent="flex-start"
                            >
                                <Box>
                                    <img
                                        style={{
                                            width: '50%',
                                            height: '50%',
                                            marginTop: '20px'
                                        }}

                                        src={gbrartikel_onezero1} alt="gbr-artikel" />

                                </Box>
                                <Box width="40%">
                                    <div style={{
                                        backgroundColor: '#46b3e6',
                                        width: '100%',
                                        height: '50%',
                                        textAlign: 'center',
                                        marginTop: '10px'
                                    }}>
                                        <h1 style={{
                                            paddingTop: '30px'
                                        }}
                                        >The Influencer and the Hit Man</h1>
                                        <div>
                                            <p>How a years-long domain name feud ended in a bloody shootout</p>
                                            <span>Ian Frisch</span><br></br>
                                            <span>Dec 10. 24 min read</span>
                                        </div>
                                    </div>
                                </Box>
                                <Box width="60%">
                                    <img
                                        style={{
                                            width: '100%',
                                            height: '50%',
                                            marginTop: '20px'
                                        }}

                                        src={gbrartikel_onezero1} alt="gbr-artikel" />

                                </Box>
                                <Box width="40%">
                                    <div style={{
                                        backgroundColor: '#46b3e6',
                                        width: '100%',
                                        height: '50%',
                                        textAlign: 'center',
                                        marginTop: '10px'
                                    }}>
                                        <h1 style={{
                                            paddingTop: '30px'
                                        }}
                                        >The Influencer and the Hit Man</h1>
                                        <div>
                                            <p>How a years-long domain name feud ended in a bloody shootout</p>
                                            <span>Ian Frisch</span><br></br>
                                            <span>Dec 10. 24 min read</span>
                                        </div>
                                    </div>
                                </Box>
                            </Box>
                        </Grid>
                    </Grid> */}
                </div>
                {/* ========END CONTENT ========= */}
            </div>
        );
    }
}
