import React, { Component } from 'react'
import { Typography, Button, Avatar, IconButton } from '@material-ui/core'
import Grid from '@material-ui/core/Grid';
import TwitterIcon from '@material-ui/icons/Twitter';
import ButtonAppBar from '../../components/Header'
import TabArticlePerson from './TabArticle'

const classes = {
    following: {
        margin: '0 auto',
        display: 'flex'
    }
}

class ArticlePerson extends Component {
    render() {
        return (

            <div>
                <ButtonAppBar />

                <div style={{ margin: '0 auto', width: '50%', padding: "60px 150px 0 150px" }}>
                    <Grid container={1} spacing={2} justify="space-between" alignItems="center" style={{}}>

                        <Grid item xs={7} style={{ marginLeft: '30px' }}>
                            <div style={{ display: 'flex' }}>
                                <Typography variant="h5">
                                    Ryan Holiday
                                </Typography>
                                <Button variant="outlined" size="small" style={{ marginLeft: '15px' }}>
                                    <span style={{ fontSize: '12px' }}>Follow</span>
                                </Button>

                            </div>
                            <p style={{ marginTop: '2px', fontSize: '14px' }}>BestSelling of 'Conspiracy', 'Ego is the Enemy' 'The Obstaicle is The way' http://amzn.to/24q/KRWR</p>
                            <div className={classes.following}>
                                <div >
                                    <Typography>
                                        <span style={{ fontSize: '13px', opacity: '0.8' }}>230 Following 10 Followers</span>
                                        <IconButton >
                                            <TwitterIcon style={{ fontSize: '20px' }}></TwitterIcon>
                                        </IconButton>

                                    </Typography>
                                </div>

                            </div>

                        </Grid>
                        <Grid item xs={4}>
                            <Avatar
                                src="#"
                                style={{ height: 120, width: 120, float: 'right', marginRight: '20px' }}></Avatar>
                        </Grid>
                    </Grid>

                    <div style={{ marginTop: 60 }}>
                        <TabArticlePerson />
                    </div>
                </div>
            </div>

        );
    }
}

export default ArticlePerson;