import { useEffect, useState } from "react"
import { Input } from "../components/InputText"
import { getWithNotCORS } from "../fetch"
import { Button } from "../components/Button"
import { Link, router } from '@inertiajs/react'
import { QueryClient, QueryClientProvider } from 'react-query'

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            refetchOnWindowFocus: false
        }
    }
})

export default function CadastrarClientePage({ id }) {

    const voltar = () => {
        router.get(route('secretary.index', id))
    };

    const [cep, setCep] = useState("")

    getWithNotCORS(`https://viacep.com.br/ws/${cep}/json/`).then((res) => {
        setRua(res.logradouro)
        setEstado(res.localidade)
    }).catch(() => {
        setRua("")
        setEstado("")
    })

    const [name, setName] = useState("")
    const [cellphone, setCellphone] = useState("")
    const [address, setRua] = useState("")
    const [state, setEstado] = useState("")
    const [city, setCidade] = useState("")
    const [number, setNumber] = useState("")
    const [username, setUserName] = useState("")
    const [password, setPwd] = useState("")
    const [email, setEmail] = useState("")

    const request = {
        'id': id,
        'name': name,
        'cellphone': cellphone,
        'address': address,
        'state': state,
        'city': city,
        'number': number,
        'username': username,
        'password': password,
        'cep': cep,
        'email': email
    }

    const onSubmit = () => {
        router.post(route('secretary.storeClient'), request)
    }

    return (
        <QueryClientProvider client={queryClient}>
            <div className="w-full h-full bg-[#BEE1E3] flex flex-col gap-10 justify-start items-start p-20">
                <button onClick={voltar} className="text-[#355245] ">Voltar</button>
                <div className="bg-[#1ABC9C] h-full w-full min-w-[400px] p-10 gap-10 grid-cols-3 grid items-center justify-center">
                    <Input
                        value={username}
                        onChange={(ev) => {
                            setUserName(ev.target.value)
                        }}
                        label="Nome de usuário"

                    />
                    <Input
                        value={name}
                        onChange={(ev) => {
                            setName(ev.target.value)
                        }}
                        label="Nome completo"
                    />
                    <Input
                        value={email}
                        type="email"
                        onChange={(ev) => {
                            setEmail(ev.target.value)
                        }}
                        label="E-mail"
                    />
                    <Input
                        value={password}
                        onChange={(ev) => {
                            setPwd(ev.target.value)
                        }}
                        label="Senha"
                        type="password"
                    />
                    <Input
                        value={cellphone}
                        onChange={(ev) => {
                            setCellphone(ev.target.value)
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
                        value={address}
                        onChange={(ev) => {
                            setRua(ev.target.value)
                        }}
                        label="Rua"
                    />
                    <Input
                        value={city}
                        onChange={(ev) => {
                            setCidade(ev.target.value)
                        }}
                        label="Cidade"
                    />
                    <Input
                        value={state}
                        onChange={(ev) => {
                            setEstado(ev.target.value)
                        }}
                        label="Estado"
                    />
                    <Input
                        value={number}
                        onChange={(ev) => {
                            setNumber(ev.target.value)
                        }}
                        label="Número"
                    />
                    <Button label="Salvar" onClick={onSubmit} className="bg-black/60 w-30 h-10" />
                </div>
            </div>
        </QueryClientProvider>
    )
}
