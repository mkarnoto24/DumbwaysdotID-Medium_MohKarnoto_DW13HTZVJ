import React, { Component } from 'react';
import ScrollMenu from 'react-horizontal-scrolling-menu';
import { Link } from 'react-router-dom';

import './../App.css'

const listMenu = [
    {
        id: 1,
        name: 'home',
        linkto: '/Home'
    },
    {
        id: 2,
        name: 'onezero'
    },
    {
        id: 3,
        name: 'elemental'
    },
    {
        id: 4,
        name: 'gen'
    },
    {
        id: 5,
        name: 'zora'
    },
    {
        id: 6,
        name: 'forge'
    },
    {
        id: 7,
        name: 'human parts'
    },
    {
        id: 8,
        name: 'marker'
    },
    {
        id: 9,
        name: 'level'
    },
    {
        id: 10,
        name: 'heated'
    },
    {
        id: 11,
        name: 'modus'
    },
    {
        id: 12,
        name: 'more'
    },
];

const MenuItem = ({ text, selected }) => {
    return <div
        className={`menu-item ${selected ? 'active' : ''}`}
    >{text}</div>;
};

export const Menu = (listMenu, selected) =>
    listMenu.map(el => {
        const { name, linkto } = el;
        return <Link to={linkto}><MenuItem text={name} key={name} selected={selected} /></Link>
    })


const Arrow = ({ text, className }) => {
    return (
        <div className={className}>{text}</div>
    );
}

const ArrowLeft = Arrow({ text: '<', className: 'arrow-prev' });
const ArrowRight = Arrow({ text: '>', className: 'arrow-next' });


const selected = 'home';


export default class Category extends Component {
    constructor(props) {
        super(props);
        this.menuItems = Menu(listMenu, selected);
    }
    state = {
        selected,
        transition: 1,
    };
    onSelect = key => {
        this.setState({ selected: key });
    }
    render() {
        const { selected } = this.state;
        const menu = this.menuItems;
        return (
            <div className="AppCategory">
                <ScrollMenu
                    data={menu}
                    arrowLeft={ArrowLeft}
                    arrowRight={ArrowRight}
                    selected={selected}
                    onSelect={this.onSelect}
                />
            </div>
        );
    }
}