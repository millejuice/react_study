import './App.css';
import React,{useState, useEffect} from 'react';
import axios from 'axios';

function App() {
  const [posts,setPosts] = useState([]);

  useEffect(async ()=> {
  //   axios({
  //     method : 'GET',
  //     url : 'https://jsonplaceholder.typicode.com/photos'
  //   }).then(response => setPosts(response.data))
  // })
    try{
      const response = await axios.get('https://jsonplaceholder.typicode.com/photos');
      setPosts(response.data);
    }catch(error){
      console.log(error)
    }})

  return (
    <div className="App">
      <ul>
        {posts.map(post=>(
          <li key={post.id}>
            <div>{post.title}</div>
            <div><img src={post.thumbnailUrl} /></div>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default App;
