import React from 'react';
import Header from "./Header";
import NewSongForm from "./NewSongForm"
import SongList from "./SongList"
import Search from "./Search"
import NavBar from "./NavBar"
import { useState, useEffect } from 'react';
import {Route, Switch} from "react-router-dom"


function App(){
    const [songs, setSongs] = useState([])
    const [searchText, setSearchText] = useState("")
    const [formData,setFormData] = useState({})

 useEffect(() => {
      fetch("http://localhost:3000/songs")
      .then(res=>res.json())
      .then(songData => setSongs(songData))
    }, [])

function updateSearchText(event){
    setSearchText(event.target.value)
    }

 const filteredSongs = songs.filter(song=> {
      if(searchText === ""){
        return true
      }
      return song.title.toUpperCase().includes(searchText.toUpperCase()) || song.artist.toUpperCase().includes(searchText.toUpperCase())
      
    })

    function addSong(event){
      event.preventDefault()

      fetch("http://localhost:3000/songs",{
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body:JSON.stringify(formData)
      })
      .then(res=>res.json())
      .then(newSong => setSongs([...songs,newSong]))
    }

    function updateFormData(event){
      if(event.target.name === "releaseYear"){
        setFormData({...formData, [event.target.name]: Number(event.target.value)})
      }else {
  setFormData({...formData, [event.target.name]: event.target.value})
    }}

    return(
      <div className="spotify-container">
        <NavBar />
        <Header />
        <Switch>
          <Route path="/add_song">
            <NewSongForm addSong={addSong} updateFormData={updateFormData}/>
            <SongList songs={filteredSongs}/>
          </Route>
          <Route path="/search">
          <Search updateSearchText={updateSearchText} searchText={searchText}/>
          <SongList songs={filteredSongs}/>
          </Route>
          <Route exact path="/">
            <h3>WELCOME TO THE LIST OF MY ALL TIME FAV SONGS!</h3>
            <SongList songs={songs}/>
          </Route>
        </Switch>
      </div>
    )
}
export default App







// import React from 'react';
// import Header from "./Header";
// import SongPage from "./SongPage.js";
// import { useState, useEffect } from 'react';




// function App(){
//     const [songs, setSongs] = useState([])
//     const [searchText, setSearchText] = useState("")
//     const [formData,setFormData] = useState({})


//     useEffect(() => {
//       fetch("http://localhost:3000/songs")
//       .then(res=>res.json())
//       .then(songData => setSongs(songData))
//     }, [])


//     function updateSearchText(event){
//     setSearchText(event.target.value)
//     }

//     const filteredSongs = songs.filter(song=> {
//       if(searchText === ""){
//         return true
//       }
//       return song.title.toUpperCase().includes(searchText.toUpperCase()) || song.quotes.toUpperCase().includes(searchText.toUpperCase())
      
//     })

//     function addSong(event){
//       event.preventDefault()

//       fetch("http://localhost:3000/songs",{
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//           "Accept": "application/json"
//         },
//         body:JSON.stringify(formData)
//       })
//       .then(res=>res.json())
//       .then(newSong => setSongs([...songs,newSong]))
//     }

//     function updateFormData(event){
//   setFormData({...formData, [event.target.name]: event.target.value})
//     }

//     return(
//       <div className="spotify-container">
//         <Header />
//         <SongPage songs={filteredSongs} updateSearchText={updateSearchText} addSong={addSong} updateFormData={{updateFormData}}/>
//       </div>
//     )
// }
// export default App