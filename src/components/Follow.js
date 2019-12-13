import React, { Component } from 'react';
import { Typography, Button, Grid, Avatar } from '@material-ui/core';
import { Link } from 'react-router-dom';
import TwitterIcon from '@material-ui/icons/Twitter';
import FacebookIcon from '@material-ui/icons/Facebook';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import './../App.css';

export default class Follow extends Component {
    render() {
        return (
            <div>
                <Grid container={1} spacing={2}>
                    <Grid item xs={2}>

                    </Grid>
                    <Grid item xs={7} style={{ margin: '0 auto' }}>
                        <Grid container={1} spacing={2}>
                            <Grid item xs={9}>
                                <Button style={{ marginRight: '5px', fontSize: '12px' }} variant="contained" color="default">Books</Button>
                                <Button style={{ marginRight: '5px', fontSize: '12px' }} variant="contained" color="default">Self Improvement</Button>
                                <Button style={{ marginRight: '5px', fontSize: '12px' }} variant="contained" color="default">Prouctivity</Button>
                                <Button style={{ marginRight: '5px', fontSize: '12px' }} variant="contained" color="default">Life</Button>
                                <Button style={{ fontSize: '12px' }} variant="contained" color="default">Life Lessons</Button>

                            </Grid>
                            <Grid item xs={3}>

                            </Grid>

                        </Grid>
                    </Grid>
                </Grid>

                <Grid container={1} spacing={2}>
                    <Grid item xs={2}>

                    </Grid>
                    <Grid item xs={7} style={{ margin: '0 auto', paddingTop: '20px' }}>
                        <div style={{ width: '80%' }}>

                            <div>
                                <Avatar style={{ float: 'left', width: '50px', height: '50px' }}
                                    alt="Ted talk"
                                    src="https://pbs.twimg.com/profile_images/877631054525472768/Xp5FAPD5_reasonably_small.jpg"
                                ></Avatar>
                                <div><p style={{ marginLeft: '70px', paddingTop: '12px', marginBottom: '50px' }}><strong>54k claps</strong>
                                    <span style={{ float: 'right', alignContent: 'center', marginBottom: '20px' }}>
                                        <Link><TwitterIcon></TwitterIcon></Link>
                                        <Link><FacebookIcon style={{ margin: '0 8px' }}></FacebookIcon></Link>
                                        <Link><BookmarkBorderIcon>

                                        </BookmarkBorderIcon>
                                        </Link>
                                        <Link><MoreHorizIcon style={{ marginLeft: '8px' }} /></Link>
                                    </span>
                                </p></div>
                                <hr style={{ opacity: '0.5' }}></hr>
                            </div>

                            <div style={{ margin: '50px 0' }}>
                                <Avatar style={{ float: 'left', width: '70px', height: '70px' }}
                                    alt="Ted talk"
                                    src="https://pbs.twimg.com/profile_images/877631054525472768/Xp5FAPD5_reasonably_small.jpg"
                                ></Avatar>
                                <p style={{ marginLeft: '80px', marginTop: '40px' }}>Ryan Holiday
                                <br></br><span style={{ fontSize: '12px', opacity: '0.5' }}>Jun 23 2018. 6 min read</span>
                                    <span style={{ float: 'right', alignContent: 'center', paddingBottom: '25px' }}>
                                        <Button
                                            size="small" variant="outlined" color="primary"
                                            style={{ marginLeft: '10px' }}><span style={{ fontSize: '13px' }}>Follow</span>
                                        </Button>


                                    </span>
                                </p>
                                <p style={{ marginLeft: '80px' }}>Product Designer and Manager</p>

                            </div>

                            <hr />
                            <div>
                                <Button variant="outlined" color="primary" style={{ width: '100%', height: '50px', marginTop: '20px' }}>
                                    <span style={{ fontSize: '13px' }}>
                                        See More Response
                                    </span>
                                </Button>
                            </div>
                        </div>
                    </Grid>

                </Grid>

            </div >
        );
    }
}
