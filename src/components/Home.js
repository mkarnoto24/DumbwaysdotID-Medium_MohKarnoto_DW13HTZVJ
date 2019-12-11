import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import SearchIcon from '@material-ui/icons/Search';
import Button from '@material-ui/core/Button';
import gbratikelbsr from './gbrartikelbsr.jpeg';
import Articles from './Articles';
import gbrtengah2 from './gbrtengah2.jpeg';
import gbrtengah3 from './gbrtengah3.jpeg';
import gbrkiri from './gbrkiri.jpeg';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import gmbrkiri from './kiri.jpeg';
import gmbrkanan from './kanan.jpeg';
import TextField from '@material-ui/core/TextField';
import './style.css';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';

const useStyles = makeStyles(theme => ({
    modal: {
        margin: '0',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    paper: {
        backgroundColor: theme.palette.background.paper,
        border: '1px solid #000000',
        width: 800,
        height: 550,
        boxShadow: theme.shadows[5],
        color: theme.palette.text.secondary,
        display: 'flex'
    },
    left: {
        width: 200,
    },
    centermodal: {
        width: 400,
        textAlign: 'center'
    },
    right: {
        width: 200,
    },
    closeButton: {

        float: 'right',
        position: 'relative',
        right: theme.spacing(),
        top: theme.spacing(),
        color: theme.palette.grey[500],
    },
    root: {
        textAlign: 'center',
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
    },
    btn: {
        color: 'white',
        backgroundColor: 'black',
        marginTop: '60px'
    },
    txtkecil: {
        fontSize: '15px'
    },
}));

const menus = [
    {
        id: 1,
        name: "Home"
    },
    {
        id: 2,
        name: "Onezero"
    },
    {
        id: 3,
        name: "Elemental"
    },
    {
        id: 4,
        name: "Gen"
    },
    {
        id: 5,
        name: "Zora"
    },
    {
        id: 6,
        name: "forge"
    },
    {
        id: 7,
        name: "human"
    },
    {
        id: 8,
        name: "marker"
    },
    {
        id: 9,
        name: "level"
    },
    {
        id: 10,
        name: "heated"
    },
    {
        id: 11,
        name: "modus"
    },
    {
        id: 11,
        name: "more"
    },
];
const articles = [
    {
        id: 1,
        title: 'Hurt People Will Hurt People. But Healed People Heal People, Too.',
        infoDate: 'Feb 19, 2017. 7 min read'
    }]

export default function Home() {
    const [open, setOpen] = React.useState(false);
    const [openlogin, setOpenLogin] = React.useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleOpenLogin = () => {
        setOpenLogin(true);
    }
    const handleClose = () => {
        setOpen(false);
    };
    const handleCloseLogin = () => {
        setOpenLogin(false);
    };

    const classes = useStyles();

    return (
        <div className={classes.grow}>
            {/** START HEADER */}
            <Toolbar>
                <Typography className={classes.title} variant="h5" noWrap>
                    Medium
                </Typography>
                <div className={classes.grow} /><SearchIcon style={{ height: '15px' }}></SearchIcon>
                <p className={classes.titleright}>Become a Member
                <span><Link to="#" onClick={handleOpenLogin} style={{
                        cursor: 'pointer',
                    }}> Sign In </Link></span>
                    <Button variant='outlined' color='primary' onClick={handleOpen}> Get Started</Button></p>
            </Toolbar>
            {/** END HEADER */}

            {/** START NAVBAR */}
            <Toolbar>
                <nav>
                    {
                        menus.map(item => <Link className={classes.navbarlink} to="#">{item.name}</Link>)
                    }
                </nav>
            </Toolbar>
            {/** ====================END NAVBAR========================== */}

            {/** ====================START TOP ARTICLE ========================== */}
            <div className={classes.root}>
                {/** ====================START TOPRIGHT ARTICLE ========================== */}
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
                        {articles.map(item =>
                            <Articles
                                title={item.title}
                                subTitle={item.subTitle}
                                infoDate={item.infoDate} />
                        )}

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
                    {/** ====================END TOPRIGHT ARTICLE ========================== */}

                    {/** ====================START TOPLEFT ARTICLE ========================== */}
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
                    {/** ====================END TOPLEFT ARTICLE ========================== */}
                </Grid>
            </div>
            {/** ====================END TOP ARTICLE ========================== */}

            {/** ====================START MAIN ARTICLE ========================== */}
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
                                <span style={{ fontSize: '13px' }}> Corinne Purtill in OneZero</span><br />
                                <span style={{ fontSize: '13px', opacity: '0.4', }}> Nov 26. 6 min read</span>

                            </Grid>
                            <Grid item sm={2}>
                                <h2 style={{ opacity: '0.4' }}>02</h2>
                            </Grid>
                            <Grid item sm={10} style={{ textAlign: 'justify' }}>
                                <div><h4>A Nude ‘Playboy’ Photo Has Been a Mainstay in Testing Tech for Decades</h4></div>
                                <div><span style={{ fontSize: '13px' }}> Corinne Purtill in OneZero</span><br />
                                    <span style={{ fontSize: '13px', opacity: '0.4', }}> Nov 26. 6 min read</span></div>

                            </Grid>
                            <Grid item sm={2}>
                                <h2 style={{ opacity: '0.4' }}>03</h2>
                            </Grid>
                            <Grid item sm={10} style={{ textAlign: 'justify' }}>
                                <div><h4>A Nude ‘Playboy’ Photo Has Been a Mainstay in Testing Tech for Decades</h4></div>
                                <div><span style={{ fontSize: '13px' }}> Corinne Purtill in OneZero</span><br />
                                    <span style={{ fontSize: '13px', opacity: '0.4', }}> Nov 26. 6 min read</span></div>

                            </Grid>
                            <Grid item sm={2}>
                                <h2 style={{ opacity: '0.4' }}>04</h2>
                            </Grid>
                            <Grid item sm={10} style={{ textAlign: 'justify' }}>
                                <div><h4>A Nude ‘Playboy’ Photo Has Been a Mainstay in Testing Tech for Decades</h4></div>
                                <div><span style={{ fontSize: '13px' }}> Corinne Purtill in OneZero</span><br />
                                    <span style={{ fontSize: '13px', opacity: '0.4', }}> Nov 26. 6 min read</span></div>

                            </Grid>
                            <Grid item sm={2}>
                                <h2 style={{ opacity: '0.4' }}>05</h2>
                            </Grid>
                            <Grid item sm={10} style={{ textAlign: 'justify' }}>
                                <div><h4>A Nude ‘Playboy’ Photo Has Been a Mainstay in Testing Tech for Decades</h4></div>
                                <div><span style={{ fontSize: '13px' }}> Corinne Purtill in OneZero</span><br />
                                    <span style={{ fontSize: '13px', opacity: '0.4', }}> Nov 26. 6 min read</span></div>

                            </Grid>

                        </Grid>
                        <hr style={{ opacity: '0.3' }} />
                        <Grid item sm={12}>
                            <div style={{ textAlign: 'justify' }}>
                                <Link style={{ fontSize: '13px', opacity: '0.5', float: 'left', margin: '8px' }} to="#">Help</Link>
                                <Link style={{ fontSize: '13px', opacity: '0.5', float: 'left', margin: '8px' }} to="#">Status</Link>
                                <Link style={{ fontSize: '13px', opacity: '0.5', float: 'left', margin: '8px' }} to="#">Writer</Link>
                                <Link style={{ fontSize: '13px', opacity: '0.5', float: 'left', margin: '8px' }} to="#">Blog</Link>
                                <Link style={{ fontSize: '13px', opacity: '0.5', float: 'left', margin: '8px' }} to="#">Careers</Link>
                                <Link style={{ fontSize: '13px', opacity: '0.5', float: 'left', margin: '8px' }} to="#">Pivacy</Link>
                                <Link style={{ fontSize: '13px', opacity: '0.5', float: 'left', margin: '8px' }} to="#">Terms</Link>
                                <Link style={{ fontSize: '13px', opacity: '0.5', float: 'left', margin: '8px' }} to="#">About</Link>
                            </div>
                        </Grid>

                    </Grid>
                    <Grid item xs={1}>

                    </Grid>
                    <Grid item xs={7} style={{ textAlign: 'justify' }}>
                        <Grid container spacing={2}>
                            <Grid item sm={8}>
                                <div>
                                    <span><h3 style={{ margin: '0' }}>Alexa Is My Problematic Fave</h3></span>
                                    <span style={{ fontSize: '13px', opacity: '0.4', }}>The mysterious allure of the original Amazon Echo</span><p></p>
                                </div>
                                <div>
                                    <span style={{ fontSize: '13px', }}>Megan Morrone in OneZero</span><br></br>
                                    <span style={{ fontSize: '13px', opacity: '0.4', }}>Dec 9. 6 min read</span>
                                </div>
                            </Grid>
                            <Grid item sm={3}>
                                <img style={{
                                    width: '130px',
                                    height: '110px',

                                }}
                                    src={gbrtengah3} alt="gbr" />
                            </Grid>
                        </Grid>
                        <Grid container spacing={2}>
                            <Grid item sm={8}>
                                <div>
                                    <span><h3 style={{ margin: '0' }}>Alexa Is My Problematic Fave</h3></span>
                                    <span style={{ fontSize: '13px', opacity: '0.4', }}>The mysterious allure of the original Amazon Echo</span><p></p>
                                </div>
                                <div>
                                    <span style={{ fontSize: '13px', }}>Megan Morrone in OneZero</span><br></br>
                                    <span style={{ fontSize: '13px', opacity: '0.4', }}>Dec 9. 6 min read</span>
                                </div>
                            </Grid>
                            <Grid item sm={3}>
                                <img style={{
                                    width: '130px',
                                    height: '110px',

                                }}
                                    src={gbrtengah3} alt="gbr" />
                            </Grid>
                        </Grid>
                        <Grid container spacing={2}>
                            <Grid item sm={8}>
                                <div>
                                    <span><h3 style={{ margin: '0' }}>Alexa Is My Problematic Fave</h3></span>
                                    <span style={{ fontSize: '13px', opacity: '0.4', }}>The mysterious allure of the original Amazon Echo</span><p></p>
                                </div>
                                <div>
                                    <span style={{ fontSize: '13px', }}>Megan Morrone in OneZero</span><br></br>
                                    <span style={{ fontSize: '13px', opacity: '0.4', }}>Dec 9. 6 min read</span>
                                </div>
                            </Grid>
                            <Grid item sm={3}>
                                <img style={{
                                    width: '130px',
                                    height: '110px',

                                }}
                                    src={gbrtengah3} alt="gbr" />
                            </Grid>
                        </Grid>
                        <Grid container spacing={2}>
                            <Grid item sm={8}>
                                <div>
                                    <span><h3 style={{ margin: '0' }}>Alexa Is My Problematic Fave</h3></span>
                                    <span style={{ fontSize: '13px', opacity: '0.4', }}>The mysterious allure of the original Amazon Echo</span><p></p>
                                </div>
                                <div>
                                    <span style={{ fontSize: '13px', }}>Megan Morrone in OneZero</span><br></br>
                                    <span style={{ fontSize: '13px', opacity: '0.4', }}>Dec 9. 6 min read</span>
                                </div>
                            </Grid>
                            <Grid item sm={3}>
                                <img style={{
                                    width: '130px',
                                    height: '110px',

                                }}
                                    src={gbrtengah3} alt="gbr" />
                            </Grid>
                        </Grid>
                        <Grid container spacing={2}>
                            <Grid item sm={8}>
                                <div>
                                    <span><h3 style={{ margin: '0' }}>Alexa Is My Problematic Fave</h3></span>
                                    <span style={{ fontSize: '13px', opacity: '0.4', }}>The mysterious allure of the original Amazon Echo</span><p></p>
                                </div>
                                <div>
                                    <span style={{ fontSize: '13px', }}>Megan Morrone in OneZero</span><br></br>
                                    <span style={{ fontSize: '13px', opacity: '0.4', }}>Dec 9. 6 min read</span>
                                </div>
                            </Grid>
                            <Grid item sm={3}>
                                <img style={{
                                    width: '130px',
                                    height: '110px',

                                }}
                                    src={gbrtengah3} alt="gbr" />
                            </Grid>
                        </Grid>
                        <Grid container spacing={2}>
                            <Grid item sm={8}>
                                <div>
                                    <span><h3 style={{ margin: '0' }}>Alexa Is My Problematic Fave</h3></span>
                                    <span style={{ fontSize: '13px', opacity: '0.4', }}>The mysterious allure of the original Amazon Echo</span><p></p>
                                </div>
                                <div>
                                    <span style={{ fontSize: '13px', }}>Megan Morrone in OneZero</span><br></br>
                                    <span style={{ fontSize: '13px', opacity: '0.4', }}>Dec 9. 6 min read</span>
                                </div>
                            </Grid>
                            <Grid item sm={3}>
                                <img style={{
                                    width: '130px',
                                    height: '110px',

                                }}
                                    src={gbrtengah3} alt="gbr" />
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </div>
            {/** ====================END MAIN ARTICLE ========================== */}
            {/** ====================START REGISTER MODAL ========================== */}
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
                            <div className={classes.left}>
                                <img src={gmbrkiri} alt="logo" style={{ height: '90%' }} />
                            </div>
                            <div className={classes.centermodal}>
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
                                <p>Already have an account? <Link onClick={handleOpenLogin} style={{ cursor: 'pointer' }}>
                                    Sign In</Link></p>
                                <p>
                                    To make Medium work, we log user data and share it with service providers. Click “Sign Up” above to accept Medium’s <Link to="#">Terms of Service</Link> & <Link to="#">Privacy Policy</Link>.
                            </p>
                            </div>
                            <div className={classes.right}>
                                <IconButton aria-label="close" className={classes.closeButton} onClick={handleClose}>
                                    <CloseIcon />
                                </IconButton>
                                <img src={gmbrkanan} alt="logo" style={{ width: '100%', posiotion: 'static' }} />

                            </div>

                        </div>

                    </div>
                </Fade>
            </Modal>
            {/** ====================END REGISTER MODAL ========================== */}

            {/** ====================START MODAL LOGIN ========================== */}
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                className={classes.modal}
                open={openlogin}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={openlogin}>
                    <div className={classes.paper}>
                        <div className={classes.left}>

                        </div>
                        <div className={classes.centermodal}>

                            <h2 style={{ paddingBottom: '1px' }} id="transition-modal-title">Sign In with email</h2>

                            <p id="transition-modal-description" className={classes.txtkecil}>
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
                                <Button className={classes.btn}><span className={classes.bntspan}>Continue</span></Button>
                            </form>
                            <p>
                                <Link to="#" className={classes.signoption}><span><ArrowBackIosIcon fontSize="small" />All Sign In option</span></Link>
                            </p>
                        </div>
                        <div className={classes.right}>
                            <IconButton aria-label="close" className={classes.closeButton} onClick={handleCloseLogin}>
                                <CloseIcon />
                            </IconButton>
                        </div>
                    </div>
                </Fade>
            </Modal>
            {/** ====================END MODAL LOGIN ========================== */}
        </div >
    );
}