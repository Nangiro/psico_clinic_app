import { useState } from "react";
import { Input } from "../components/InputText";
import { Button } from "../components/Button";

export default function LoginPage () {

    const [username, setUserName] = useState("")
    const [pwd, setPwd] = useState("")

    const onSubmit = () => {
        // CACAU ADICIONAR LOGIN AQUI, NAVEGAR PARA AREA LOGADA
    }

    return (
        <div className="w-full h-full bg-[#BEE1E3] flex justify-center items-center">
            <div className="w-[50%] h-[300px] bg-[#1ABC9C] rounded-lg border border-black p-8 flex flex-col gap-4 justify-center items-center">
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

                <Button label="Entrar" onClick={onSubmit}/>
            </div>
        </div>
    )
}