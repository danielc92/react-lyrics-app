import React from 'react'
import {Link} from 'react-router-dom';
import Lyrics from './Lyrics';

const TrackItem = (props) => {
    const {track} = props;
    
    return (
        <div className="column is-one-third-fullhd is-one-third-desktop">
            <div className="notification is-warning" style={{borderRadius:0, border:'1px solid black'}}>
                <h3 className="title">{track.track_name}</h3>
                <p className="help"><span className="tag is-dark">{track.artist_name}</span></p>
                <p className="help">Rated: <strong>{track.track_rating}</strong></p>
                <p className="help">Album: <strong>{track.album_name}</strong></p>
                <p className="help">Modified: <strong>{track.updated_time}</strong></p>
                {track.has_lyrics === 1 ? <Link data={track} className="button is-dark is-outlined is-fullwidth" to={`/lyrics/track/${track.track_id}`}>View lyrics for this song</Link> : <code style={{backgroundColor:'transparent', color:'black', paddingLeft:0}}>No lyrics exist for this track</code> }
                
            </div>
        </div>
    )

}

export default TrackItem;