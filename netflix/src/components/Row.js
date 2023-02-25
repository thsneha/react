import React,{useState,useEffect} from 'react'
import instance from '../instance'
import axios from 'axios'
import './Row.css'
const base_url = "https://image.tmdb.org/t/p/original/";

// asynchronous fnctons exection and the data to be given to a state automatically when the component to be rendering
function Row({title,fetchUrl,isLargeRow}) {
    // console.log("fetchurl---------",fetchUrl)

    const [movies,setMovies] = useState([])
    async function fetchData(){
        const request=await instance.get(fetchUrl)
        // console.log("request",request)
        setMovies(request.data.results)
        
          
       
    }
    useEffect(()=>{
        fetchData()
    },[])
    console.log("datamovie is",movies)
   
  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="row__posters">
        {/* && is a truthy condition so elsepart is not needed */}
       {movies.map((movie)=>(
        <img key={movie.id}
        className={`row__poster ${isLargeRow && 'row__posterLarge'}`}
        src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`}
        //start from the second row the images thus changed to cover pic
        alt={movie.name}/>

       )
       )} 
      </div>
    </div>
  )
}

export default Row