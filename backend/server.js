const express = require('express');
let data = require("./data.json")
const cors = require('cors');

let app = express()

app.use(cors())
app.get('/movies', (req, res)=>{
    res.json(data);
})
// app.get("/movies", (req, res)=>{
//     let allGenreObjects = data.map((el)=>{
//         return el.genre;
//     })
    
//     let uniqueGenreObjects = [];
//     for(let i=0;i<allGenreObjects.length;i++){
//         let genreId = allGenreObjects[i]["_id"];

//         let index = uniqueGenreObjects.findIndex((el)=>{
//             return el._id == genreId;
//         })
//         if(index==-1){
//             uniqueGenreObjects.push(allGenreObjects[i]);
//         }
//     }
//     res.json(uniqueGenreObjects)
// })

app.listen(4000);