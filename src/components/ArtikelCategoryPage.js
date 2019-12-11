import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';

const style = {
    txtTitle: {
        textAlign: 'center',
        padding: '20px 20px',
        color: '#fff'
    }

}

export default class ArticleCategoryPage extends Component {
    render() {
        return (
            <div>
                <Grid container spacing={1} style={{ margin: '50px 0' }}>
                    <div style={{ width: '60%', height: '330px' }}>
                        <img
                            style={{
                                width: '100%',
                                height: '100%'
                            }}

                            src={this.props.img} alt="gbr-artikel" />
                    </div>
                    <div style={{ width: '40%', height: '330px', backgroundColor: '#46b3e6' }}>
                        <div style={style.txtTitle}>
                            <h1 style={{
                                paddingTop: '30px'
                            }}
                            >{this.props.title}</h1>
                            <div>
                                <p>{this.props.subTitle}</p>
                                <span>{this.props.author}</span><br></br>
                                <span>{this.props.infoDate}</span>
                            </div>
                        </div>
                    </div>
                </Grid>
                <Grid container spacing={1}>
                    <div style={{ width: '40%', height: '330px', backgroundColor: '#46b3e6' }}>
                        <div style={style.txtTitle}>
                            <h1 style={{
                                paddingTop: '30px'
                            }}
                            >{this.props.title}</h1>
                            <div>
                                <p>{this.props.subTitle}</p>
                                <span>{this.props.author}</span><br></br>
                                <span>{this.props.infoDate}</span>
                            </div>
                        </div>
                    </div>
                    <div style={{ width: '60%', height: '330px' }}>
                        <img
                            style={{
                                width: '100%',
                                height: '100%'
                            }}

                            src={this.props.img} alt="gbr-artikel" />
                    </div>

                </Grid> </div>
        );
    }
}
