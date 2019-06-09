import React, { Component } from 'react';
import {Consumer} from '../Context';
import TrackItem from './TrackItem';


export default class Tracks extends Component {
    render() {
        return (
            <section className="section" style={{height: '900px'}}>
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
                                    <section className="is-multiline columns">
                                        {value.track_list.map(item=>{ return <TrackItem key={item.track.track_id} track={item.track}/>})}
                                    </section>
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
