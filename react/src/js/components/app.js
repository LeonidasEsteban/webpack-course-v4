import React, { useState } from 'react'
import data from './data.json'
import Loader from './loader'
console.log(data)
function App() {
  const [loaderList, setLoaderList] = useState([])
  function handleClick() {
    setLoaderList(data.loaders)
  }
  return (
    <div>
      Que linda aplicación hecha en React.js
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
