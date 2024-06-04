import { useMemo } from "react"
import { getCoreRowModel, getFacetedMinMaxValues, getFacetedRowModel, getFacetedUniqueValues, getFilteredRowModel, getPaginationRowModel, getSortedRowModel, useReactTable } from '@tanstack/react-table'
import TableComponent from '../components/Table'
import { Button } from "../components/Button"
import { Link, router } from '@inertiajs/react'
import { ArrowLeft } from "react-feather"

export default function VerConsultas({ id, schedules }) {

    const voltar = () => {
        router.get(route('psychologist.index', id))
    };

    const verFicha = (schedule_id) => {
        router.get(route('psychologist.verFicha', [id, schedule_id]))
    };

    const columns = useMemo((schedules) => [
        {
            id: 'schedule_time',
            accessorKey: 'schedule_time',
            header: () => "Data de agendamento",
            cell: ({ row }) => {
                return <p>{new Date(row.original.schedule_time).toLocaleDateString('pt-BR', { hour: 'numeric', minute: 'numeric' })}</p>
            }
        },
        {
            id: 'patient',
            accessorKey: 'patient',
            header: () => "Paciente",
            cell: ({ row }) => {
                if (row.original.patient != undefined) {
                    return <p>{row.original.patient.name}</p>
                }
            }
        },
        {
            id: 'actions',
            accessorKey: 'actions',
            header: () => "Ações",
            cell: ({ row }) => {
                return (
                    // Ir para ficha
                    <Button onClick={() => { verFicha(row.original.id) }} className="bg-[#35C9B6] mt-4 text-white font-poppins" label="Ver Ficha" />
                )
            }
        }
    ], [])

    const table = useReactTable({
        data: schedules,
        columns,
        getCoreRowModel: getCoreRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
        getFilteredRowModel: getFilteredRowModel(),
        getSortedRowModel: getSortedRowModel(),
        getFacetedRowModel: getFacetedRowModel(),
        getFacetedUniqueValues: getFacetedUniqueValues(),
        getFacetedMinMaxValues: getFacetedMinMaxValues(),
    })

    return (
        <div className="w-full h-full bg-background flex flex-col gap-10 justify-start items-start p-20">
            <button onClick={voltar} className="bg-[#35C9B6] mt-4 text-bodyText font-poppins text-[16px] gap-1 flex"><ArrowLeft /> Voltar</button>
            <div className="bg-background shadow-xl h-full w-full min-w-[400px] p-10 gap-10">
                <TableComponent table={table} />
            </div>
        </div>
    )
}
