import React from "react";
import './Tile.css';

// Extract the data object from the props value passed as an argument to Tile
export const Tile = ({ tile }) => {
    const tileObjectValues = Object.values(tile);
    console.log(`tileObjectValues: ${tileObjectValues}`); // this is what i need
    // logs: ['firstName', 'lastName', 'phoneNumber', 'email'] 

    // I'm not 100% on the way i've written the code below, I hade trouble displaying 2 values in one line and the rest on a single line
    // to get around this I manually entered the array indexs
    // Previously i used .map which printed each item of data in the array, but only on separate lines 
    return (
        <div className="tile-container">
            <p>{tileObjectValues[0]} {tileObjectValues[1]}</p>
            <p>{tileObjectValues[2]}</p>
            <p>{tileObjectValues[3]}</p>
        </div>

      );
}


