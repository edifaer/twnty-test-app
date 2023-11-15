import {useState} from "react";

import {
    ColumnDef,
    ColumnFiltersState,
    flexRender,
    getCoreRowModel,
    getFacetedRowModel,
    getFacetedUniqueValues,
    getFilteredRowModel,
    getSortedRowModel,
    SortingState,
    useReactTable,
} from '@tanstack/react-table'

import Filter from "./Features/Filter";
import {STable, STBody, STBodyTR, STD, STH, STHead, STHeadTR} from "./Table.styles";

interface IProps<T> {
    columns: Array<ColumnDef<T>>
    data?: T[]
}

export function Table<T>({data = [], columns}: IProps<T>) {
    const [sorting, setSorting] = useState<SortingState>([])
    const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([])

    const table = useReactTable({
        data,
        columns,
        state: {
            sorting,
            columnFilters,
        },
        onColumnFiltersChange: setColumnFilters,
        onSortingChange: setSorting,
        getCoreRowModel: getCoreRowModel(),
        getFilteredRowModel: getFilteredRowModel(),
        getSortedRowModel: getSortedRowModel(),
        getFacetedRowModel: getFacetedRowModel(),
        getFacetedUniqueValues: getFacetedUniqueValues(),
    })

    return (
        <>
            <STable>
                <STHead>
                    {table.getHeaderGroups().map(headerGroup => (
                        <STHeadTR key={headerGroup.id}>
                            {headerGroup.headers.map(header => {
                                return (
                                    <STH key={header.id} colSpan={header.colSpan}>
                                        {header.isPlaceholder ? null : (
                                            <>
                                                <div
                                                    {...{onClick: header.column.getToggleSortingHandler()}}
                                                >
                                                    {flexRender(
                                                        header.column.columnDef.header,
                                                        header.getContext()
                                                    )}
                                                    {{
                                                        asc: ' 🔼',
                                                        desc: ' 🔽',
                                                    }[header.column.getIsSorted() as string] ?? null}
                                                </div>
                                                {header.column.getCanFilter() ? (
                                                    <div>
                                                        <Filter column={header.column}/>
                                                    </div>
                                                ) : null}
                                            </>
                                        )}
                                    </STH>
                                )
                            })}
                        </STHeadTR>
                    ))}
                </STHead>
                <STBody>
                    {table.getRowModel().rows.map(row => {
                        return (
                            <STBodyTR key={row.id}>
                                {row.getVisibleCells().map(cell => {
                                    return (
                                        <STD key={cell.id}>
                                            {flexRender(
                                                cell.column.columnDef.cell,
                                                cell.getContext()
                                            )}
                                        </STD>
                                    )
                                })}
                            </STBodyTR>
                        )
                    })}
                </STBody>
            </STable>
        </>
    )
}
