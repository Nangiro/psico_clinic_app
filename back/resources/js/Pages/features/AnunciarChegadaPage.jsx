import { useMemo } from "react"
import { getCoreRowModel, getFacetedMinMaxValues, getFacetedRowModel, getFacetedUniqueValues, getFilteredRowModel, getPaginationRowModel, getSortedRowModel, useReactTable } from '@tanstack/react-table'
import TableComponent from '../components/Table'
import { Button } from "../components/Button"
import { Link, router } from '@inertiajs/react'

export default function AnunciarChegada({ id, schedules, patient }) {

    const voltar = () => {
        router.get(route('secretary.index', id))
    };

    const onSubmit = (schedule_id) => {
        router.post(route('secretary.storeSession', [id, schedule_id]))
    };

    const columns = useMemo(() => [
        {
            id: 'schedule_time',
            accessorKey: 'schedule_time',
            header: () => "Data de agendamento",
            cell: ({ row }) => {
                return <p>{new Date(row.original.schedule_time).toLocaleDateString('pt-BR', { hour: 'numeric', minute: 'numeric' })}</p>
            }
        },
        {
            id: 'psychologist',
            accessorKey: 'psychologist',
            header: () => "Psicologa",
            cell: ({ row }) => {
                if (row.original.psychologist != undefined) {
                    return <p>{row.original.psychologist.name}</p>
                }
            }
        },
        {
            id: 'patient',
            accessorKey: 'patient',
            header: () => "Paciente",
            cell: ({ row }) => {
                if (row.original.patient != undefined) {
                    return <p>{row.original.patient.user.name}</p>
                }
            }
        },
        {
            id: 'actions',
            accessorKey: 'actions',
            header: () => "Ações",
            cell: ({ row }) => {
                return (
                    <Button onClick={() => { onSubmit(row.original.id) }} className="bg-[#35C9B6] mt-4 text-white font-poppins" label="Chegou" />
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
            <button onClick={voltar} className="bg-[#35C9B6] mt-4 text-white font-poppins">Voltar</button>
            <div className="bg-background shadow-lg h-full w-full min-w-[400px] p-10 gap-10">
                <TableComponent table={table} />
            </div>
        </div>
    )
}

