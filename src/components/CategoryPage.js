import React, { Component } from 'react';
import { Toolbar, Typography, Button, Grid } from '@material-ui/core';
import './../App.css';
import gmbIcon from './../assets/icon_medium.jpeg';
import gbrartikel_onezero1 from './../assets/gbrartikel_onezero1.jpeg';
import gbrartikel_onezero2 from './../assets/gbrartikel_onezero2.jpeg';
import SearchIcon from '@material-ui/icons/Search';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import icononezero from './../assets/onezero.jpeg';
import ArticleCategoryPage from './ArtikelCategoryPage';
import ArtikelCategoryPageBawah from './ArtikelCategoryPageBawah';
import { Link } from 'react-router-dom';

const artikelcategorybawah = [
    {
        id: 1,
        img: gbrartikel_onezero2,
        title: 'The Case for Removing All Politicians From Twitter',
        subTitle: 'Political omnipresence has gone too far',
        author: 'Martha Pskowski',
        infoDate: 'Dec 10. 24 min read'

    },
    {
        id: 2,
        img: gbrartikel_onezero2,
        title: 'The Case for Removing All Politicians From Twitter',
        subTitle: 'Political omnipresence has gone too far',
        author: 'Martha Pskowski',
        infoDate: 'Dec 10. 24 min read'

    },
    {
        id: 3,
        img: gbrartikel_onezero2,
        title: 'The Case for Removing All Politicians From Twitter',
        subTitle: 'Political omnipresence has gone too far',
        author: 'Martha Pskowski',
        infoDate: 'Dec 10. 24 min read'

    },
    {
        id: 4,
        img: gbrartikel_onezero2,
        title: 'The Case for Removing All Politicians From Twitter',
        subTitle: 'Political omnipresence has gone too far',
        author: 'Martha Pskowski',
        infoDate: 'Dec 10. 24 min read'

    },
    {
        id: 5,
        img: gbrartikel_onezero2,
        title: 'The Case for Removing All Politicians From Twitter',
        subTitle: 'Political omnipresence has gone too far',
        author: 'Martha Pskowski',
        infoDate: 'Dec 10. 24 min read'

    },
    {
        id: 6,
        img: gbrartikel_onezero2,
        title: 'The Case for Removing All Politicians From Twitter',
        subTitle: 'Political omnipresence has gone too far',
        author: 'Martha Pskowski',
        infoDate: 'Dec 10. 24 min read'

    },
    {
        id: 7,
        img: gbrartikel_onezero2,
        title: 'The Case for Removing All Politicians From Twitter',
        subTitle: 'Political omnipresence has gone too far',
        author: 'Martha Pskowski',
        infoDate: 'Dec 10. 24 min read'

    },
    {
        id: 8,
        img: gbrartikel_onezero2,
        title: 'The Case for Removing All Politicians From Twitter',
        subTitle: 'Political omnipresence has gone too far',
        author: 'Martha Pskowski',
        infoDate: 'Dec 10. 24 min read',

    },
    {
        id: 9,
        img: gbrartikel_onezero2,
        title: 'The Case for Removing All Politicians From Twitter',
        subTitle: 'Political omnipresence has gone too far',
        author: 'Martha Pskowski',
        infoDate: 'Dec 10. 24 min read'

    },
    {
        id: 10,
        img: gbrartikel_onezero2,
        title: 'The Case for Removing All Politicians From Twitter',
        subTitle: 'Political omnipresence has gone too far',
        author: 'Martha Pskowski',
        infoDate: 'Dec 10. 24 min read'

    },
    {
        id: 11,
        img: gbrartikel_onezero2,
        title: 'The Case for Removing All Politicians From Twitter',
        subTitle: 'Political omnipresence has gone too far',
        author: 'Martha Pskowski',
        infoDate: 'Dec 10. 24 min read'

    },
    {
        id: 12,
        img: gbrartikel_onezero2,
        title: 'The Case for Removing All Politicians From Twitter',
        subTitle: 'Political omnipresence has gone too far',
        author: 'Martha Pskowski',
        infoDate: 'Dec 10. 24 min read'

    },
    {
        id: 13,
        img: gbrartikel_onezero2,
        title: 'The Case for Removing All Politicians From Twitter',
        subTitle: 'Political omnipresence has gone too far',
        author: 'Martha Pskowski',
        infoDate: 'Dec 10. 24 min read'

    },


];
// 
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
const artikelcategory = [
    {
        id: 1,
        img: gbrartikel_onezero1,
        title: 'The Influencer and the Hit Man',
        subTitle: 'How a years-long domain name feud ended in a bloody shootout',
        author: 'Ian Frisch',
        infoDate: 'Dec 10. 24 min read'

    },
    {
        id: 2,
        img: gbrartikel_onezero1,
        title: 'The Influencer and the Hit Man',
        subTitle: 'How a years-long domain name feud ended in a bloody shootout',
        author: 'Ian Frisch',
        infoDate: 'Dec 10. 24 min read'

    },

];

export default class CategoryPage extends Component {
    render() {
        return (
            <div className="AppMedium">
                {/* ========START TOPBAR AND HEDER ========= */}
                <Toolbar style={{ boxShadow: '5px 5px 5px grey' }}>
                    <Link to="/" ><img src={gmbIcon} alt="icon-medium" /></Link>
                    <div className="grow">
                        <SearchIcon style={{ margin: '0 15px' }}></SearchIcon>
                        <NotificationsNoneIcon style={{ margin: '0 15px' }} />
                        <Button style={{ marginLeft: '15px' }} variant="outlined" color="primary">Upgrade</Button>
                    </div>
                </Toolbar>
                <Toolbar className='appcontent'>
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
                <div className='appcontent'>
                    {artikelcategory.map(item => <ArticleCategoryPage
                        title={item.title}
                        subTitle={item.subTitle}
                        author={item.author}
                        infoDate={item.infoDate}
                        img={item.img}
                    />)}
                </div>
                {/* ========END CONTENT ========= */}
                <Grid container spacing={1} style={{ width: '90%', margin: '0 auto' }} >
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
                    {artikelcategorybawah.map(item =>
                        <ArtikelCategoryPageBawah
                            title={item.title}
                            subTitle={item.subTitle}
                            author={item.author}
                            infoDate={item.infoDate}
                            img={item.img}
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
