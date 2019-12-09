import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import SearchIcon from '@material-ui/icons/Search';
import Button from '@material-ui/core/Button';
import gbratikelbsr from './gbrartikelbsr.jpeg';
import gbrtengah1 from './gbrtengah1.jpg';
import gbrtengah2 from './gbrtengah2.jpeg';
import gbrtengah3 from './gbrtengah3.jpeg';
import gbrkiri from './gbrkiri.jpeg';


const useStyles = makeStyles(theme => ({
    root: {
        textAlign: 'left',
    },
    grow: {
        flexGrow: 1,
        marginLeft: '15%',
    },
    title: {
        display: 'none',
        [theme.breakpoints.up('sm')]: {
            display: 'block',
        },

    },
    titleright: {
        marginRight: '15%',
        fontSize: '13px',
        alignItems: 'center'
    },
    navbarlink: {
        padding: '15px',
        textTransform: 'uppercase',
        fontSize: '13px',
        textDecoration: 'none',
        cursor: 'pointer',
    },
    populer: {
        textAlign: 'left'
        //float: 'left'
    },
    lipopuler: {
        listStyle: 'none',
        display: 'inline-flex',
    }
}));

export default function PrimarySearchAppBar() {
    const classes = useStyles();

    return (
        <div className={classes.grow}>
            <Toolbar>
                <Typography className={classes.title} variant="h5" noWrap>
                    Medium
                </Typography>
                <div className={classes.grow} /><SearchIcon style={{ height: '15px' }}></SearchIcon>
                <p className={classes.titleright}>Become a Member
                <span><Link to="#"> Sign In </Link></span>
                    <Button variant='outlined' color='primary'> Get Started</Button></p>
            </Toolbar>
            <Toolbar>
                <nav>
                    <Link className={classes.navbarlink} to="#">Home</Link>
                    <Link className={classes.navbarlink} to="#">Onezero</Link>
                    <Link className={classes.navbarlink} to="#">Elemntal</Link>
                    <Link className={classes.navbarlink} to="#">Gen</Link>
                    <Link className={classes.navbarlink} to="#">Zora</Link>
                    <Link className={classes.navbarlink} to="#">Forge</Link>
                    <Link className={classes.navbarlink} to="#">Human Parts</Link>
                    <Link className={classes.navbarlink} to="#">mrker</Link>
                    <Link className={classes.navbarlink} to="#">level</Link>
                    <Link className={classes.navbarlink} to="#">heated</Link>
                    <Link className={classes.navbarlink} to="#">modus</Link>
                    <Link className={classes.navbarlink} to="#">more</Link>
                </nav>
            </Toolbar>
            <div className={classes.root}>
                <Grid container spacing={3}>
                    <Grid item xs={4}>
                        <div style={{ marginTop: '13px' }}>
                            <img style={{
                                width: '95%',
                                height: '120px',

                            }}
                                src={gbratikelbsr} alt="gbr-artikel" />
                        </div>
                        {/*START DIV FOR TITLE*/}
                        <div style={{ textAlign: 'justify' }}>
                            <h3>The Joy of Begin an Untethered Woman</h3>
                            <p style={{ fontSize: '13px', opacity: '0.5' }}>On Sex, Solitude, and female friendship</p>
                        </div>
                        {/*END DIV FOR IMAGE*/}

                        {/*START DIV FOR DATE ETC*/}
                        <div style={{ textAlign: 'justify' }}>
                            <p style={{ fontSize: '13px', wordSpacing: '0px', }}>Anna Graham Hunter in Human Parts<br />
                                <span style={{ opacity: '0.5' }}>Feb 19, 2017. 7 min read</span></p>

                        </div>
                        {/*END DIV FOR DATE ETC*/}
                    </Grid>
                    <Grid item xs={4}>
                        <ul style={{ width: '100%', display: 'inline-flex', listStyle: 'none' }}>
                            <li style={{ width: '30%' }}>
                                <img style={{
                                    width: '100px',
                                    height: '110px',

                                }}
                                    src={gbrtengah1} alt="gbr" />
                            </li>
                            <li style={{ width: '70%', display: 'inline', listStyle: 'none', textAlign: 'justify' }}>
                                <h5 style={{ margin: '0' }}
                                >Hurt People Will Hurt People. But Healed People Heal People, Too.</h5>
                                <p style={{ fontSize: '13px', wordSpacing: '0px', }}>
                                    Courtney Christine in Human Parts<br />
                                    <span style={{ opacity: '0.5' }}>Feb 19, 2017. 7 min read</span></p>
                            </li>
                        </ul>
                        <ul style={{ width: '100%', marginTop: '0', display: 'inline-flex', listStyle: 'none' }}>
                            <li style={{ width: '30%' }}>
                                <img style={{
                                    width: '100px',
                                    height: '110px',

                                }}
                                    src={gbrtengah2} alt="gbr" />
                            </li>
                            <li style={{ width: '70%', display: 'inline', listStyle: 'none', textAlign: 'justify' }}>
                                <h5 style={{ margin: '0' }}
                                >Hurt People Will Hurt People. But Healed People Heal People, Too.</h5>
                                <p style={{ fontSize: '13px', wordSpacing: '0px', }}>
                                    Courtney Christine in Human Parts<br />
                                    <span style={{ opacity: '0.5' }}>Feb 19, 2017. 7 min read</span></p>
                            </li>
                        </ul>
                        <ul style={{ width: '100%', marginTop: '0', display: 'inline-flex', listStyle: 'none' }}>
                            <li style={{ width: '30%' }}>
                                <img style={{
                                    width: '100px',
                                    height: '110px',

                                }}
                                    src={gbrtengah3} alt="gbr" />
                            </li>
                            <li style={{ width: '70%', display: 'inline', listStyle: 'none', textAlign: 'justify' }}>
                                <h5 style={{ margin: '0' }}
                                >Hurt People Will Hurt People. But Healed People Heal People, Too.</h5>
                                <p style={{ fontSize: '13px', wordSpacing: '0px', }}>
                                    Courtney Christine in Human Parts<br />
                                    <span style={{ opacity: '0.5' }}>Feb 19, 2017. 7 min read</span></p>
                            </li>
                        </ul>
                    </Grid>

                    <Grid item xs={4}>
                        <img style={{
                            width: '75%',
                            height: '150px',
                            paddingTop: '15px'

                        }}
                            src={gbrkiri} alt="gbr" />
                        <div>
                            <h5 style={{ width: '75%', marginBottom: '0', textAlign: 'justify' }}>
                                900,000 Americans Tell Google They Want to Try, Buy, or Quit Heroin Every Year
                            </h5>
                            <p style={{ fontSize: '13px', opacity: '0.5' }}>On Sex, Solitude, and female friendship</p>
                        </div>
                    </Grid>
                </Grid>
            </div>
            <div>
                <Grid container spacing={2}>
                    <Grid item xs={4}>
                        <Typography className={classes.populer} variant="h5">
                            Populer on Medium

                        </Typography>
                        <hr />
                        <Grid container spacing={2}>
                            <Grid item sm={2}>
                                <h2 style={{ opacity: '0.4' }}>01</h2>
                            </Grid>
                            <Grid item sm={10} style={{ textAlign: 'justify' }}>
                                <div><h4>A Nude ‘Playboy’ Photo Has Been a Mainstay in Testing Tech for Decades</h4></div>
                                <div><span style={{ fontSize: '13px' }}> Corinne Purtill in OneZero</span>
                                    <span style={{ fontSize: '13px', opacity: '0.4', }}> Nov 26. 6 min read</span></div>

                            </Grid>
                            <Grid item sm={2}>
                                <h2 style={{ opacity: '0.4' }}>02</h2>
                            </Grid>
                            <Grid item sm={10} style={{ textAlign: 'justify' }}>
                                <div><h4>A Nude ‘Playboy’ Photo Has Been a Mainstay in Testing Tech for Decades</h4></div>
                                <div><span style={{ fontSize: '13px' }}> Corinne Purtill in OneZero</span>
                                    <span style={{ fontSize: '13px', opacity: '0.4', }}> Nov 26. 6 min read</span></div>

                            </Grid>
                            <Grid item sm={2}>
                                <h2 style={{ opacity: '0.4' }}>03</h2>
                            </Grid>
                            <Grid item sm={10} style={{ textAlign: 'justify' }}>
                                <div><h4>A Nude ‘Playboy’ Photo Has Been a Mainstay in Testing Tech for Decades</h4></div>
                                <div><span style={{ fontSize: '13px' }}> Corinne Purtill in OneZero</span>
                                    <span style={{ fontSize: '13px', opacity: '0.4', }}> Nov 26. 6 min read</span></div>

                            </Grid>
                            <Grid item sm={2}>
                                <h2 style={{ opacity: '0.4' }}>04</h2>
                            </Grid>
                            <Grid item sm={10} style={{ textAlign: 'justify' }}>
                                <div><h4>A Nude ‘Playboy’ Photo Has Been a Mainstay in Testing Tech for Decades</h4></div>
                                <div><span style={{ fontSize: '13px' }}> Corinne Purtill in OneZero</span>
                                    <span style={{ fontSize: '13px', opacity: '0.4', }}> Nov 26. 6 min read</span></div>

                            </Grid>
                            <Grid item sm={2}>
                                <h2 style={{ opacity: '0.4' }}>05</h2>
                            </Grid>
                            <Grid item sm={10} style={{ textAlign: 'justify' }}>
                                <div><h4>A Nude ‘Playboy’ Photo Has Been a Mainstay in Testing Tech for Decades</h4></div>
                                <div><span style={{ fontSize: '13px' }}> Corinne Purtill in OneZero</span>
                                    <span style={{ fontSize: '13px', opacity: '0.4', }}> Nov 26. 6 min read</span></div>

                            </Grid>
                        </Grid>


                    </Grid>
                    <Grid item xs={8}>
                        <Grid container spacing={2}>
                            <Grid item sm={8}>
                                <h3>Alexa Is My Problematic Fave</h3>
                                <span>The mysterious allure of the original Amazon Echo</span>
                            </Grid>
                            <Grid item sm={3}>
                                <img style={{
                                    width: '130px',
                                    height: '130px',

                                }}
                                    src={gbrtengah3} alt="gbr" />
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </div>
        </div >
    );
}
