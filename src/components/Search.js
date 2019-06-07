import React, { Component } from 'react'
import axios from 'axios';
import { Consumer } from '../Context';

export default class  extends Component {

    state = {
        trackTitle: ''
    }

    onChange = (e) => {
        let v = e.target.value;
        this.setState({trackTitle: v})
    }


    locateTrack = (e) => {
        e.preventDefault();
    }


    render() {
        return (
            <Consumer>
                {/* value includes entire state from Context API */}
                {value => {
                    return (
                        <form onSubmit={this.locateTrack} className="form">
                        <div className="field is-grouped">
                            <p className="control is-expanded">
                                <input onChange={this.onChange} value={this.state.trackTitle} className="input" name="song_title" type="text" placeholder="Search for lyrics.."></input>
                            </p>
                            <p className="control">
                                <button type="submit" className="button is-outlined is-link">
                                    Search
                                </button>
                            </p>
                        </div>
                    </form>
                    );
                }}
            </Consumer>
        )
    }
}
