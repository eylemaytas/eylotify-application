import React from "react";

function Search({updateSearchText,searchText}){
    return(
        <div className="searchbar">
            <label htmlFor="search">Search Songs:</label>
            <input
            type="text"
            id="search"
            placeholder="Type a name to search..."
            onChange={updateSearchText}
            value={searchText}
            ></input>
        </div>
    )
}
export default Search




// import React from "react";

// function Search({updateSearchText}){
//     return(
//         <div className="searchbar">
//             <label htmlFor="search">Search Songs:</label>
//             <input
//             type="text"
//             id="search"
//             placeholder="Type a name to search..."
//             onChange={updateSearchText}
//             ></input>
//         </div>
//     )
// }
// export default Search