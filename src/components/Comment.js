import React, { Component } from 'react';
import { Grid } from '@material-ui/core';
import Header from './layout/Header';
import './layout/layout.css';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
//import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
//import MoreVertIcon from '@material-ui/icons/MoreVert';
import CardActions from '@material-ui/core/CardActions';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import iconClaps from './layout/icon_clap.png';
import BookmarkBorderSharpIcon from '@material-ui/icons/BookmarkBorderSharp';

export default class Comment extends Component {
    render() {
        return (
            <div>
                <div style={{ background: 'red' }}>
                    <Header />
                    <div className="header">
                        <div className="resume-comment">
                            <div>
                                <strong><p className="text-resume">Showing Responses for :</p></strong>
                            </div>
                            <div className="box-resume">
                                <Grid container={1} spacing={1}>
                                    <Grid item xs={12}>
                                        <Grid container={1} spacing={2}>
                                            <Grid item sm={10}><p className="title-grid">How To Digest Books Above Your “Level” And Increase Your Intelligence</p></Grid>
                                            <Grid item sm={2} ><p className="title-grid"><span>81K</span><span>329</span></p></Grid>
                                        </Grid>
                                    </Grid>
                                </Grid>
                                <p className="title-text">Ryan Holiday</p>
                            </div>
                            <div className="comment-card">
                                <Card className="card">
                                    <CardHeader
                                        avatar={
                                            <Avatar aria-label="recipe" className="{classes.avatar}">
                                                R</Avatar>
                                        }
                                        title={
                                            <strong><span style={{ color: '#42e6a4', fontSize: '13px' }}>Shrimp and Chorizo Paella</span></strong>
                                        }
                                        subheader={
                                            <span style={{ opacity: '0.8', fontSize: '12px' }}>Jan 24, 2018 . 4 min read </span>
                                        }
                                        subheaderTypographyProps={{ fontSize: '30px' }}
                                    />
                                    <CardMedia
                                        className="{classes.media}"
                                        image="/static/images/cards/paella.jpg"
                                        title="Paella dish"
                                    />
                                    <CardContent>
                                        <p style={{ textAlign: 'justify', marginTop: '0', fontSize: '14px' }}>I would say Ryan is trying to talk about reading in the context of this modern world where everything is so hectic and over-practical that we need to collect all pieces of “intelligence” here and there to survive.</p>
                                        <p style={{ textAlign: 'justify', marginTop: '0', fontSize: '14px' }}>
                                            It’s not wrong, but I surely think Ryan Holiday should also cover the part in which reading books will enrich...
                                    </p>
                                        <span style={{ opacity: '0.5', fontSize: '13px' }}>
                                            Read More
                                    </span>
                                        <div>
                                            <div></div>
                                        </div>
                                    </CardContent>
                                    <div>
                                        <div style={{ float: 'left', display: 'flex' }}>
                                            <div style={{ borderRadius: '50%', opacity: '0.8', margin: '12px 12px' }}>
                                                <img style={{ width: '30px', height: '30px' }} src={iconClaps} alt="icon-clap" />
                                            </div>
                                            <div style={{ marginTop: '14px' }}>
                                                <span style={{ fontSize: '13px', opacity: '0.5', marginLeft: '-5px', alignContent: 'center' }}> 65</span>
                                            </div>
                                        </div>
                                        <div style={{ float: 'right', display: 'flex' }}>

                                            <div style={{ marginTop: '14px' }}>
                                                <span style={{ fontSize: '13px', opacity: '0.5', alignContent: 'center' }}> 65 Responses</span>
                                            </div>
                                            <div style={{ margin: '15px 15px' }}>
                                                <BookmarkBorderSharpIcon></BookmarkBorderSharpIcon>
                                                <ExpandMoreIcon></ExpandMoreIcon>
                                            </div>
                                        </div>
                                        {/* <div style={{ float: 'right', margin: '20px 10px', display: 'flex' }}>

                                            <div>
                                                <span style={{ paddingBottom: '400px' }}>24 Responses</span>
                                                
                                            </div>
                                        </div> */}
                                    </div>
                                </Card>
                            </div>
                        </div>

                    </div>
                </div>
            </div >
        );
    }
}
