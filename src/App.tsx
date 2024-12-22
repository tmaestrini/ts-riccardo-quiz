import { Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import { AppContextProvider } from './context/AppContext'

function App() {
  return (
    <div style={{ width: '100%', height: '100%' }}>
      <AppContextProvider>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </AppContextProvider>
    </div>
  )
}

export default App
