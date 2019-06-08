import React from 'react'
import {Link} from 'react-router-dom';

const TrackItem = (props) => {
    const {track} = props;
    
    return (
        <div className="column is-full">
            <div className="notification is-bold" style={{borderRadius:0, boxShadow: '0 3px 6px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'}}>
                <div className="columns">
                    <div className="column is-two-fifths">
                        <h3 className="title is-uppercase" style={{fontWeight:'bold'}}>{track.track_name}</h3>
                        <h6 className="title is-uppercase" style={{fontWeight:'bold', color:'#1878d4'}}>BY: {track.artist_name}</h6>
                        <p><i className="fas fa-star"></i> <strong>{track.track_rating}</strong></p>
                    </div>
                    <div className="column is-two-fifths">
                        <p className="help">Album: <strong>{track.album_name}</strong></p>
                        <p className="help">Album ID: <strong>{track.album_id}</strong></p>
                        <p className="help">Modified: <strong>{track.updated_time}</strong></p>
                        <p className="help">Subtitle Availability: {track.has_subtitles === 1 ? <span className="tag is-info">available</span> : <span className="tag is-danger">unavailable</span>}</p>
                    </div>
                    <div className="column is-one-fith">
                        <a style={{marginBottom: '1rem'}} className="button is-fullwidth is-dark is-outlined" href={track.track_share_url}>Visit Musixmatch</a>
                        {track.has_lyrics === 1 ? <Link data={track} className="button is-fullwidth is-dark is-outlined" to={`/lyrics/track/${track.track_id}`}>View Lyrics</Link> : <code style={{backgroundColor:'transparent', color:'black', paddingLeft:0}}>No lyrics exist for this track</code> }
                    </div>
                </div>
                
                
               
                
            </div>
        </div>
    )

}

export default TrackItem;