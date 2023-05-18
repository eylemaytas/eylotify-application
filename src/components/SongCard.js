import React from "react";
import { useState } from "react";


function SongCard({song}){

const [isQuote,setIsQuote] = useState(true)

function handleClick(){
    setIsQuote(!isQuote)
}

    return (
        <li className="card">
            <img onClick={handleClick}src={song.image} alt={song.title} />
            <h4>{song.title}</h4>
            <p>Artist: {song.artist}</p>
            <p> {song.quotes}</p>
        <p> {isQuote ? song.releaseYear : song.musicType } </p>  
        </li>
    )
}
export default SongCard





// import React from "react";
// import { useState } from "react";


// function SongCard({song}){

// const [isQuote,setIsQuote] = useState(true)

// function handleClick(){
//     setIsQuote(!isQuote)
// }

//     return (
//         <li className="card">
//             <img onClick={handleClick}src={song.image} alt={song.title} />
//             <h4>{song.title}</h4>
//             <p>Artist: {song.artist}</p>
//             <p> {song.quotes}</p>
//         <p> {isQuote ? song.releaseYear : song.musicType } </p>  
//         </li>
//     )
// }
// export default SongCard