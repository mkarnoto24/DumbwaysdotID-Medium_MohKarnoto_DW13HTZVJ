import React, { Component } from 'react'
import { Typography, Button } from '@material-ui/core'
import Header from '../Header';
import TabStats from './TabStats'
import TabDetail from './TabsDetail'
import { Link } from 'react-router-dom'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';



class Stats extends Component {
    render() {
        return (
            <div>
                <Header />
                <div style={{ margin: '0 auto', width: '70%' }}>

                    <div style={{ marginTop: '50px', marginBottom: '30px' }}>
                        <Typography variant="h4">
                            Stats
                        </Typography>

                    </div>

                    <div style={{ display: 'flex' }}>
                        <Typography variant="p" style={{ color: 'grey' }}>
                            Click story below to view detailed stats
                        </Typography>

                        <Link style={{
                            fontSize: 15,
                            textDecoration: 'none',
                            color: 'grey',
                            marginLeft: '470px'
                        }}>Leart more about using stats</Link>

                    </div>
                    <hr></hr>
                    <div style={{ marginTop: 30 }}>
                        <TabStats />
                    </div>

                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                        <Button size="small"><ChevronLeftIcon />Prev 30 days</Button>
                        <Typography style={{ fontSize: 20 }}>|</Typography>
                        <Button size="small">Prev 30 days<ChevronRightIcon /></Button>

                    </div>

                    <div style={{ marginTop: 30 }}>
                        <TabDetail />
                    </div>



                </div>

            </div>
        )
    }
}

export default Stats;