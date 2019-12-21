import React, { Component } from 'react';
import { Toolbar, Typography, Button, Grid, AppBar, IconButton } from '@material-ui/core';
import './../App.css';
import gmbIcon from './assets/icon_medium.jpeg';
import gbrartikel_onezero2 from './assets/gbrartikel_onezero2.jpeg';
import icononezero from './assets/onezero.jpeg';
import SearchIcon from '@material-ui/icons/Search';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import ArticleCategoryPage from './ArtikelCategoryPage';
import ArtikelCategoryPageBawah from './ArtikelCategoryPageBawah';
import { Link } from 'react-router-dom';
import AccountCircle from '@material-ui/icons/AccountCircle';
import axios from 'axios';

const menuId = 'primary-search-account-menu';
const menulink = [
    {
        id: 1,
        name: 'About OneZero',
    },
    {
        id: 2,
        name: 'About Medium',
    },
    {
        id: 3,
        name: 'Terms',
    },
    {
        id: 4,
        name: 'Privacy',
    },
];
export default class CategoryPage extends Component {

    constructor(props) {
        super(props);
        //this.menuItems = Menu(listMenu, selected);
        this.state = {
            list: [],
            url: new URLSearchParams(window.location.search).get('id'),

        };
    }

    componentDidMount() {
        axios.get('http://localhost:4000/api/v1/category/' + this.state.url + '/articles').then(res => {
            // this.setState({categories: res.data})
            console.log(res)
            this.setState({ list: res.data })
        })
    }


    render() {
        return (
            <div className="AppMedium">
                {/* ========START TOPBAR AND HEDER ========= */}
                <AppBar color="white" position="static">
                    <Toolbar style={{ margin: '0 auto', width: '80%' }}>
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

                </AppBar>
                <Toolbar className='appcontent'>
                    <img style={{
                        margin: '40px 30px',
                        width: '250px',
                        height: '60px'
                    }} src={icononezero} alt="icon-onezero" />
                    <div>
                        <strong><p>
                            <Link className="text-url">The front lines of the future.</Link><br />
                            A Medium publication about tech and science.</p></strong>
                    </div>
                    <div className="grow">
                        <Button size="small" variant="outlined" color="secondary">Follow</Button>
                    </div>
                </Toolbar>
                {/* ========END TOPBAR AND HEDER ========= */}

                {/* ========START CONTENT ========= */}
                <div className='appcontent'>
                    {this.state.list.slice(0, 3).map(item => <ArticleCategoryPage
                        id={item.id}
                        title={item.title}
                        subTitle={item.content.substr(1, 200)}
                        author={item.authorId.fullname}
                        infoDate={item.createdAt}
                        img={item.image}
                    />)}
                </div>
                {/* ========END CONTENT ========= */}
                <Grid container spacing={1} style={{ width: '80%', margin: '0 auto' }} >
                    <Grid item lg={12} style={{ backgroundColor: '#f9fa9b', margin: '50px 0' }}>
                        <div>
                            <div style={{ margin: '20px 300px ' }}>
                                <Typography variant="h5" component="h3">
                                    "We have a few new things to share."
                            </Typography>
                                <p style={{ margin: '0' }}>-Damon Beres</p>

                            </div>
                            <div style={{ margin: '20px 300px ' }}>

                                <Typography variant="h6">Welcome to a Refreshed OneZerohy</Typography >
                                <p style={{ margin: '0' }}>Dec 3 . 2 min read</p>
                            </div>
                        </div>
                    </Grid>
                </Grid >

                <div style={{ width: '50%', margin: '0 auto' }} className='appcontent'>
                    {this.state.list.map(item =>
                        <ArtikelCategoryPageBawah
                            title={item.title}
                            subTitle={item.content.substring(0, 100) + "..."}
                            author={item.authorId.fullname}
                            infoDate={item.createdAt}
                            img={item.image}
                        />)}
                    <hr></hr>
                </div>
                <hr></hr>
                <div style={{ textAlign: 'right', margin: '30px 0 30px' }} className='appcontent'>
                    {menulink.map(item =>
                        <Link to={item.href} style={{ padding: '0 15px', opacity: '0.5' }}>{item.name}</Link>
                    )}

                </div>
            </div>
        );
    }
}
