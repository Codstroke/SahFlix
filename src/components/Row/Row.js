import React, {useEffect, useState} from 'react';
import "./Row.css";
import axios from "axios";
import YouTube from "react-youtube";


const base_url = "https://image.tmdb.org/t/p/original";


const Row = ({title, fetchUrl, isLargeRow }) => {
    const [movies, setMovies] = useState([]);

    const [trailerUrl, setTrailerUrl] = useState("");
    
    console.log("process.env.REACT_APP_API", process.env.REACT_APP_API);
    useEffect(() => {
        const fetchData = async () => {
            const response = await axios.get(`${process.env.REACT_APP_API}${fetchUrl}`);
            setMovies(response.data.results);
            return response;

        };

        fetchData();
    }, [fetchUrl]);
 //console.log("movies", movies);



const handleTrailer = (movie) => {
    if(trailerUrl){
        setTrailerUrl("");

    } else{
        (movie?.name || "")
        .then(url => {
            const urlParams = new URLSearchParams(new URL(url).search);
            setTrailerUrl(urlParams.get('v'));
        }).catch(() => console.log('Temporarily unavailable'))
     }

    
};

const opts = {
    height:"390",
    width:"100%",
    playerVars:{
        autoplay:1,

    },
}


  return (
    <div className="row">
        <h2>{title}</h2>
        <div className="row-posters">
            {movies && movies.map((movie) => (
                <img 
                
                key={movie.id}
                onClick= { () => handleTrailer(movie)}
                className={`row-poster ${isLargeRow && "row-posterLarge"}`}
                src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`}
                alt={movie.name}
                />
            ))}
        </div>

       <YouTube
          videoId="C_rsdqKA6ok"
          opts={opts}
          />
      
    </div>
  );
};

export default Row;