import React from 'react';
import { Link } from 'react-router-dom';

const ArtistList = (props) => {
    console.log(props);
    const renderList = ( artistData ) => {
        console.log(typeof(artistData))
        if (artistData) {
            return artistData.map((item, index) => {
                return (
                    <Link to="/" key={index}>
                        <div>{item.name}</div>
                    </Link>
                )
            })
        }

    }

    return (
        <div className="artist_list">
            <h4>List of Artists</h4>
            {renderList(props)}
        </div>
    )
}

export default ArtistList;