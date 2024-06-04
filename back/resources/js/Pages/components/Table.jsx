import { flexRender } from "@tanstack/react-table";

export default function TableComponent({ table }) {
    return (
        <table>
            <thead>
                {table.getHeaderGroups().map((headerGroup) => (
                    <tr key={headerGroup.id} >
                        {headerGroup.headers.map((header) => (
                            <th key={header.id} className={`font-poppins text-bodyText text-[14px] font-bold`} style={{ width: `${header.getSize() + 48}px`, textAlign: "left" }}>
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
            <tbody className="font-roboto text-bodyText text-[14px]">
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
