import React, { Component } from "react";
import { Link, Toolbar } from '@material-ui/core';


const classes = {
    navbarlink: {
        padding: '15px',
        textTransform: 'uppercase',
        fontSize: '13px',
        textDecoration: 'none',
        cursor: 'pointer',
    }
}

class Category extends Component {

    render() {
        return (
            <div>
                <Toolbar>
                    <nav>
                        <Link style={classes.navbarlink} to="#">Home</Link>
                        <Link style={classes.navbarlink} to="#">Onezero</Link>
                        <Link style={classes.navbarlink} to="#">Elemntal</Link>
                        <Link style={classes.navbarlink} to="#">Gen</Link>
                        <Link style={classes.navbarlink} to="#">Zora</Link>
                        <Link style={classes.navbarlink} to="#">Forge</Link>
                        <Link style={classes.navbarlink} to="#">Human Parts</Link>
                        <Link style={classes.navbarlink} to="#">mrker</Link>
                        <Link style={classes.navbarlink} to="#">level</Link>
                        <Link style={classes.navbarlink} to="#">heated</Link>
                        <Link style={classes.navbarlink} to="#">modus</Link>
                        <Link style={classes.navbarlink} to="#">more</Link>
                    </nav>
                </Toolbar>
            </div>
        );
    }
}
export default Category;