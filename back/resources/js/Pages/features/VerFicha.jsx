import { useEffect, useState } from "react"
import { Input } from "../components/InputText"
import { Button } from "../components/Button"
import { TextArea } from "../components/TextArea"
import { ArrowLeft } from "react-feather"
import { Link, router } from '@inertiajs/react'

export default function VerFicha({ id, schedule, patient }) {

    const [cep, setCep] = useState(patient.cep)
    const [name, setName] = useState(patient.user.name)
    const [number, setNumber] = useState(patient.cellphone)
    const [rua, setRua] = useState(patient.address)
    const [estado, setEstado] = useState(patient.state)
    const [numero, setNumero] = useState(patient.number)
    const [note, setNote] = useState(schedule.session.note)

    const DownloadAtestado = () => {
        router.post(route('psychologist.baixarFicha', 1))
    }

    const DownloadEncaminhamento = () => {
        router.post(route('psychologist.baixarFicha', 2))
    }

    const request = {
        'id': schedule.id,
        'note': note,
    }

    const onSubmit = () => {
        router.post(route('psychologist.salvarFicha'), request)
    }

    const voltar = () => {
        router.get(route('psychologist.index', id))
    };

    return (
        <div className="w-full h-full bg-background flex flex-col gap-10 justify-start items-start p-20">
            <button onClick={voltar} className="bg-[#35C9B6] mt-4 text-bodyText font-poppins text-[16px] gap-1 flex"><ArrowLeft /> Voltar</button>
            <div className="bg-background shadow-xl h-full w-full min-w-[400px] p-10 gap-10 flex flex-col">
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
                        disabled
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
                        className="bg-[#35C9B6] mt-4 text-bodyText font-poppins text-[16px] gap-1 flex"
                        label="Salvar" onClick={onSubmit}
                    />
                    <Button
                        className="bg-[#35C9B6] mt-4 text-bodyText font-poppins text-[16px] gap-1 flex"
                        label="Baixa modelo de Atestado"
                        onClick={DownloadAtestado}
                    />
                    <Button
                        className="bg-[#35C9B6] mt-4 text-bodyText font-poppins text-[16px] gap-1 flex"
                        label="Baixa modelo de Encaminhamento"
                        onClick={DownloadEncaminhamento}
                    />
                </div>
            </div>
        </div>
    )
}
