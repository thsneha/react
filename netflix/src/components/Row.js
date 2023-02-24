import React,{useState,useEffect} from 'react'
import instance from '../instance'
import axios from 'axios'
import './Row.css'
const base_url = "https://image.tmdb.org/t/p/original/";

// asynchronous fnctons exection and the data to be given to a state automatically when the component to be rendering
function Row({title,fetchUrl}) {
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
       {movies.map((movie)=>(
        <img key={movie.id}
        className="row__poster"
        src={`${base_url}${movie.poster_path}`}
        alt={movie.name}/>

       )
       )} 
      </div>
    </div>
  )
}

export default Row