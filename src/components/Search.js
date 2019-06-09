import React, { Component } from 'react'
import axios from 'axios';
import { Consumer } from '../Context';


export default class  extends Component {
    
    cors_link = 'https://cors-anywhere.herokuapp.com/';
    base_url = 'http://api.musixmatch.com/ws/1.1/';

    state = {
        trackTitle: ''
    }

    onChange = (e) => {
        let v = e.target.value;
        this.setState({trackTitle: v})
    }


    locateTrack = (dispatch, e) => {
        e.preventDefault();

        axios.get(
            `${this.cors_link}${this.base_url}track.search?q_track=${this.state.trackTitle}&page=1&page_size=10&country=us&apikey=${process.env.REACT_APP_API_KEY}`
        )
        .then(
            response => {
                // Call dispatch method from Context
                dispatch({
                    type: 'SEARCH_TRACKS',
                    payload: response.data.message.body.track_list
                });

                this.setState({trackTitle:''})
                
                // Route back to track list
                let domain = document.domain;

                if (domain === 'localhost') { window.location.href = 'http://localhost:3000/#/'; } else 
                { window.location.href = 'https://danielc92.github.io/react-lyrics-app/#/' }
               
            }
        )
        .catch(
            error => console.log(error)
        )
    }


    render() {
        return (
            <Consumer>
                {/* value includes entire state from Context API */}
                {value => {

                    const { dispatch } = value;

                    return (

                        <form onSubmit={this.locateTrack.bind(this, dispatch)} className="form">
                        <div className="field is-grouped">
                            <p className="control is-expanded">
                                <input onChange={this.onChange} value={this.state.trackTitle} className="input" name="song_title" type="text" placeholder="Search for song title"></input>
                            </p>
                            <p className="control">
                                <button type="submit" className="button is-link">
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
