import React, { Component } from 'react';
import ScrollMenu from 'react-horizontal-scrolling-menu';
import { Link } from 'react-router-dom';
import axios from 'axios';

import './../App.css'



const MenuItem = ({ text, selected }) => {
    return <div
        className={`menu-item ${selected ? 'active' : ''}`}
    >{text}</div>;
};

export const Menu = (list, selected) =>
    list.map(el => {
        const { name, id } = el;
        return <Link className="text-url" to={name.toString().toLowerCase() + "?id=" + id}><MenuItem text={name} key={name} selected={selected} /></Link>
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
        //this.menuItems = Menu(listMenu, selected);
        this.state = {
            list: [],
            selected,
            transition: 1,
        }
    }
    ;
    componentDidMount() {
        axios.get(`http://localhost:4000/api/v1/categories`).then(res => {
            // this.setState({categories: res.data})
            console.log(res)
            this.setState({ list: res.data })
        })
    }
    onSelect = key => {
        this.setState({ selected: key });
    }


    render() {

        const { list, selected } = this.state;
        //const menu = this.menuItems;
        return (
            <div className="AppCategory">
                <ScrollMenu position="sticky"
                    data={Menu(list, selected)}
                    arrowLeft={ArrowLeft}
                    arrowRight={ArrowRight}
                    selected={selected}
                    onSelect={this.onSelect}
                />
            </div>
        );
    }
}