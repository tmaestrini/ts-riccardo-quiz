import jwLogo from '../assets/Jurassic-World-Emblem.png'
import { Scoreboard } from '../components/Canvas/Scoreboard'

export default function Score() {
  
  return (
    <>
      <div>
          <img src={jwLogo} className="logo jurassicWorld" alt="Jurassic World" />
      </div>
      <h1 className="title">Scoreboard</h1>
      <Scoreboard />
    </>
  )
}