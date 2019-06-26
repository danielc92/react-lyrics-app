import React from 'react'
import {Link} from 'react-router-dom';

const TrackItem = (props) => {
    
    const {track} = props;
    
    return (
        <React.Fragment>
            <tr>
                <td> 
                    <span className="has-text-weight-bold">{track.track_name}</span>
                    <span className="help has-text-link">By: {track.artist_name}</span>
                </td>
                
                <td> {track.has_subtitles === 1 ? <span className="tag is-light rounded">available</span> : <span className="tag is-danger">unavailable</span>}</td>
                <td> 
                    <span className="">{track.album_name}</span>
                    <span className="help has-text-link">{track.album_id}</span>
                </td>
                <td><a href={track.track_share_url}><i className="fas fa-link"></i></a></td>
                <td>{
                    track.has_lyrics === 1 ?
                    <Link className="has-text-primary" data={track} to={`/lyrics/track/${track.track_id}`}><i class="fas fa-music"></i></Link>:
                    <span>-</span>
                }</td>
                <td style={{fontSize: '0.8rem'}}>{track.updated_time}</td>
            </tr>
        </React.Fragment>
    )

}

export default TrackItem;