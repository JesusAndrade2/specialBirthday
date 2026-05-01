import confetti from "canvas-confetti";
import { useEffect,useState } from 'react'

import './App.css'

function App() {
  const [mostrarMensaje, setMostrarMensaje] = useState(false);

  return (
    <>



            <div className="container">
      <h1 className='title'> 
        Feliz Cumpleaños 
        <span>Tati</span>
        <span>🎉</span> <span>💕</span>
      </h1>

      <h2>Para alguien muy especial 💖 </h2>

      <p>
        Hoy es un día increíble porque celebramos tu existencia 💞
      </p>

      <button className='btn-led' onClick={
        () => {
          setMostrarMensaje(true);

            confetti({
              particleCount: 200,
              spread: 120,
              startVelocity: 40,
              scalar: 1.2,
        });
        }
      }
        >
        Ver sorpresa 😊
      </button>

      {mostrarMensaje && (
        <div className="mensaje">
          <p>
             Espero que este día esté lleno de alegría, amor y momentos inolvidables, un abrazo a la distancia y no olvides que aqui hay alguien que te quiere mucho {";)"} mucho mucho {"<3"}
          </p>
          
        </div>
      )}

    </div>

      
    </>
  );
}
export default App
