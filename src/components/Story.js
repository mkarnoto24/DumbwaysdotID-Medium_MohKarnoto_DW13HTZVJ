import React, { Component } from 'react';
import { Typography, Button } from '@material-ui/core';
import Header from '../components/Header';
import PropTypes from 'prop-types';
//import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Box from '@material-ui/core/Box';


function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <Typography
            component="div"
            role="tabpanel"
            hidden={value !== index}
            id={`scrollable-auto-tabpanel-${index}`}
            aria-labelledby={`scrollable-auto-tab-${index}`}
            {...other}
        >
            {value === index && <Box p={3}>{children}</Box>}
        </Typography>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

function a11yProps(index) {
    return {
        id: `scrollable-auto-tab-${index}`,
        'aria-controls': `scrollable-auto-tabpanel-${index}`,
    };
}

function TabYourStories() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div>

            <Tabs
                value={value}
                onChange={handleChange}
                indicatorColor="primary"
                textColor="primary"
                variant="scrollable"
                scrollButtons="auto"
                aria-label="scrollable auto tabs example"
            >
                <Tab label="Drafts 1" {...a11yProps(0)} />
                <Tab label="Published" {...a11yProps(1)} />

            </Tabs>

            <TabPanel value={value} index={0}>
                <div style={{ justifyContent: 'center' }}>
                    <Typography>
                        You have no drafts
                        Write on the go with our iOS and Android apps!
                    </Typography>
                </div>
            </TabPanel>
            <TabPanel value={value} index={1}>
                Item Two
            </TabPanel>
        </div>
    );
}

class YourStories extends Component {

    render() {
        return (

            <div >
                <Header />
                <div style={{
                    margin: '0 auto',
                    width: '80%'
                }}>

                    <div style={{ display: 'flex', margin: '80px 0 0 0 ', flexGrow: '1' }}>
                        <Typography variant="h4" >
                            Your Stories
                        </Typography>

                        <div style={{ marginLeft: '52%' }}>
                            <Button variant="outlined" style={{ fontSize: '12px' }}>
                                Import a story
                            </Button>

                            <Button variant="outlined" style={{ fontSize: '12px', color: 'green', marginLeft: 20 }}>
                                Write a story
                            </Button>
                        </div>

                    </div>

                    <div style={{ marginTop: 30 }}>
                        <TabYourStories />
                    </div>



                </div>

            </div>
        )
    }
}

export default YourStories;