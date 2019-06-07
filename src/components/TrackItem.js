import React from 'react'
import {Link} from 'react-router-dom';
import Lyrics from './Lyrics';

const TrackItem = (props) => {
    const {track} = props;
    
    return (
        <div className="column is-one-quarter-fullhd is-one-third-desktop">
            <div className="notification is-dark" style={{borderRadius:0}}>
                <h4 className="title">{track.track_name}</h4>
                <p className="help">by: {track.artist_name}</p>
                <p className="help">Rated: {track.track_rating}</p>
                <p className="help">Modified: {track.updated_time}</p>
                <Link component={Lyrics} data={track} className="button is-light is-outlined is-small is-fullwidth" to={`/lyrics/track/${track.track_id}`}>View lyrics for this song</Link>
            </div>
        </div>
    )

}

export default TrackItem;