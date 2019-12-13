import React, { Component } from 'react';
import { Toolbar, Typography, Button, Grid, Avatar } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import gmbIcon from './icon_medium.jpeg';
import iconmission from './icon_mission.jpeg';
import gbrartikelMission from './gbrartikel_mission1.jpeg';
import { Link } from 'react-router-dom';
import TwitterIcon from '@material-ui/icons/Twitter';
import FacebookIcon from '@material-ui/icons/Facebook';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';

export default class ArtikelDetail extends Component {
    render() {
        return (
            <div>
                {/* ========START TOPBAR AND HEDER ========= */}
                <Toolbar style={{ margin: '0 130px' }}>

                    <Link to="/" ><img src={gmbIcon} alt="icon-medium" /></Link>
                    <div className="grow">
                        <SearchIcon style={{ margin: '0 15px' }}></SearchIcon>
                        <NotificationsNoneIcon style={{ margin: '0 15px' }} />
                        <Button style={{ marginLeft: '15px' }} variant="outlined" color="primary">Upgrade</Button>
                    </div>

                </Toolbar>
                <hr style={{ opacity: '0.3' }} />
                <Toolbar style={{ boxShadow: '5px 5px 4px grey', marginBottom: '40px' }}>
                    <div style={{ float: 'left' }} >
                        <ul className='listmission'>
                            <li>
                                <img style={{
                                    marginLeft: '30px',

                                }} src={iconmission} alt="icon-mision" />
                            </li>
                            <li>MISSION ORIGINALS</li>
                            <li> | SUBSCRIBE</li>
                        </ul>
                    </div>

                </Toolbar>
                {/* ========END TOPBAR AND HEDER ========= */}
                <Grid container={1} spacing={1}>
                    <Grid item xs={9} style={{ margin: '0 auto', }}>
                        <div>
                            <img style={{
                                width: '100%',
                            }} src={gbrartikelMission} alt="gbr-artikelmision" />

                        </div>

                    </Grid>
                </Grid>
                <Grid container={1} spacing={2}>
                    <Grid item xs={2}>

                    </Grid>
                    <Grid item xs={7} style={{ margin: '0 auto', paddingTop: '40px' }}>
                        <div style={{ width: '80%' }}>

                            <div>
                                <Avatar style={{ float: 'left', width: '60px', height: '60px' }}
                                    alt="Ted talk"
                                    src="https://pbs.twimg.com/profile_images/877631054525472768/Xp5FAPD5_reasonably_small.jpg"
                                ></Avatar>
                                <p style={{ marginLeft: '80px', marginBottom: '50px' }}>Ryan Holiday
                                <Button
                                        size="small" variant="outlined" color="primary"
                                        style={{ marginLeft: '10px'}}><span style={{ fontSize: '10px'}}>Follow</span>
                                    </Button><br></br><span style={{ fontSize: '12px', opacity: '0.5' }}>Jun 23 2018. 6 min read</span>
                                    <span style={{ float: 'right', alignContent: 'center', marginBottom: '20px' }}>
                                        <Link><TwitterIcon></TwitterIcon></Link>
                                        <Link><FacebookIcon style={{ margin: '0 15px' }}></FacebookIcon></Link>
                                        <Link><BookmarkBorderIcon>

                                        </BookmarkBorderIcon>
                                        </Link>
                                    </span>
                                </p>
                            </div>
                            <Typography variant="h5" style={{ textAlign: 'center' }}>
                                If You Only Read A Few Books In 2018, Read These.</Typography>

                            <p className='textParagraf'>
                                If you’d liked <u>to be jerked around less</u>, provoked less, and <u>more productive and inwardly focused</u>, where should you start?
                            </p>
                            <p className='textParagraf'>
                                To me, the answer is obvious: by turning to wisdom. Below is a list of 21 books that will help lead you to a better, stronger 2018.
                            </p>
                            <p className='textParagraf'><strong>Deep Work: Rules for Focused Success in a Distracted World by Cal Newport</strong> Media consumption went way up in 2017. For <u>most of us</u>, that meant happiness and productivity went way down. The world is becoming noisier and will become more so every day. If you can’t cultivate the ability to have quiet, insightful, deeply focused periods of productive work, you’re going to get screwed. This is a book that explains <u>how to cultivate> and protect that skill</u> — the ability to do deep work. I strongly urge you to begin this practice in 2018— if you want to get anything done or perform your best.</p>
                            <p className='textParagraf'><strong>The Subtle Art of Not Giving a F*ck: A Counterintuitive Approach to Living a Good Life by Mark Manson</strong> To me, <u>practical philosophy has</u> always been the art knowing what to — and what not to — give a fuck about. That’s what Mark’s book is about. It’s not about apathy. It’s about cultivating indifference to things that don’t matter. Be careful, as Marcus Aurelius warns, not to give the little things more time and thought they deserved. Maybe looking back at this year reveals how much effort you’ve frittered away worrying about the trivial. If so, let 2018 be a year that you only devote energy to things that truly matter — get the important things right by ignoring the insignificant.</p>
                        </div>
                    </Grid>
                </Grid>
            </div>


        );
    }
}
