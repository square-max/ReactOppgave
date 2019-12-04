import React, {useState} from 'react';
import Players from './components/Players'
import Favourites from './components/Favourites'
import './App.css'

const App = () => {
  const [favs, setFavs] = useState([])

  const addFavs = (obj) => {
    setFavs([...favs, obj.img])
  }
  const deleteMe = (nummer) => {
    setFavs(favs.filter( fav => fav != favs[nummer]))
  }

  return (
  <div className="App">
    <h1>England National Team</h1>
    <Favourites deleteMe={deleteMe} favs={favs} />
    <Players addFavs={addFavs} />
  </div>  
  )
}

export default App;
