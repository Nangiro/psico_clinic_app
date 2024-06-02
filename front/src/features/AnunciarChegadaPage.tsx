import { useMemo } from "react"
import { ColumnDef, getCoreRowModel, getFacetedMinMaxValues, getFacetedRowModel, getFacetedUniqueValues, getFilteredRowModel, getPaginationRowModel, getSortedRowModel, useReactTable } from '@tanstack/react-table'
import TableComponent from '../components/Table'
import { Button } from "../components/Button"

export default function AnunciarChegada () {


    const columns = useMemo<ColumnDef<any>[]>(() => [
        {
            id: 'created_at',
            accessorKey: 'created_at',
            header: () => "Data de agendamento"
        },
        {
            id: 'psicologa_name',
            accessorKey: 'psicologa_name',
            header: () => "Psicologa"
        },
        {
            id: 'actions',
            accessorKey: 'actions',
            header: () => "Ações",
            cell: ({row}) => {
                return (
                    // ANUNCIAR CHEGADA AQUI
                    <Button onClick={() => ""} className="bg-black/50" label="Chegou"/>
                )
            }
        }
    ],[])

    const table = useReactTable({
        data: [{
            created_at: 'asdsada',
            psicologa_name: "Daniel"
        }],
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
        <div className="w-full h-full bg-[#BEE1E3] flex flex-col gap-10 justify-start items-start p-20">
            <button onClick={() => ""} className="text-[#355245] ">Voltar</button>
            <div className="bg-[#1ABC9C] h-full w-full min-w-[400px] p-10 gap-10">
                <TableComponent table={table}/>
            </div>
        </div>
    )
}