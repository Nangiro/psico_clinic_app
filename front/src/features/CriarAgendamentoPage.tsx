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
        <div className="w-full h-full bg-[#BEE1E3] flex flex-col gap-10 justify-start items-start p-20">
            <div className="bg-white min-h-[400px] flex gap-10 w-full min-w-[400px] p-10 flex-wrap overflow-auto">
                <form onSubmit={handleSubmit(onSubmit)} id="schedule">
                    <div className="flex flex-col">
                        <p>Paciente:</p>
                        <select {...register("pacient_id", {required: true})}>
                            {clientes.map((cliente) => (
                                <option value={cliente.id}>
                                    {cliente.name}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className="flex flex-col">
                        <p>Paciente:</p>
                        <select {...register("psicologa_id", {required: true})}>
                            {psicologas.map((cliente) => (
                                <option value={cliente.id}>
                                    {cliente.name}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className="flex flex-col">
                        <p>Data:</p>
                        <input {...register("schedule_at", {required: true})} type="datetime-local"></input>
                    </div>
                    <button className="bg-[#35C9B6] mt-4 text-white font-poppins" disabled={!isValid} type="submit" form="schedule">
                        Salvar
                    </button>
                </form>
            </div>
        </div>
    )
}