import React from "react";
import './Tile.css';

// Extract the data object from the props value passed as an argument to Tile
export const Tile = ({ tile }) => {
    const tileObjectValues = Object.values(tile);
    console.log(`tileObjectValues: ${tileObjectValues}`); // this is what i need
    // logs: ['firstName', 'lastName', 'phoneNumber', 'email'] 

    return (
        <div className="tile-container">
            <p>{tile.firstName} {tile.lastName}</p>
            <p>{tile.phone}</p>
            <p>{tile.email}</p>
        </div>

      );
}


