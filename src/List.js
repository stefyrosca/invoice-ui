import React from 'react';
import { Invoice } from './Invoice';

export class List extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items: []
        }
    }

    render() {
        return this.state.items.map(item => {
            return <Invoice {...item} />
        });
    }

    componentWillMount() {
        fetch('http://localhost:3000/invoice')
            .then(response => response.json())
            .then(data => this.setState({ items: data }));

    }
}