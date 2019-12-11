import React, { Component } from 'react';
import { Toolbar, Typography, Button, Link, Grid, Box, GridList } from '@material-ui/core';
import './../App.css';
import gmbIcon from './icon_medium.jpeg';
import gbrartikel_onezero1 from './gbrartikel_onezero1.jpeg';
import SearchIcon from '@material-ui/icons/Search';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import icononezero from './onezero.jpeg';
import ArticleCategoryPage from './ArtikelCategoryPage';

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
                    {artikelcategory.map(item => <ArticleCategoryPage
                        title={item.title}
                        subTitle={item.subTitle}
                        author={item.author}
                        infoDate={item.infoDate}
                        img={item.img}
                    />)}
                </div>
                {/* ========END CONTENT ========= */}
                <Grid container spacing={1}>
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
                </Grid>
            </div>
        );
    }
}
