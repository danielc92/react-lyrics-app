import React, { Component } from 'react'

const Context = React.createContext();

class Provider extends Component {

    state = {
        track_list = [
            {track:{track_name:'lorem'}},
            {track:{track_name:'lorem3'}},
            {track:{track_name:'lorem2'}}
        ],
        heading: 'Top 10 tracks'
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