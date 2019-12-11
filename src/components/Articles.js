import React, { Component } from 'react';



export default class Articles extends Component {
    render() {
        return (
            <div>
                <ul style={{ width: '100%', display: 'inline-flex', listStyle: 'none' }}>
                    <li style={{ width: '30%' }}>
                        <img style={{
                            width: '100px',
                            height: '110px',

                        }}
                            src={this.props.img} alt="gbr" />
                    </li>
                    <li style={{ width: '70%', display: 'inline', listStyle: 'none', textAlign: 'justify' }}>
                        <h5 style={{ margin: '0' }}
                        >{this.props.title}</h5>
                        <p style={{ fontSize: '13px', wordSpacing: '0px', }}>
                            {this.props.subTitle}<br />
                            <span style={{ opacity: '0.5' }}>{this.props.infoDate}</span></p>
                    </li>
                </ul>
            </div>
        );
    }
}
