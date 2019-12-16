import React, { Component } from 'react';
import { AppBar, Toolbar, Typography, Button, Avatar } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import AccountCircle from '@material-ui/icons/AccountCircle';
import SearchIcon from '@material-ui/icons/Search';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import gmbIcon from './icon_medium.jpeg';
import iconmission from './icon_mission.jpeg';
import gbrartikelMission from './gbrartikel_mission1.jpeg';
import { Link } from 'react-router-dom';
import TwitterIcon from '@material-ui/icons/Twitter';
import FacebookIcon from '@material-ui/icons/Facebook';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import Follow from './Follow';
import './../App.css';
import RelatedArticle1 from './RelatedArticle1';

const menuId = 'primary-search-account-menu';

export default class ArtikelDetail extends Component {
    render() {
        return (
            <div>
                <AppBar color="white" position="static">
                    <Toolbar style={{ margin: '0 auto', width: '84%' }}>
                        <Typography variant="h5" className="title">
                            <Link to="/">
                                <img src={gmbIcon} alt="logo-medium" style={{ marginTop: '15px', height: '40px' }} /></Link>
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
                    <hr style={{ width: '100%', color: 'black', opacity: '0.3' }}></hr>
                    <div style={{ margin: '0 auto', width: '84%' }}>
                        <div style={{ width: '100%', display: 'flex' }}>
                            <div>
                                <img src={iconmission} alt='logo-mission.org'
                                    style={{ height: '28px', marginLeft: '30px' }} />

                            </div>
                            <div style={{ lineHeight: '25px', marginLeft: '20px' }}> <Link>Programming</Link> | <Link>Subscribe</Link></div>
                        </div>
                    </div>

                </AppBar>
                <div>

                    <div>
                        <img style={{
                            display: 'flex', flexDirection: 'column',
                            margin: '0 auto',
                            width: '80%',
                            marginTop: '30px'
                        }} src={gbrartikelMission} alt="gbr-artikelmision" />
                    </div>
                    <div>
                        <Link><p style={{
                            textAlign: 'center', marginTop: '5px', opacity: '0.5'
                        }}>Books</p></Link>
                    </div>
                </div>
                <div>

                    <div style={{ margin: '0 auto', width: '50%' }}>
                        <Typography variant="h5" style={{ textAlign: 'left' }}>
                            If You Only Read A Few Books In 2018, Read These.</Typography>
                    </div>
                    <div>
                        <div style={{
                            display: 'flex-block', flexDirection: 'column',
                            margin: '0 auto', width: '50%'
                        }}>
                            <Avatar style={{ float: 'left', width: '60px', height: '60px' }}
                                alt="Ted talk"
                                src="https://pbs.twimg.com/profile_images/877631054525472768/Xp5FAPD5_reasonably_small.jpg"
                            ></Avatar>
                            <p style={{ marginLeft: '70px', marginBottom: '50px' }}>Ryan Holiday
                                <Button
                                    size="small" variant="outlined" color="primary"
                                    style={{ marginLeft: '10px' }}><span style={{ fontSize: '10px' }}>Follow</span>
                                </Button><br></br><span style={{ fontSize: '12px', opacity: '0.5' }}>Jun 23 2018. 6 min read</span>
                                <span style={{ float: 'right', alignContent: 'center', marginBottom: '20px' }}>
                                    <Link><TwitterIcon></TwitterIcon></Link>
                                    <Link><FacebookIcon style={{ margin: '0 15px' }}></FacebookIcon></Link>
                                    <Link><BookmarkBorderIcon>

                                    </BookmarkBorderIcon>
                                    </Link>
                                </span>
                            </p>

                            <p className='textParagraf'>
                                If you’d liked <u>to be jerked around less</u>, provoked less, and <u>more productive and inwardly focused</u>, where should you start?
                            </p>
                            <p className='textParagraf'>
                                To me, the answer is obvious: by turning to wisdom. Below is a list of 21 books that will help lead you to a better, stronger 2018.
                            </p>
                            <p className='textParagraf'><strong>Deep Work: Rules for Focused Success in a Distracted World by Cal Newport</strong> Media consumption went way up in 2017. For <u>most of us</u>, that meant happiness and productivity went way down. The world is becoming noisier and will become more so every day. If you can’t cultivate the ability to have quiet, insightful, deeply focused periods of productive work, you’re going to get screwed. This is a book that explains <u>how to cultivate> and protect that skill</u> — the ability to do deep work. I strongly urge you to begin this practice in 2018— if you want to get anything done or perform your best.</p>
                            <p className='textParagraf'><strong>The Subtle Art of Not Giving a F*ck: A Counterintuitive Approach to Living a Good Life by Mark Manson</strong> To me, <u>practical philosophy has</u> always been the art knowing what to — and what not to — give a fuck about. That’s what Mark’s book is about. It’s not about apathy. It’s about cultivating indifference to things that don’t matter. Be careful, as Marcus Aurelius warns, not to give the little things more time and thought they deserved. Maybe looking back at this year reveals how much effort you’ve frittered away worrying about the trivial. If so, let 2018 be a year that you only devote energy to things that truly matter — get the important things right by ignoring the insignificant.</p>
                        </div>
                        <Follow>

                        </Follow>
                        <RelatedArticle1></RelatedArticle1>
                    </div>
                </div>
            </div >


        );
    }
}
