import React from 'react';
import { Link } from 'react-router-dom';

const ArtistList = (props) => {
    
    const renderList= ()=>{

    }

    return (
        <div className="artist_list">
            <h4>List of Artists</h4>
            {renderList(props)}
        </div>
    )
}