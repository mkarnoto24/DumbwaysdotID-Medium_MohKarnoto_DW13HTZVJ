import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

export default class ArtikelCategoryPageBawah extends Component {
    render() {
        return (
            <div> <hr />
                <Grid container spacing={2}>
                    <Grid item xs={7} style={{ textAlign: 'left' }}>
                        <div>
                            <Typography variant="h6">{this.props.title}</Typography>
                            <p style={{ marginTop: '0' }}>{this.props.subTitle}</p>
                        </div>
                        <div>
                            <span>{this.props.author}</span><br />
                            <span>{this.props.infoDate}</span>
                        </div>
                    </Grid>
                    <Grid item xs={5}>
                        <div>
                            <img style={{
                                width: '200px',
                                height: '150px',
                                float: 'right'
                            }} src={this.props.img} alt="gbr-artikel" />
                        </div>
                    </Grid>
                </Grid> </div>
        );
    }
}
