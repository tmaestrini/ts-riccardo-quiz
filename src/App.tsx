import { Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import { AppContextProvider } from './context/AppContext'

function App() {
  return (
    <>
      <div className="app-container" />
      <div className="content-wrapper">
        <AppContextProvider>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </AppContextProvider>
      </div>
    </>
  )
}

export default App
