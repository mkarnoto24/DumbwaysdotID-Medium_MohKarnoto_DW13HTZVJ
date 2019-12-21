import React, { Component } from 'react';

export default class test extends Component {
    render() {
        let rows = [];
        for (let i = 0; i < 5; i++) {
            const data = rows.push(i)
            console.log(data);
        }
        return (
            <div>
                {rows.map((obeject, i) => <p>Hello world yang ke- {i}</p>)}

            </div>
        );
    }
}

