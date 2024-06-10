import { useEffect, useState } from "react";
import axios from 'axios';
import "./App.css";

function App() {
  const [jokes, setjokes] = useState([]);

  useEffect(()=> {
    axios.get('/api/jokes')
    .then((response) => {
      setjokes(response.data);
    })
    .catch((error)=>
    {
      console.log(error);
    })
  })
  return (
    <>
      <h1>Mohd Atif Ansari...💕</h1>
      <h3>jokes: {jokes.length}</h3>

      
      {jokes.map((joke) => (
                <div key={joke.id}>
          <h>{joke.title}</h>
          <li>{joke.content}</li>
        </div>
      ))}
      
    </>
  );
}

export default App;
