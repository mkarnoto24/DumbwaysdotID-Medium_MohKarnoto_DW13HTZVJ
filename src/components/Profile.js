import React, { Component } from 'react'
import { Typography, Button, Avatar } from '@material-ui/core'
import Grid from '@material-ui/core/Grid'
import Header from '../components/Header'

class Profile extends Component {
    render() {
        return (

            <div>
                <Header />

                <div style={{ margin: '0 auto', width: '60%', padding: "50px 150px 0 150px" }}>
                    <Grid container justify="space-between" alignItems="center" style={{}}>

                        <Grid item >
                            <div style={{ display: 'flex', }}>
                                <Typography variant="h4" style={{ marginRight: 30 }}>
                                    Moh Karnoto
                  </Typography>
                                <Button variant="outlined" size="small" >
                                    <span style={{ fontSize: "12px" }}>Edit Profile</span>
                                </Button>
                            </div>

                            <div style={{ marginTop: '20px', opacity: '0.7' }}>
                                <Typography>
                                    1 Followers
                                </Typography>
                            </div>

                        </Grid>
                        <Grid item>
                            <Avatar src="#" style={{ height: 150, width: 150 }}></Avatar>
                        </Grid>
                    </Grid>

                    <div style={{ textAlign: 'justify', marginTop: 70 }}>
                        <Typography variant="h6" style={{ opacity: '0.7' }}>
                            Moh Karnoto hasn't been active on Medium yet. Check back later to see their stories, claps, and higlights
            </Typography>
                    </div>
                </div>
            </div>
        );
    }
}
export default Profile;