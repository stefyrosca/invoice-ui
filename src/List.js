import React from 'react';
import { Invoice } from './Invoice';

export class List extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            // items: []
            items: [{
                date: '2020-10-10',
                buyer: 'Jane Doe'
            }, {
                date: '2021-10-10',
                buyer: 'Jon Smith'
            }]

        }
    }

    render() {
        return this.state.items.map(item => {
            return <Invoice {...item} />
        });
    }
}