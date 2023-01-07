//npm i react-table
//https://tanstack.com/table/v8/docs/adapters/react-table
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { createColumnHelper, flexRender, getCoreRowModel, useReactTable } from '@tanstack/react-table'
import "./style.css";
import Pagination from "$components/pagenation";
import PTitle from "$components/pageTitle";
import Board from "$types/board";
import BoardService from "$services/board.service";

const Index = () => {
    const [data, setData] = useState<Board[]>([{
        id: 1,
        register_date: "",
        name: "",
        title: "",
    }])
    const [pageNo, setPageNo] = useState(0);
    const [pageSize, setPageSize] = useState(0)
    useEffect(() => {
        getItems(1);
    }, []);
    const getItems = (pageNo: number) => BoardService.getAll({ type: 'education', pageNo })
        .then(r => {
            console.log(r.data)
            setData(r.data.items);
            setPageNo(r.data.pageNo);
            setPageSize(r.data.pageSize);
        })
        .catch((e: Error) => {
            console.log(e);
        });
    const columnHelper = createColumnHelper<Board>();
    const columns = [
        columnHelper.accessor("id", { header: "이름" }),
        columnHelper.accessor("register_date", { header: "휴대폰" }),
        columnHelper.accessor("name", { header: "생년월일" }),
        columnHelper.accessor("title", { header: "등록일" }),
    ];
    const table = useReactTable({ data, columns, getCoreRowModel: getCoreRowModel(), })

    return (
        <div>
            <div className="mx-auto mt-8 mb-2">
                <PTitle no={1} title={'Education'} />
            </div>
            <div className="container mb-5">
                <div className="row">
                    <table className="table mb-9 table-bordered">
                        <thead>
                            {table.getHeaderGroups().map((headerGroup) => (
                                <tr key={headerGroup.id}>
                                    {headerGroup.headers.map((header) => (
                                        <th key={header.id}>
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
                        <tbody>
                            {table.getRowModel().rows.map((row) => (
                                <tr key={row.id}>
                                    {row.getVisibleCells().map((cell) => (
                                        <td key={cell.id}>
                                            <Link to={"/education/" + row.id}>
                                                {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                            </Link>
                                        </td>
                                    ))}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <div className="flex items-center justify-center">
                        <Pagination action={getItems} pageNo={pageNo} pageSize={pageSize} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Index;
