//npm i react-table
//https://tanstack.com/table/v8/docs/adapters/react-table
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { createColumnHelper, flexRender, getCoreRowModel, useReactTable } from '@tanstack/react-table'
import "./style.css";
import Table from 'react-bootstrap/Table';
import BreadCrumb from "$components/breadcrumb";
import Pagination from "$components/pagenation";
import PTitle from "$components/pageTitle";

const Index = () => {
    const tableData: Person[] = [
        {
            id: 1,
            register_date: "2022-04-06",
            name: "김땡땡",
            title: "Test 1",
        },
        {
            id: 2,
            register_date: "2022-04-06",
            name: "김땡땡",
            title: "Test 1",
        },
        {
            id: 3,
            register_date: "2022-04-06",
            name: "김땡땡",
            title: "Test 1",
        },
        {
            id: 3,
            register_date: "2022-04-06",
            name: "김땡땡",
            title: "Test 1",
        },
        {
            id: 3,
            register_date: "2022-04-06",
            name: "김땡땡",
            title: "Test 1",
        },
        {
            id: 3,
            register_date: "2022-04-06",
            name: "김땡땡",
            title: "Test 1",
        },
        {
            id: 3,
            register_date: "2022-04-06",
            name: "김땡땡",
            title: "Test 1",
        },
        {
            id: 3,
            register_date: "2022-04-06",
            name: "김땡땡",
            title: "Test 1",
        },
    ]
    const [data, setData] = useState([...tableData])

    type Person = {
        id: number
        register_date: string
        name: string
        title: string
    }
    const columnHelper = createColumnHelper<Person>();
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
                <PTitle no={1} title={'archive'} />
            </div>
            <div className="container mb-5">
                <div className="row">
                    <Table bordered hover>
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
                                            <Link to={"/archive/" + row.id}>
                                                {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                            </Link>
                                        </td>
                                    ))}
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                    <div className="flex items-center justify-center">
                        <Pagination />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Index;
