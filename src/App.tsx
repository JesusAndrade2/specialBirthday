import confetti from "canvas-confetti";
import { useEffect,useState } from 'react'

import './App.css'

function App() {
  const [mostrarMensaje, setMostrarMensaje] = useState(false);
  const targetDate = new Date(2026, 4, 1, 0, 0, 0);
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const [unlocked, setUnlocked] = useState(false);


   useEffect(() => {
    const timer = setInterval(() => {
      const now = Date.now();
      const difference = targetDate.getTime() - now;

      if (difference <= 0) {
        setUnlocked(true);

        // 🎉 confetti automático al desbloquear
        confetti({
          particleCount: 200,
          spread: 120,
        });

        clearInterval(timer);
        return;
      }

      setTimeLeft({
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / (1000 * 60)) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  

  return (
    <>

 {!unlocked && (
        <div className="overlay">
          <h1>⏳ Falta poco...</h1>

          <div className="countdown">
            <div>
              <span>{timeLeft.days}</span>
              <p>días</p>
            </div>
            <div>
              <span>{timeLeft.hours}</span>
              <p>horas</p>
            </div>
            <div>
              <span>{timeLeft.minutes}</span>
              <p>min</p>
            </div>
            <div>
              <span>{timeLeft.seconds}</span>
              <p>seg</p>
            </div>
          </div>
        </div>
      )}


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
          <p>Feliz Cumpleaos!! :*</p>
          
        </div>
      )}

    </div>

      
    </>
  );
}
export default App
