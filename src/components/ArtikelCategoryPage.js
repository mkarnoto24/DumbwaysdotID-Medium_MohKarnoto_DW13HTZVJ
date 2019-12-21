import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Moment from 'react-moment';

const style = {
    txtTitle: {
        textAlign: 'center',
        color: '#fff',
        paddingTop: '0'
    }

}

export default class ArticleCategoryPage extends Component {
    article_bycategory() {
        if (this.props.id % 2 === 0) {
            return (<Grid container spacing={1} style={{ margin: '50px 0' }}>
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
                        <h2 style={{
                            paddingTop: '30px'
                        }}
                        >{this.props.title}</h2>
                        <div>
                            <p>{this.props.subTitle}</p>
                            <span>{this.props.author}</span><br></br>
                            <span><Moment format={"YYYY MM DD"}>{this.props.infoDate}</Moment></span>
                        </div>
                    </div>
                </div>
            </Grid>)
        }
        else {
            return (<Grid container spacing={1}>
                <div style={{ width: '40%', height: '330px', backgroundColor: '#46b3e6' }}>
                    <div style={style.txtTitle}>
                        <h2 style={{
                            paddingTop: '30px'
                        }}
                        >{this.props.title}</h2>
                        <div>
                            <p>{this.props.subTitle}</p>
                            <span>{this.props.author}</span><br></br>
                            <span><Moment format={"YYYY MM DD"}>{this.props.infoDate}</Moment></span>
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

            </Grid>
            )
        }
    }
    render() {

        return (
            <div>
                {this.article_bycategory()}
            </div>
        );
    }
}
