import React, { Component } from 'react';
import {Consumer} from '../Context';
import TrackItem from './TrackItem';


export default class Tracks extends Component {
    render() {
        return (
            <Consumer>
                {value => {
                    if ((value.track_list === undefined) | (value.track_list.length === 0)) {
                        return <p>Fetching Data...</p>
                    } else {
                        return (<React.Fragment>
                            <section className="section">
                            <section className="container">
                            <section className="content">
                            <h4>{value.heading}</h4>
                                <section className="is-multiline columns">
                                
                               {value.track_list.map(item=>{
                                   return <TrackItem key={item.track.track_id} track={item.track}/>
                               })}
                               </section>
                            </section>
                            </section>
                            </section>

                        </React.Fragment>)
                    }
                }}
            </Consumer>
        )
    }
}
