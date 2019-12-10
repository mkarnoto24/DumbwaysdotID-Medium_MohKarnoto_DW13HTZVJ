import React, { Component } from 'react';
import gbrtengah1 from './gbrtengah1.jpg';


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
                            src={gbrtengah1} alt="gbr" />
                    </li>
                    <li style={{ width: '70%', display: 'inline', listStyle: 'none', textAlign: 'justify' }}>
                        <h5 style={{ margin: '0' }}
                        >{this.props.title}</h5>
                        <p style={{ fontSize: '13px', wordSpacing: '0px', }}>
                            Courtney Christine in Human Parts<br />
                            <span style={{ opacity: '0.5' }}>Feb 19, 2017. 7 min read</span></p>
                    </li>
                </ul>
            </div>
        );
    }
}
