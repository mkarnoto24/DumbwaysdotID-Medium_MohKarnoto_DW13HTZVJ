import React, { Component } from "react";
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import { Link } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import SearchIcon from '@material-ui/icons/Search';
import Button from '@material-ui/core/Button';
import gbratikelbsr from './assets/gbrartikelbsr.jpeg';
import Articles from './Articles';
import gbrtengah1 from './assets/gbrtengah1.jpg';
import gbrtengah2 from './assets/gbrtengah2.jpeg';
import gbrtengah3 from './assets/gbrtengah3.jpeg';
import gbrkiri from './assets/gbrkiri.jpeg';
import Category from './Category';
import ArticleKanan from './ArticleKanan';
import AccountCircle from '@material-ui/icons/AccountCircle';
import IconButton from '@material-ui/core/IconButton';
import axios from "axios";
import Moment from 'react-moment';
const menuId = 'primary-search-account-menu';

const classes = {
    grow: {
        flexGrow: 1,
    },
    title: {
        display: 'flex-box',
    },
    titleright: {
        fontSize: '13px',
    },
    populer: {
        textAlign: 'left'
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
    }
}

//link bawah
const linkbawah = [
    {
        id: 1,
        name: 'Help'
    },
    {
        id: 2,
        name: 'Status'
    },
    {
        id: 3,
        name: 'Writer'
    },
    {
        id: 4,
        name: 'Blog'
    },
    {
        id: 5,
        name: 'Careers'
    },
    {
        id: 6,
        name: 'Privacy'
    },
    {
        id: 7,
        name: 'Terms'
    },
    {
        id: 8,
        name: 'About'
    },
];


// const artikel atas tengah
const articles = [
    {
        id: 1,
        imge: gbrtengah1,
        title: 'Hurt People Will Hurt People. But Healed People Heal People, Too.',
        subTitle: ' Courtney Christine in Human Parts',
        infoDate: 'Feb 19, 2017. 7 min read',
        href: '/artikeldetail/1'
    },
    {
        id: 2,
        imge: gbrtengah2,
        title: 'Hurt People Will Hurt People. But Healed People Heal People, Too.',
        subTitle: ' Courtney Christine in Human Parts',
        infoDate: 'Feb 19, 2017. 7 min read',
        href: '/ArtikelDetail/2'
    },
    {
        id: 3,
        imge: gbrtengah3,
        title: 'Hurt People Will Hurt People. But Healed People Heal People, Too.',
        subTitle: ' Courtney Christine in Human Parts',
        infoDate: 'Feb 19, 2017. 7 min read',
        href: '/ArtikelDetail/3'
    }
];
export default class Home extends Component {
    constructor(props) {
        super(props);
        //this.menuItems = Menu(listMenu, selected);
        this.state = {
            no: 1,
            list: [],
            populer: []
        };
    }

    componentDidMount() {
        axios.get(`http://localhost:4000/api/v1/articles`).then(res => {
            // this.setState({categories: res.data})
            console.log(res)
            this.setState({ list: res.data })
        })

        axios.get(`http://localhost:4000/api/v1/articles/:populer`).then(res => {
            // this.setState({categories: res.data})
            console.log(res)
            this.setState({ populer: res.data })
        })
    }
    render() {
        return (
            <div >
                {/** START HEADER */}
                <Toolbar >
                    <Typography variant="h5" style={{ marginLeft: '-25px' }}>
                        Medium
                </Typography>
                    <SearchIcon style={{ height: '18px', marginLeft: '486px' }}></SearchIcon>
                    <p className={classes.titleright}><Link className="text-url" to='#'>Become a Member</Link>
                        <span><Link className="text-url" to="/login" style={{
                            cursor: 'pointer', margin: '0 8px'
                        }}> Sign In </Link></span>
                        <Button variant='outlined' href="/register" color='primary'>
                            <span style={{ fontSize: '12px' }}>Get Started</span>
                        </Button></p>
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
                {/** END HEADER */}

                {/** START NAVBAR */}

                <Category></Category>
                {/** ====================END NAVBAR========================== */}

                {/** ====================START TOP ARTICLE ========================== */}
                <div>
                    {/** ====================START TOPLEFT ARTICLE ========================== */}
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
                                    img={item.imge}
                                    title={item.title}
                                    subTitle={item.subTitle}
                                    infoDate={item.infoDate}
                                    href={item.href} />
                            )}
                        </Grid>
                        <Grid item xs={1}></Grid>
                        {/** ====================END TOPLEFT ARTICLE ========================== */}

                        {/** ====================START TOPRIGHT ARTICLE ========================== */}
                        <Grid item xs={3}>
                            <img style={{
                                width: '100%',
                                height: '150px',
                                paddingTop: '15px'

                            }}
                                src={gbrkiri} alt="gbr" />
                            <div>
                                <h5 style={{ marginBottom: '0', textAlign: 'justify' }}>
                                    900,000 Americans Tell Google They Want to Try, Buy, or Quit Heroin Every Year
                            </h5>
                                <p style={{ fontSize: '13px', opacity: '0.5' }}>On Sex, Solitude, and female friendship</p>
                            </div>
                        </Grid>
                        {/** ====================END TOPRIGHT ARTICLE ========================== */}
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

                            {
                                this.state.populer.map(item =>
                                    <div>
                                        <Grid container spacing={2}>
                                            <Grid item sm={2}>
                                                <h2 style={{ opacity: '0.4' }}>{this.state.no++}

                                                </h2>
                                            </Grid>
                                            <Grid item sm={10} style={{ textAlign: 'justify' }}>
                                                <div><h4>{item.title}</h4></div>
                                                <span style={{ fontSize: '13px' }}> {item.content.substring(0, 80) + "..."}</span><br />
                                                <span
                                                    style={{ fontSize: '13px', opacity: '0.4', }}>
                                                    <Moment>{item.createdAt}</Moment>
                                                </span>
                                            </Grid>
                                        </Grid>
                                    </div>)}
                            <hr style={{ opacity: '0.3' }} />
                            {/* ====== START MENU LINK BAWAH==== */}
                            <Grid item sm={12}>
                                <div style={{ textAlign: 'justify' }}>
                                    {
                                        linkbawah.map(item =>
                                            <Link className="text-url" style={{
                                                fontSize: '13px',
                                                opacity: '0.8', float: 'left', margin: '8px'
                                            }} to="#">{item.name}</Link>)
                                    }


                                </div>
                            </Grid>
                            {/* ====== START MENU LINK BAWAH==== */}

                        </Grid>
                        <Grid item xs={1}>

                        </Grid>
                        <Grid item xs={7} style={{ textAlign: 'justify' }}>
                            {this.state.list.map(item =>
                                <ArticleKanan
                                    url={"id/" + item.id}
                                    title={item.title}
                                    subTitle={item.content.substr(0, 80) + "..."}
                                    author={item.authorId.fullname}
                                    infoDate={item.createdAt}
                                    img={item.image}
                                />)}
                        </Grid>
                    </Grid>
                </div>
                {/** ====================END MAIN ARTICLE ========================== */}
            </div >
        );
    }

}