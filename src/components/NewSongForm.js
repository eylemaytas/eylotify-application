import React from "react";
import {useState} from "react"

function NewSongForm({addSong,updateFormData}){
    const [formSubmitted,setFormSubmitted] = useState(false)
    return (
     <div className="new-song-form">
     <h2>New Song</h2>
     { formSubmitted ? <h1>Thank you! You just added a new song to my list!</h1> :
     <form onSubmit={(event) => {
        addSong(event)
        setFormSubmitted(formSubmitted => !formSubmitted)
     }}>
        <input onChange={updateFormData} type="text" name="title" placeholder="Song name" required></input>
        <input onChange={updateFormData} type="text" name="artist" placeholder="Artist name" required></input>
        <input onChange={updateFormData} type="text" name="image" placeholder="Image URL" required></input>
        <input onChange={updateFormData}type="text" name="quotes" placeholder="Song quotes" required></input>
        <input onChange={updateFormData}type="number" name="relaseYear" placeholder="Song release year" required></input>
        <input onChange={updateFormData}type="text" name="musicType" placeholder="Song's music type" required></input>
        <button className="button1" type="submit">Add Song</button>
    </form> }
     </div>
    )
}
export default NewSongForm




// import React from "react";

// function NewSongForm({addSong,updateFormData}){
//     return (
//      <div className="new-song-form">
//      <h2>New Song</h2>
//      <form onSubmit={addSong}>
//         <input onChange={updateFormData} type="text" name="title" placeholder="Song name" required></input>
//         <input onChange={updateFormData} type="text" name="artist" placeholder="Artist name" required></input>
//         <input onChange={updateFormData} type="text" name="image" placeholder="Image URL" required></input>
//         <input onChange={updateFormData}type="text" name="quotes" placeholder="Song quotes" required></input>
//         <input onChange={updateFormData}type="number" name="relaseYear" placeholder="Song release year" required></input>
//         <input onChange={updateFormData}type="text" name="musicType" placeholder="Song's music type" required></input>
//         <button className="button1" type="submit">Add Song</button>
//     </form>
//      </div>
//     )
// }
// export default NewSongForm