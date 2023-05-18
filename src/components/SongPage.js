import React from "react";
import NewSongForm from "./NewSongForm"
import SongList from "./SongList"
import Search from "./Search"


function SongPage({songs, updateSearchText,addSong,updateFormData}){
    return (
        <main classsName="container">
            <Search updateSearchText={updateSearchText}/>
            <NewSongForm addSong={addSong} updateFormData={updateFormData}/>
            <SongList songs={songs}/>
        </main>
    )
}

export default SongPage;






// import React from "react";
// import NewSongForm from "./NewSongForm"
// import SongList from "./SongList"
// import Search from "./Search"


// function SongPage({songs, updateSearchText,addSong,updateFormData}){
//     return (
//         <main classsName="container">
//             <Search updateSearchText={updateSearchText}/>
//             <NewSongForm addSong={addSong} updateFormData={updateFormData}/>
//             <SongList songs={songs}/>
//         </main>
//     )
// }

// export default SongPage;