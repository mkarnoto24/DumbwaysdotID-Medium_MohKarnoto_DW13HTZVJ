import React, { Component } from 'react'
import { Typography, Button, Grid } from '@material-ui/core'
import BookmarkIcon from '@material-ui/icons/Bookmark';
import ButtonAppBar from '../components/Header'

class Bookmark extends Component {
    render() {
        return (
            <div>

                <ButtonAppBar />

                <div style={{ width: '80%', margin: '0 auto' }}>

                    <div>
                        <Typography variant="h4" style={{ fontWeight: 'bold', margin: '30px 0' }}>
                            Bookmark
                        </Typography>
                    </div>

                    <div>
                        <Grid container={1} spacing={1}>
                            <Grid item xs={12}>
                                <div style={{ border: '1px solid #bbbbbb', display: 'flex', height: '80px' }}>
                                    <BookmarkIcon style={{ fontSize: '35px', paddingTop: '20px', marginRight: 30, marginLeft: 30 }} />

                                    <Typography variant="h5" style={{ paddingTop: '20px' }}>|</Typography>

                                    <div style={{ float: 'right', paddingTop: '22px', paddingLeft: '15px' }}><Typography variant="h5">Offline reading is here.</Typography></div>

                                    <Button variant="contained" size="small"
                                        style={{ backgroundColor: 'black', color: 'white', marginTop: '22px', marginLeft: '600px', height: '30px' }}>Upgrade</Button>

                                </div>
                            </Grid>
                        </Grid>
                    </div>
                </div>
            </div>

        );
    }
}

export default Bookmark;