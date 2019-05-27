import React, { useState } from 'react'
import data from './data.json'
import Loader from './loader'
import logo from '../../images/platzi.png'
import video from '../../video/que-es-core.mp4'
import '../../sass/sass.scss'
import '../../less/less.less'
import '../../stylus/stylus.styl'

console.log(data)
function App() {
  const [loaderList, setLoaderList] = useState([])
  async function handleClick() {
    setLoaderList(data.loaders)
    const { alerta } = await import('./alert.js')
    alerta('omg, este módulo ha cargado dinamicamente')
  }
  return (
    <div>
      <p className="sass">
        Esto está escrito con sass
      </p>
      <p className="less">
        Esto está escrito con Less
      </p>
      <p className="stylus">
        Esto está escrito con Stylus
      </p>
      <p className="post-css">
        Esto está escrito con PostCSS
      </p>
      <video src={video} width={360} controls poster={logo} />
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
