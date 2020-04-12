import React from 'react';
import { Link } from 'react-router-dom';

const ArtistList = (props) => {

    const renderList = ({ artistData }) => {
        console.log(artistData)
        if (artistData) {
            return artistData.map((item, index) => {
                return (
                    <Link to="/" key={index}>
                        <div>{item.name}</div>
                    </Link>
                )
            })
        } else {
            return (
                <img src="/images/loader.gif"></img>
            )
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