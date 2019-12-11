import React, { Component } from 'react';
import { Toolbar, Typography } from '@material-ui/core';

export default class CategoryPage extends Component {
    render() {
        return (
            <div>
                <Toolbar>
                    <Typography
                        variant="h5"
                    >
                        Medium
                    </Typography>
                </Toolbar>
            </div>
        );
    }
}
