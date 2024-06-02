import './App.css'
import { AuthProvider } from './AuthContext'
import ClientePage from './features/ClientePage'

export default function App() {
  
  return (
    <div className='w-screen h-screen flex'>
        <AuthProvider>
            <ClientePage />
            {/* <LoginPage/> */}
            {/* <Routes/> */}
        </AuthProvider>
    </div>
  )
}

