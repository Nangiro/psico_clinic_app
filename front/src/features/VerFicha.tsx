import { useEffect, useState } from "react"
import { Input } from "../components/InputText"
import { Button } from "../components/Button"
import { TextArea } from "../components/TextArea"

export default function VerFicha () {

    const [cep, setCep] = useState("")
    const [name, setName] = useState("")
    const [number, setNumber] = useState("")
    const [rua, setRua] = useState("")
    const [estado, setEstado] = useState("")
    const [numero, setNumero] = useState("")
    const [note, setNote] = useState("")

    const DownloadAtestado = () => {
        const aElement = document.createElement('a');
        aElement.setAttribute('href', './modelo_atestado.docx');
        aElement.setAttribute('download', '');
        document.body.appendChild(aElement);
    	aElement.click();
    	aElement.parentNode?.removeChild(aElement);
    }

    const DownloadEncaminhamento = () => {
        const aElement = document.createElement('a');
        aElement.setAttribute('href', './modelo_encaminhamento.docx');
        aElement.setAttribute('download', '');
        document.body.appendChild(aElement);
    	aElement.click();
    	aElement.parentNode?.removeChild(aElement);
    }

    return (
        <div className="w-full h-full bg-[#BEE1E3] flex flex-col gap-10 justify-start items-start p-20">
            <button onClick={() => ""} className="text-[#355245] ">Voltar</button>
            <div className="bg-[#1ABC9C] h-full w-full min-w-[400px] p-10 gap-10 flex flex-col">
                <div className="grid-cols-3 grid items-center justify-center gap-10">
                    <Input 
                        value={name} 
                        disabled
                        label="Nome"
                    />
                    <Input 
                        value={number} 
                        disabled
                        label="Celular"
                    />
                    <Input 
                        value={cep} 
                        disabled
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
                        label="Numero"
                    />
                </div>
                <TextArea 
                    value={note}
                    onChange={(target) => {
                        setNote(target.target.value)
                    }}
                    label="Anotações"
                    className="h-40"
                />
                <div className="flex gap-6 w-full justify-end">
                    <Button
                        label="Salvar"
                    />
                    <Button
                        label="Baixa modelo de Atestado"
                        onClick={DownloadAtestado}
                    />
                    <Button
                        label="Baixa modelo de Encaminhamento"
                        onClick={DownloadEncaminhamento}
                    />
                </div>
            </div>
        </div>
    )
}