import React from 'react'
import {Link} from 'react-router-dom';

const TrackItem = (props) => {
    console.log(props);
    const {track} = props;
    
    return (
        <div className="column is-one-quarter-fullhd is-one-third-desktop">
            <div className="notification is-link is-link" style={{borderRadius:0}}>
                <h4 className="title">{track.track_name}</h4>
                <p className="help">by: {track.artist_name}</p>
                <p className="help">Rated: {track.track_rating}</p>
                <p className="help">Modified: {track.updated_time}</p>
                <button>View Lyrics</button>
            </div>
        </div>
    )

}

export default TrackItem;