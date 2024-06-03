import { useMemo } from 'react'
import { ColumnDef, getCoreRowModel, getFacetedMinMaxValues, getFacetedRowModel, getFacetedUniqueValues, getFilteredRowModel, getPaginationRowModel, getSortedRowModel, useReactTable } from '@tanstack/react-table'
import TableComponent from '../components/Table'
import { LogOut } from 'react-feather';

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

    const logOutUser  = () => {
        //TODO: Deslogar usuario
    }

    return (
        <div className="w-full h-full bg-[#E3E5D8] ">
            <div className="flex w-full bg-[#648374] justify-end py-1">
                <p className="text-[#E3E5D8] mr-8 font-bold">Olá Gustavo Cacau</p>
                <LogOut className="text-[#E3E5D8] mr-4" onClick={logOutUser}/>
            </div> 
            <div className="bg-white h-20 w-full">
                <h2>Proxima consulta: DATA</h2>
                <h2>Psicologo(a): Name2</h2>
            </div>
            <div className="bg-white h-20 w-full">
                <TableComponent table={table}/>
            </div>
            <div className="bg-white h-20 w-full">
                <TableComponent table={table2}/>
            </div>
        </div>
    )
}
