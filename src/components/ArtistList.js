import React from 'react';
import { Link } from 'react-router-dom';

const ArtistList = (props) => {

    const renderList = ({ artistData }) => {
      
        if (artistData) {
            return artistData.map((item, index) => {
                const myImage= {
                    background: `url('/images/covers/${item.cover}.jpg')`
                }
                return (
                    <Link to="/" key={index} style={myImage} className="artist_item">
                        <div>{item.name}</div>
                    </Link>
                )
            })
        } else {
            return (
                <img src="/images/loader.gif" alt="loading"></img>
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