import { Routes } from 'react-router-dom'
import './App.css'
import { AuthProvider } from './AuthContext'
import LoginPage from './features/LoginPage'
import LandingPage from './features/LandingPage'

function App() {
  return (
    <div className='w-screen h-screen flex'>
        <AuthProvider>
            <LandingPage />
            {/* <LoginPage/> */}
            {/* <Routes/> */}
        </AuthProvider>
    </div>
  )
}

export default App
