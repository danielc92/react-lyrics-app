import React from 'react'
import {Link} from 'react-router-dom';
import Lyrics from './Lyrics';

const TrackItem = (props) => {
    const {track} = props;
    
    return (
        <div className="column is-full">
            <div className="notification is-bold" style={{borderRadius:0, backgroundColor:'#e5c02d'}}>
                <div className="columns">
                    <div className="column is-one-third">
                        <h3 className="title">{track.track_name}</h3>
                        <p><span className="tag is-dark">{track.artist_name}</span></p>
                        <p><i className="fas fa-star"></i> <strong>{track.track_rating}</strong></p>
                    </div>
                    <div className="column is-one-third">
                        <p className="help">Album: <strong>{track.album_name}</strong></p>
                        <p className="help">Modified: <strong>{track.updated_time}</strong></p>
                    </div>
                    <div className="column is-one-third">
                        <a style={{marginBottom: '1rem'}} className="button is-fullwidth is-dark is-outlined" href={track.track_share_url}>Share</a>
                        {track.has_lyrics === 1 ? <Link data={track} className="button is-fullwidth is-dark is-outlined" to={`/lyrics/track/${track.track_id}`}>View Lyrics</Link> : <code style={{backgroundColor:'transparent', color:'black', paddingLeft:0}}>No lyrics exist for this track</code> }
                    </div>
                </div>
                
                
               
                
            </div>
        </div>
    )

}

export default TrackItem;