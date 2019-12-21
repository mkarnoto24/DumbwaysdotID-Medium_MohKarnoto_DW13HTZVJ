import React, { Component } from 'react';
import { Link } from 'react-router-dom';


export default class Articles extends Component {
    render() {
        return (
            <div>
                <ul style={{ width: '100%', display: 'inline-flex', listStyle: 'none' }}>
                    <li style={{ width: '35%' }}>
                        <img style={{
                            width: '90px',
                            height: '100px',

                        }}
                            src={this.props.img} alt="gbr" />
                    </li>
                    <li style={{ width: '65%', display: 'inline', listStyle: 'none', textAlign: 'justify' }}>
                        <Link className="text-url" to={this.props.href}><h5 style={{ margin: '0' }}
                        >{this.props.title}</h5></Link>
                        <p style={{ fontSize: '13px', wordSpacing: '0px', }}>
                            {this.props.subTitle}<br />
                            <span style={{ opacity: '0.5' }}>{this.props.infoDate}</span></p>
                    </li>
                </ul>
            </div>
        );
    }
}
