import React, { Component } from 'react';
import {Consumer} from '../Context';

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
                               {value.track_list.map(item=>{
                                   <Track key={item.track.track_id} track={item.track}/>
                               })}
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
