import { flexRender, Table } from "@tanstack/react-table";

export default function TableComponent ({table} : {table: Table<any>}) {
    return (
        <table>
             <thead>
                {table.getHeaderGroups().map((headerGroup) => (
                    <tr key={headerGroup.id} >
                    {headerGroup.headers.map((header) => (
                        <th key={header.id} className={``}>
                        {header.isPlaceholder
                            ? null
                            : flexRender(
                                header.column.columnDef.header,
                                header.getContext()
                            )}
                        </th>
                    ))}
                    </tr>
                ))}
            </thead>
            <tbody className="">
                    {table.getRowModel().rows.map(row => (
                        <tr key={row.id} className="">
                        {row.getVisibleCells().map(cell => (
                            <td key={cell.id}>
                            {flexRender(cell.column.columnDef.cell, cell.getContext())}
                            </td>
                        ))}
                        </tr>
                    ))}
                </tbody>
        </table>
    )
}