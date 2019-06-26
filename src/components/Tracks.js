import React, { Component } from 'react';
import {Consumer} from '../Context';
import TrackItem from './TrackItem';


export default class Tracks extends Component {
    render() {
        return (
            <section className="section">
                <section className="container">
                    <section className="content">
                        <Consumer>
                        {value => { 
                            if ((value.track_list === undefined) | (value.track_list.length === 0)) {
                                return (
                                <h2 className="title is-uppercase has-text-centered" style={{fontWeight:'bold'}}>
                                    Loading Data  <span className="fa-1x"><i className="fas fa-spinner fa-spin"></i></span>
                                </h2>)
                            } else {
                                return (
                                <React.Fragment>
                                    <h2 style={{color: '#3f3b3b', fontWeight: 'bold'}} className="has-text-centered title is-uppercase">{value.heading.toUpperCase()}</h2>
                                    <table className="table">
                                        <thead>
                                            <tr>
                                                <th>Title</th>
                                                <th>Updated</th>
                                                <th>Subtitles</th>
                                                <th>Album</th>
                                                <th>Link</th>
                                                <th>Lyrics</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {value.track_list.map(item=>{ return <TrackItem key={item.track.track_id} track={item.track}/>})}
                                        </tbody>
                                        
                                    </table>
                                </React.Fragment>
                                )
                            }
                        }}
                        </Consumer>
                    </section>
                </section>
            </section>
        )
    }
}
