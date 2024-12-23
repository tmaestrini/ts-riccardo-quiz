import jwLogo from '../assets/Jurassic-World-Emblem.png'
import { Canvas } from '../components/common/Canvas'

export default function Home() {
  
  return (
    <>
      <div>
          <img src={jwLogo} className="logo jurassicWorld" alt="Jurassic World" />
      </div>
      <h1 className="title">Riccardos Geburtstag</h1>
      <Canvas />
    </>
  )
}