import React, { Component } from 'react';
import './../App.css';
import { Typography, Avatar } from '@material-ui/core';
import iconClaps from './layout/icon_clap.png';
import BookmarkBorderSharpIcon from '@material-ui/icons/BookmarkBorderSharp';
import gbr from './gbrtengah3.jpeg';
import { Link } from '@material-ui/core';



export default class RelatedArticle extends Component {

    render() {
        return (
            <div >
                <div className="root-related-article">

                    <div className="body-related-article">
                        <div style={{ width: '80%', margin: '0 auto' }}>
                            <p className="text-more-frommedium">More From Medium</p>
                            <hr className="line-related-article"></hr>
                        </div>
                        <div className="container-tag">
                            <div className="div-related-tag">
                                <div className="title-related-article">More from SkillUp Ed</div>
                                <img className="img-related-tag" src={gbr} alt="gbr" />
                                <Typography variant="h6">
                                    The Greatest Sales Deck I've Ever Seen
                                </Typography>
                                <div>
                                    <div style={{ float: 'left', display: 'flex' }}>

                                        <Avatar style={{ float: 'left', width: '60px', height: '60px' }}
                                            alt="Ted talk"
                                            src="https://pbs.twimg.com/profile_images/877631054525472768/Xp5FAPD5_reasonably_small.jpg"
                                        ></Avatar>
                                        <p style={{ marginLeft: '10px', marginTop: '14px', fontSize: '12px' }}>Ryan Holiday<br></br><span style={{ fontSize: '12px', opacity: '0.5' }}>Jun 23 2018. 6 min read</span>
                                            <span style={{ float: 'right', alignContent: 'center', marginBottom: '20px' }}>
                                            </span>
                                        </p>

                                    </div>
                                    <div style={{ float: 'right', display: 'flex' }}>
                                        <div className="right-title">
                                            <Link to="/test"><img style={{ width: '25px', height: '25px' }} src={iconClaps} alt="icon-clap" /></Link>
                                        </div>
                                        <div className="right-title">
                                            <p style={{ display: 'inline', fontSize: '13px', opacity: '0.5', alignContent: 'center' }}> 65 | </p></div>
                                        <div className="right-title">
                                            <BookmarkBorderSharpIcon style={{ opacity: '0.8' }}></BookmarkBorderSharpIcon>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="div-related-tag">
                                <div className="title-related-article">More from SkillUp Ed</div>
                                <img className="img-related-tag" src={gbr} alt="gbr" />
                                <Typography variant="h6">
                                    The Greatest Sales Deck I've Ever Seen
                                </Typography>
                                <div>
                                    <div style={{ float: 'left', display: 'flex' }}>

                                        <Avatar style={{ float: 'left', width: '60px', height: '60px' }}
                                            alt="Ted talk"
                                            src="https://pbs.twimg.com/profile_images/877631054525472768/Xp5FAPD5_reasonably_small.jpg"
                                        ></Avatar>
                                        <p style={{ marginLeft: '10px', marginTop: '14px', fontSize: '12px' }}>Ryan Holiday<br></br><span style={{ fontSize: '12px', opacity: '0.5' }}>Jun 23 2018. 6 min read</span>
                                            <span style={{ float: 'right', alignContent: 'center', marginBottom: '20px' }}>
                                            </span>
                                        </p>

                                    </div>
                                    <div style={{ float: 'right', display: 'flex' }}>
                                        <div className="right-title">
                                            <Link to="/test"><img style={{ width: '25px', height: '25px' }} src={iconClaps} alt="icon-clap" /></Link>
                                        </div>
                                        <div className="right-title">
                                            <p style={{ display: 'inline', fontSize: '13px', opacity: '0.5', alignContent: 'center' }}> 65 | </p></div>
                                        <div className="right-title">
                                            <BookmarkBorderSharpIcon style={{ opacity: '0.8' }}></BookmarkBorderSharpIcon>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="div-related-tag">
                                <div className="title-related-article">More from SkillUp Ed</div>
                                <img className="img-related-tag" src={gbr} alt="gbr" />
                                <Typography variant="h6">
                                    The Greatest Sales Deck I've Ever Seen
                                </Typography>
                                <div>
                                    <div style={{ float: 'left', display: 'flex' }}>

                                        <Avatar style={{ float: 'left', width: '60px', height: '60px' }}
                                            alt="Ted talk"
                                            src="https://pbs.twimg.com/profile_images/877631054525472768/Xp5FAPD5_reasonably_small.jpg"
                                        ></Avatar>
                                        <p style={{ marginLeft: '10px', marginTop: '14px', fontSize: '12px' }}>Ryan Holiday<br></br><span style={{ fontSize: '12px', opacity: '0.5' }}>Jun 23 2018. 6 min read</span>
                                            <span style={{ float: 'right', alignContent: 'center', marginBottom: '20px' }}>
                                            </span>
                                        </p>

                                    </div>
                                    <div style={{ float: 'right', display: 'flex' }}>
                                        <div className="right-title">
                                            <Link to="/test"><img style={{ width: '25px', height: '25px' }} src={iconClaps} alt="icon-clap" /></Link>
                                        </div>
                                        <div className="right-title">
                                            <p style={{ display: 'inline', fontSize: '13px', opacity: '0.5', alignContent: 'center' }}> 65 | </p></div>
                                        <div className="right-title">
                                            <BookmarkBorderSharpIcon style={{ opacity: '0.8' }}></BookmarkBorderSharpIcon>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div style={{ backgroundColor: '#000000' }}>

                    <div className="footer-related-article">

                        <div className="body-footer">
                            <div className="container-footer">
                                <div className="footer-content">
                                    <div className="footer-article">
                                        <Typography>Discover Medium </Typography>
                                        <p style={{ fontStyle: 'justify' }}>Welcome to a place where words matter. On Medium, smart voices and original ideas take center stage - with no ads in sight. Watch</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="body-footer">
                            <div className="container-footer">
                                <div className="footer-content">
                                    <div className="footer-article">
                                        <Typography>Discover Medium </Typography>
                                        <p style={{ fontStyle: 'justify' }}>Welcome to a place where words matter. On Medium, smart voices and original ideas take center stage - with no ads in sight. Watch</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="body-footer">
                            <div className="container-footer">
                                <div className="footer-content">
                                    <div className="footer-article">
                                        <Typography>Discover Medium </Typography>
                                        <p style={{ fontStyle: 'justify' }}>Welcome to a place where words matter. On Medium, smart voices and original ideas take center stage - with no ads in sight. Watch</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                    <hr style={{ width: '80%', margin: '0 auto', color: 'white' }}></hr>
                    <div style={{ width: '80%', margin: '0 auto', color: 'white', display: 'flex' }}>
                        <div style={{ width: '80%' }}><h3>Medium</h3></div>
                        <div style={{ width: '20%' }}>
                            <ul className="listmenu-footer">
                                <li>About</li>
                                <li>Help</li>
                                <li>Legal</li>
                            </ul>
                        </div>

                    </div>
                </div>

            </div >
        );
    }
}
