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
                            <section className="section" style={{backgroundColor: '#f2f2f2'}}>
                            <section className="container">
                            <section className="content">
                            <h3 style={{color: '#3f3b3b'}} class="has-text-centered title">{value.heading.toUpperCase()}</h3>
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
