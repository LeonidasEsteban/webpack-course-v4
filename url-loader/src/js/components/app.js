import React, { useState } from 'react'
import data from './data.json'
import Loader from './loader'
import logo from '../../images/platzi.png'
import video from '../../video/que-es-core.mp4'
console.log(data)
function App() {
  const [loaderList, setLoaderList] = useState([])
  function handleClick() {
    setLoaderList(data.loaders)
  }
  return (
    <div>
      <video src={video} width={360} controls autoplay poster={logo} />
      <p>
        <img src={logo} alt="" width={40} />
      </p>
      <p>
        Que linda aplicación hecha en React.js
      </p>
      <ul>
        {
          loaderList.map((item, id)=> <Loader {...item} key={id} />)
        }
      </ul>
      <button onClick={handleClick}>Mostrar lo aprendido hasta ahora</button>
    </div>
  )
}

export default App
