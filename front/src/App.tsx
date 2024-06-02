import './App.css'
import { AuthProvider } from './AuthContext'
import AnunciarChegada from './features/AnunciarChegadaPage'
import CadastrarClientePage from './features/CadastrarClientePage'
import ClientePage from './features/ClientePage'
import SecretariaPage from './features/SecretariaPage'

export default function App() {
  
  return (
    <div className='w-screen h-screen flex'>
        <AuthProvider>
            <AnunciarChegada />
            {/* <LoginPage/> */}
            {/* <Routes/> */}
        </AuthProvider>
    </div>
  )
}

