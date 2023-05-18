import React from "react";
import SongCard from "./SongCard"

function SongList({songs}){

    const songCardsComponents = songs.map((song => {
        return <SongCard key={song.id} song={song} />
    }))

    return (
        <ul className="cards">{songCardsComponents}</ul>
    )
}

export default SongList




// import React from "react";
// import SongCard from "./SongCard"

// function SongList({songs}){

//     const songCardsComponents = songs.map((song => {
//         return <SongCard key={song.id} song={song} />
//     }))

//     return (
//         <ul className="cards">{songCardsComponents}</ul>
//     )
// }

// export default SongList