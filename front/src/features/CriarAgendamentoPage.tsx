import { useState } from "react";
import { useForm } from "react-hook-form";

export default function CriarAgendamentoPage () {

    const [clientes, setClientes] = useState([{name: "Daniel", id: 1}, {name: "Kira", id: 3}])
    const [psicologas, setPsicologas] = useState([{name: "Pannain", id: 2}])

    const { register, handleSubmit, formState: { isValid } } = useForm({
        defaultValues: {
            pacient_id: -1,
            psicologa_id: -1,
            schedule_at: ''
        }
    })

    const onSubmit =( data: any )=> {
        console.log(data)
    }

    return (
        <div className="w-full h-full bg-background flex flex-col gap-10 justify-start items-start p-20">
            <h1 className="font-bold font-poppins">Agendamento</h1>
            <div className="bg-background min-h-[400px] flex gap-10 w-full min-w-[400px] flex-wrap overflow-auto items-center">
                <img className="w-full max-w-[480px]" src="https://cdn.pixabay.com/photo/2020/05/20/00/45/time-5193038_1280.jpg" />
                <form onSubmit={handleSubmit(onSubmit)} id="schedule">
                    <div className="flex flex-col">
                        <p className="font-poppins text-bodyText text-[12px] font-bold">Paciente:</p>
                        <select {...register("pacient_id", {required: true})} className="font-roboto text-bodyText text-[14px] bg-background border-solid border-2 border-[#000000] h-6 w-[480px]">
                            {clientes.map((cliente) => (
                                <option value={cliente.id}>
                                    {cliente.name}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className="flex flex-col mt-4">
                        <p className="font-poppins text-bodyText text-[12px] font-bold">Psicologo(a):</p>
                        <select {...register("psicologa_id", {required: true})} className="font-roboto text-bodyText text-[14px] bg-background border-solid border-2 border-[#000000] h-6 w-[480px]">
                            {psicologas.map((cliente) => (
                                <option value={cliente.id}>
                                    {cliente.name}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className="flex flex-col mt-4">
                        <p className="font-poppins text-bodyText text-[12px] font-bold">Data:</p>
                        <input {...register("schedule_at", {required: true})} type="datetime-local" className="font-roboto text-bodyText text-[14px] bg-background border-solid border-2 border-[#000000] h-6 w-[480px]"></input>
                    </div>
                    <button className="bg-[#35C9B6] mt-4 text-white font-poppins" disabled={!isValid} type="submit" form="schedule">
                        Salvar
                    </button>
                </form>
            </div>
        </div>
    )
}
