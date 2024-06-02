import { useMemo } from 'react'
import { ColumnDef, getCoreRowModel, getFacetedMinMaxValues, getFacetedRowModel, getFacetedUniqueValues, getFilteredRowModel, getPaginationRowModel, getSortedRowModel, useReactTable } from '@tanstack/react-table'
import TableComponent from '../components/Table'

export default function ClientePage () {

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

    const table2 = useReactTable({
        data: [{
            created_at: 'asds222222ada',
            psicologa_name: "Danielaaaa"
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
            <h1 className="text-[#355245] ">Olá NAME</h1>
            <div className="bg-white h-20 w-full">
                <TableComponent table={table}/>
            </div>
            <div className="bg-white h-20 w-full">
                <TableComponent table={table2}/>
            </div>

            <div className="bg-white h-20 w-full">
                <h2>Proxima consulta: DATA</h2>
                <h2>Psicologo(a): Name2</h2>
            </div>
        </div>
    )
}