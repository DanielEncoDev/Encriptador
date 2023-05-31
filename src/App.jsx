import { useState } from 'react'
import './App.css'
import Logo from './components/logo'
import Icono from './components/icono'

function App() {

  const [texto, setTexto] = useState('');

  const encrypt = () => {
    setTexto(document.getElementById("texto").value)
  }

  const deencrypt = () => {
    alert("deencriptar")
  }


  return (
    <div className="App">
      <Logo/>
      <div class="grid grid-cols-3 gap-10 h-screen">
        <div class= "col-span-2 flex-col">
          <div>
            <input id="texto" class="sinborde" type="text" placeholder="Ingrese el texto aqui"/>
          </div>
          <div class="h-4/6 grid content-end">
            <div class="">
              <img src={"Vector.png"} />
              <p>Solo letras minúsculas y sin acentos</p>
            </div>
            <div>
              <button onClick={encrypt}>Encriptar</button>
              <button onClick={deencrypt} className='button2'>Desencriptar</button>
            </div>
          </div>
        </div>
        <div  class="bg-white rounded-3xl mr-10 h-5/6 ">
          {texto ? texto : "imagen.png"}
          {/* <button className='button2'>Copiar</button> */}
        </div>
      </div>
    </div>
  )
}

export default App
