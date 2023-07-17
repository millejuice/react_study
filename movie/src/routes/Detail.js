import { useParams } from "react-router-dom";
import React from 'react'

function Detail(){
    const {id} = useParams();
    const [movies,setMovies] = React.useState([]);
    const [loading,setloading] = React.useState(true);
    const getMovie = async ()=>{
        const json = await (await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)).json();
        setMovies(json.data.movies);
        setloading(false);
    }
    
    React.useEffect(()=>{
        getMovie();
    },[]);

    return <h1>
        {loading ? "loading...." : (movies? movies.title : "No movie")}
    </h1>
}
export default Detail;