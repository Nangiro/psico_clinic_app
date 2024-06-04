import { useMemo, useEffect } from 'react'
import { getCoreRowModel, getFacetedMinMaxValues, getFacetedRowModel, getFacetedUniqueValues, getFilteredRowModel, getPaginationRowModel, getSortedRowModel, useReactTable } from '@tanstack/react-table'
import TableComponent from '../components/Table'
import { LogOut } from 'react-feather';
import { Link, router } from '@inertiajs/react'

export default function ClientePage({ patient, schedules }) {

    const pastSchedules = schedules.filter((schedule) => {
        const date = new Date(schedule.schedule_time).getTime()
        const now = new Date().getTime()
        if (date < now) {
            return true
        }
    })

    const postSchedules = schedules.filter((schedule) => {
        const date = new Date(schedule.schedule_time).getTime()
        const now = new Date().getTime()
        if (date > now) {
            return true
        }
    })

    let nextSchedule = undefined;
    if (postSchedules != undefined) {
        nextSchedule = postSchedules.shift();
    }

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
            header: () => "Psicologo(a)",
            cell: ({ row }) => {
                if (row.original.psychologist != undefined) {
                    return <p>{row.original.psychologist.name}</p>
                }
            }
        },
    ], [])

    const table = useReactTable({
        data: postSchedules,
        columns,
        getCoreRowModel: getCoreRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
        getFilteredRowModel: getFilteredRowModel(),
        getSortedRowModel: getSortedRowModel(),
        getFacetedRowModel: getFacetedRowModel(),
        getFacetedUniqueValues: getFacetedUniqueValues(),
        getFacetedMinMaxValues: getFacetedMinMaxValues(),
    })

    const table2 = useReactTable({
        data: pastSchedules,
        columns,
        getCoreRowModel: getCoreRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
        getFilteredRowModel: getFilteredRowModel(),
        getSortedRowModel: getSortedRowModel(),
        getFacetedRowModel: getFacetedRowModel(),
        getFacetedUniqueValues: getFacetedUniqueValues(),
        getFacetedMinMaxValues: getFacetedMinMaxValues(),
    })

    // useEffect(() => { console.log(nextSchedule) }, [])

    return (
        <div className="w-full h-screen bg-background text-bodyText">
            <div className="flex w-full bg-greenblue justify-end py-2">
                <p className="text-bodyText mr-8 font-bold">Olá, {patient.user.name}</p>
                <Link method="post" href={route('logout')}><LogOut className="text-bodyText mr-4" /></Link>
            </div>
            <div className='justify-center flex mt-4'>
                <div className='flex justify-between max-w-[1366px]'>
                    <div className='my-4 px-4 w-full'>
                        <h1 className='font-poppins text-bodyText text-[24px] font-bold mb-4'>Proxima Consulta</h1>
                        <div className="w-full bg-background flex">
                            <h2 className='font-poppins text-bodyText text-[14px] font-bold'>Data:</h2>
                            <h2 className='font-roboto text-bodyText text-[14px] ml-2'>{nextSchedule != undefined ? new Date(nextSchedule.schedule_time).toLocaleDateString('pt-BR', { hour: 'numeric', minute: 'numeric' }) : ''}</h2>
                        </div>
                        <div className="w-full bg-background flex">
                            <h2 className='font-poppins text-bodyText text-[14px] font-bold'>Psicologo(a):</h2>
                            <h2 className='font-roboto text-bodyText text-[14px] ml-2'>{nextSchedule != undefined ? nextSchedule.psychologist.name : ''}</h2>
                        </div>
                    </div>
                    <div className="mt-4 w-full px-4">
                        <h1 className='font-poppins text-bodyText text-[24px] font-bold mb-4'>Proximas consultas</h1>
                        <TableComponent table={table} />
                    </div>
                    <div className="mt-4 w-full px-4">
                        <h1 className='font-poppins text-bodyText text-[24px] font-bold mb-4'>Historico de consultas</h1>
                        <TableComponent table={table2} />
                    </div>
                </div>
            </div>
        </div>
    )
}
