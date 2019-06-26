import React from 'react'
import {Link} from 'react-router-dom';

const TrackItem = (props) => {
    
    const {track} = props;
    
    return (
        <React.Fragment>
            <tr>
                <td> 
                    <span class="has-text-weight-bold">{track.track_name}</span>
                    <span class="help has-text-link">{track.artist_name}</span>
                </td>
                <td style={{fontSize: '0.8rem'}}>{track.updated_time}</td>
                <td> {track.has_subtitles === 1 ? <span className="tag is-light rounded">available</span> : <span className="tag is-danger">unavailable</span>}</td>
                <td> 
                    <span class="">{track.album_name}</span>
                    <span class="help has-text-link">{track.album_id}</span>
                </td>
                <td><a href={track.track_share_url}><i class="fas fa-link"></i></a></td>
                <td><a href={track.track_share_url}><i class="fas fa-link"></i></a></td>
            </tr>
        </React.Fragment>
    )

}

export default TrackItem;