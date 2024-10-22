import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'

function App() {
  const [jokes, setJokes] = useState([])

  useEffect(()=>{
    axios.get('/api/jokes')
    .then((response)=>{
      setJokes(response.data)
    })
    .catch((error)=>{
      // console.log(error)
      
    })
  })

 

  return (
    <>
      <h1>hello T</h1>
      <p>JOKES:{jokes.length}</p>

      {jokes.map((joke, index)=>(
        <div key={joke.id}>
          <h3>{joke.title}</h3>
          <p>{joke.content}</p>
        </div>
      ))}
    </>
  )
}

export default App


//if the app is not loading and showing 'Cannot GET /api/jokes' then restart both frontend and backend. 
//then check in the backend port that if it is showing the JSON
// if yes then restart front end and open local host in frontend 