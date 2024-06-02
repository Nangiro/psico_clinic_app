import './App.css'
import { AuthProvider } from './AuthContext'
import AnunciarChegada from './features/AnunciarChegadaPage'
import CadastrarClientePage from './features/CadastrarClientePage'
import ClientePage from './features/ClientePage'
import PsicologaPage from './features/PsicologaPage'
import SecretariaPage from './features/SecretariaPage'
import VerConsultas from './features/VerConsultas'
import VerFicha from './features/VerFicha'

export default function App() {
  
  return (
    <div className='w-screen h-screen flex'>
        <AuthProvider>
            <VerFicha />
            {/* <LoginPage/> */}
            {/* <Routes/> */}
        </AuthProvider>
    </div>
  )
}

