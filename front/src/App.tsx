import { Routes } from 'react-router-dom'
import './App.css'
import { AuthProvider } from './AuthContext'
import LoginPage from './features/LoginPage'

function App() {
  return (
    <div className='w-screen h-screen flex'>
        <AuthProvider>
          <LoginPage/>
          {/* <Routes/> */}
        </AuthProvider>
    </div>
  )
}

export default App
