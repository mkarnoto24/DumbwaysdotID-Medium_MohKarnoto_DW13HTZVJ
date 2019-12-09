import React, { Component } from 'react';
import { Link, Hidden } from '@material-ui/core';
import gbratikelbsr from './gbrartikelbsr.jpeg';
import gbrtengah1 from './gbrtengah1.jpg';
class Home extends Component {
    render() {

        return (
            <div>
                <Header />
            </div>
        );
    }
}
export default Home;


const stylecss = {
    topbar: {
        width: '100%',
        overflow: 'hidden'
    },
    li: {
        display: 'inline', listStyle: 'none'
    },
    litengah: {
        display: 'block',
        listStyle: 'none'
    }
}
class Header extends Component {

    render() {
        return (
            <div>


                <header style={stylecss.topbar}>
                    <div style={{ width: '50%' }}>
                        <h2 style={{ paddingLeft: '30%', float: 'left' }}>Medium</h2>
                    </div>
                    <div style={{ width: '50%', float: 'right' }}>
                        <p>
                            Become a Member
                            <span>Sign In</span>
                            <button>Get Started</button>
                        </p>

                    </div>
                </header>
                <nav>
                    <Link to="#">Home</Link>
                    <Link to="#">Onezero</Link>
                    <Link to="#">Elemntal</Link>
                    <Link to="#">Gen</Link>
                    <Link to="#">Zora</Link>
                    <Link to="#">Forge</Link>
                    <Link to="#">Human Parts</Link>
                </nav>

                <section style={{ width: '100%' }}>
                    <div style={{ float: 'left', overflow: 'hidden', width: '40%' }}>
                        <div>
                            <img style={{
                                width: '80%',
                                height: '120px',
                                paddingLeft: '25%'
                            }}
                                src={gbratikelbsr} alt="gbr-artikel" />
                        </div>
                        {/*END DIV FOR IMAGE*/}

                        {/*START DIV FOR TITLE*/}
                        <div style={{ paddingLeft: '43%', textAlign: 'justify' }}>
                            <h3 style={{ marginBottom: '0' }}>The Joy of Begin an Untethered Woman</h3>
                            <p style={{ fontSize: '13px', opacity: '0.5' }}>On Sex, Solitude, and female friendship</p>
                        </div>
                        {/*END DIV FOR IMAGE*/}

                        {/*START DIV FOR DATE ETC*/}
                        <div style={{ paddingLeft: '43%', textAlign: 'justify' }}>
                            <p style={{ fontSize: '13px', wordSpacing: '0px', }}>Anna Graham Hunter in Human Parts<br />
                                <span style={{ opacity: '0.5' }}>Feb 19, 2017. 7 min read</span></p>

                        </div>
                        {/*END DIV FOR DATE ETC*/}
                    </div>
                    <div style={{ float: 'left', overflow: 'hidden', width: '30%' }}>
                        <ul>
                            <li style={stylecss.litengah}>
                                <img style={{
                                    width: '100px',
                                    height: '100px',

                                }}
                                    src={gbrtengah1} alt="gbr" />
                            </li>
                            <li style={stylecss.litengah}>
                                <img style={{
                                    width: '100px',
                                    height: '100px',

                                }}
                                    src={gbrtengah1} alt="gbr" />
                            </li>
                            <li style={stylecss.liteng}>
                                <img style={{
                                    width: '100px',
                                    height: '100px',

                                }}
                                    src={gbrtengah1} alt="gbr" />
                            </li>
                        </ul>
                    </div>
                    <div style={{ float: 'left', overflow: 'hidden', width: '30%' }}>
                        <img style={{
                            width: '100px',

                        }}
                            src={gbrtengah1} alt="gbr" />
                    </div>
                </section>
                <footer>

                </footer>
            </div >

        );
    }
}