import React, { Component } from 'react'
import axios from 'axios';

const Context = React.createContext();

export class Provider extends Component {

    state = {
        track_list : [],
        heading: 'Top 10 tracks'
    }

    componentDidMount() {
        axios.get(``)
            .then(response => console.log(response.data))
            .catch(error => console.log(error));
    }

    render() {
        return (
            <Context.Provider value={this.state}>
                {this.props.children}
            </Context.Provider>
        )
    }
}

export const Consumer = Context.Consumer;