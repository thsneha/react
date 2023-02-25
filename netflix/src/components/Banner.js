import React,{useState,useEffect} from 'react'
import requests from '../request'
import instance from '../instance'
import './Banner.css'


function Banner() {
    const[movies,setMovies]=useState([])
    // console.log("instance is",instance)

    async function fetchData(){
        const request = await instance.get(requests.fetchNetflixOriginals)
        // console.log("request in banner",request)
        setMovies(
            request.data.results[
                Math.floor(Math.random() * request.data.results.length-1)
            ]

        )
    }
    useEffect(()=>{
        fetchData()
    },[])
    console.log("movies in banner",movies)
    // funtion for checking the movies overview length is greater than 150.
    function truncate(str,n){
        return(str?.length>n?str.substr(0,n-1)+"...":str);
    }




  return (
    <header className="banner"
        style={{
            backgroundSize:"cover",
            backgroundImage:`url("https://image.tmdb.org/t/p/original/${movies.backdrop_path}")`,
            backgroundPosition:"center"
        }}>
            <div className="banner_contents">
                <h1 className="title">
                    {movies?.title||movies?.name||movies?.original_name}
                </h1>
                <h1 className="banner_desc">{truncate(movies?.overview,150)}</h1>

            </div>
    </header>
  )
}

export default Banner