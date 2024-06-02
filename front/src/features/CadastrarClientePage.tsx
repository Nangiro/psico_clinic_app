import { useEffect, useState } from "react"
import { Input } from "../components/InputText"
import { useCEP } from "../fetch"
import { Button } from "../components/Button"

export default function CadastrarClientePage () {

    const [cep, setCep] = useState("")

    const getCep = useCEP(cep, cep != "")

    const [name, setName] = useState("")
    const [number, setNumber] = useState("")
    const [rua, setRua] = useState("")
    const [estado, setEstado] = useState("")
    const [numero, setNumero] = useState("")
    const [username, setUserName] = useState("")
    const [pwd, setPwd] = useState("")

    useEffect(() => {
        if(getCep.data){
            if(getCep.data.erro) {
                setRua("")
                setEstado("")
                setNumero("")
            } else {
                setRua(getCep.data.logradouro)
                setEstado(getCep.data.localidade)
                setNumero("")
            }
        }
    }, [getCep.data])

    useEffect(() => {
        if(getCep.isError){
            setRua("")
            setEstado("")
            setNumero("")
        }
    }, [getCep.isError])

    const onSubmit = () => {
        // CACAU ADICIONAR USUARIO AQ
    }

    return (
        <div className="w-full h-full bg-[#BEE1E3] flex flex-col gap-10 justify-start items-start p-20">
            <button onClick={() => ""} className="text-[#355245] ">Voltar</button>
            <div className="bg-[#1ABC9C] h-full w-full min-w-[400px] p-10 gap-10 grid-cols-3 grid items-center justify-center">
                <Input 
                    value={name} 
                    onChange={(ev) => {
                        setName(ev.target.value)
                    }}
                    label="Nome"
                />
                <Input 
                    value={number} 
                    onChange={(ev) => {
                        setNumber(ev.target.value)
                    }}
                    label="Celular"
                />
                <Input 
                    value={cep} 
                    onChange={(ev) => {
                        setCep(ev.target.value)
                    }}
                    label="CEP"
                />
                <Input 
                    value={rua} 
                    label="Rua"
                    disabled
                />
                <Input 
                    value={estado} 
                    label="Estado"
                    disabled
                />
                <Input 
                    value={numero} 
                    onChange={(ev) => {
                        setNumero(ev.target.value)
                    }}
                    label="Numero"
                />
                <Input 
                    value={username} 
                    onChange={(ev) => {
                        setUserName(ev.target.value)
                    }}
                    label="Usuário"
                    
                />
                <Input 
                    value={pwd} 
                    onChange={(ev) => {
                        setPwd(ev.target.value)
                    }}
                    label="Senha"
                    type="password"
                />
                <Button label="Salvar" onClick={onSubmit} className="bg-black/60 w-30 h-10"/>
            </div>
        </div>
    )
}