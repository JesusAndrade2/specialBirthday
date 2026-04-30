import { useState } from 'react'

import './App.css'

function App() {
  const [mostrarMensaje, setMostrarMensaje] = useState(false);
  return (

    <div className="container">
      <h1 className='title'> 
        Feliz Cumpleaños
        <span>🎉</span> <span>💕</span>
      </h1>

      <h2>Para alguien muy especial 💖</h2>

      <p>
        Hoy es un día increíble porque celebramos tu existencia ✨
      </p>

      <button className='btn-led' onClick={() => setMostrarMensaje(true)}>
        Ver sorpresa 🎁
      </button>

      {mostrarMensaje && (
        <div className="mensaje">
          <p>
            Gracias por estar en mi vida. Espero que este día esté lleno de
            alegría, amor y momentos inolvidables 💕
          </p>
        </div>
      )}
    </div>
  );
}
export default App
