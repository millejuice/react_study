function Home(){
    const [loading, setloading]=React.useState(true);
  const [movies,setMovies]=React.useState([]);
  const getMovies=async ()=>{
    const json=await (
      await fetch(
        "https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year"
      )
    ).json();
    setMovies(json.data.movies);
    setloading(false);
  }
  React.useEffect(()=>{
    getMovies();
  },[]);
  console.log(movies);

//url에서 response 받아오고 response에서 json을 받아온다
  return <div>
    {loading ? <h1>loading</h1> : 
    movies.map((movie)=><Movie 
    ImageUrl={movie.medium_cover_image} 
    title={movie.title} summary={movie.summary} 
    genres={movie.genres}/>)
    }
  </div>
}

export default Home;