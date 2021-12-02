import React from "react";
// Import the Tile component
import { Tile } from "../tile/Tile";
// Extract the array of data from the props value passed as an argument to TileList
export const TileList = ({ tiles }) => {



  return (
    <div>
      {/* Use the map() method on the array prop */}
      
      {tiles.map((tile, index) => (
        // The callback should return a Tile component with the object parameter passed as a prop and the index parameter used as the component’s key
        <Tile key={index} tile={tile}/>
      ))}
    </div>
  );
};
