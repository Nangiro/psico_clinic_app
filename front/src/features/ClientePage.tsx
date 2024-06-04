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
            created_at: '02/02/2025',
            psicologa_name: "Daniel Abade"
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
        data: [
            {
                created_at: '03/03/2025',
                psicologa_name: "Daniela Rodrigues"
            },
            {
                created_at: '05/03/2025',
                psicologa_name: "Ricardo Pannain"
            }
        ],
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
        <div className="w-full h-screen bg-background text-bodyText">
            <div className="flex w-full bg-greenblue justify-end py-2">
                <p className="text-bodyText mr-8 font-bold">Olá Gustavo Cacau</p>
                <LogOut className="text-bodyText mr-4" onClick={logOutUser}/>
            </div> 
            <div className='justify-center flex mt-4'>
                <div className='flex justify-between max-w-[1366px]'>
                    <div className='my-4 px-4 w-full'>
                        <h1 className='font-poppins text-bodyText text-[24px] font-bold mb-4'>Proxima Consulta</h1>
                        <div className="w-full bg-background flex">
                            <h2 className='font-poppins text-bodyText text-[14px] font-bold'>Data:</h2>
                            <h2 className='font-roboto text-bodyText text-[14px] ml-2'>01/01/2025</h2>
                        </div>
                        <div className="w-full bg-background flex">
                            <h2 className='font-poppins text-bodyText text-[14px] font-bold'>Psicologo(a):</h2>
                            <h2 className='font-roboto text-bodyText text-[14px] ml-2'>Ramon Gazonni</h2>
                        </div>
                    </div>
                    <div className="mt-4 w-full px-4">
                        <h1 className='font-poppins text-bodyText text-[24px] font-bold mb-4'>Proximas consultas</h1>
                        <TableComponent table={table}/>
                    </div>
                    <div className="mt-4 w-full px-4">
                        <h1 className='font-poppins text-bodyText text-[24px] font-bold mb-4'>Historico de consultas</h1>
                        <TableComponent table={table2}/>
                    </div>
                </div>
            </div>
        </div>
    )
}
