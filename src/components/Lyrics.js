import React, { Component } from 'react';
import axios from 'axios';

class Lyrics extends Component {


    cors_link = 'https://cors-anywhere.herokuapp.com/';
    base_url = 'http://api.musixmatch.com/ws/1.1/';


    state = {
        track: {},
        lyrics: {}
    }

    componentDidMount() {
        axios.get(
            `${this.cors_link}${this.base_url}track.lyrics.get?track_id=${this.props.match.params.id}&apikey=${process.env.REACT_APP_API_KEY}`
            )
            .then(response => {

                this.setState({lyrics: response.data.message.body.lyrics})
                return axios.get(`${this.cors_link}${this.base_url}track.get?track_id=${this.props.match.params.id}&apikey=${process.env.REACT_APP_API_KEY}`
                );
            })
            .then(response => {
                this.setState({track:response.data.message.body.track});
            })
            .catch(error => {
                console.log(error)
            });

    }

    render() {
        return (

            <section className="section">
                <section className="container">
                    <section className="content">
                        <h1>{this.state.track.track_name}</h1>
                        <p>By <span className="tag is-dark">{this.state.track.artist_name}</span></p>
                        <p>Artist ID: {this.state.track.artist_id}</p>
                        <p>Album ID: {this.state.track.album_id}</p>
                        <p><code style={{backgroundColor:'transparent'}}>Track last updated at: {this.state.track.updated_time}</code></p>
                        <h2>Lyrics</h2>
                        <p> {this.state.lyrics.lyrics_body}</p>
                        <p className="help"> {this.state.lyrics.lyrics_copyright}</p>
                        <p><code style={{backgroundColor:'transparent'}}>Lyrics last updated at: {this.state.lyrics.updated_time}</code></p>
                    </section>
                </section>
            </section>
        )
    }
}

export default Lyrics;