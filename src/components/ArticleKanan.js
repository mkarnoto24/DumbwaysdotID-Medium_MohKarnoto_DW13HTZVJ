import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';

export default class ArticleKanan extends Component {
    render() {
        return (
            <div>
                <Grid container spacing={2}>
                    <Grid item sm={8}>
                        <div>
                            <span><h3 style={{ margin: '0' }}>{this.props.title}</h3></span>
                            <span style={{ fontSize: '13px', opacity: '0.4', }}>{this.props.subTitle}</span><p></p>
                        </div>
                        <div>
                            <span style={{ fontSize: '13px', }}>{this.props.author}</span><br></br>
                            <span style={{ fontSize: '13px', opacity: '0.4', }}>{this.props.infoDate}</span>
                        </div>
                    </Grid>
                    <Grid item sm={4}>
                        <img style={{
                            width: '130px',
                            height: '110px',
                            float: 'right'

                        }}
                            src={this.props.img} alt="gbr" />
                    </Grid>
                </Grid>
            </div>
        );
    }
}
