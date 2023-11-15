'use client'

import {useEffect, useMemo, useState} from "react"
import Table from "@/app/_components/Table";
import {Loader} from "@/app/_components/Loader/Loader";
import {API_URL} from "@/app/_utils/constants";
import {motion} from "framer-motion";

export default function SummaryPage() {
    const [data, setData] = useState([])
    const [isLoading, setLoading] = useState(true)

    const columns = useMemo(() => [
        {
            accessorKey: 'id',
            header: '#',
            enableColumnFilter: false,
        },
        {
            accessorKey: 'name',
            header: 'Name',
        },
        {
            accessorKey: 'username',
            header: 'Username',
        },
        {
            accessorKey: 'email',
            header: 'Email',
        },
        {
            accessorKey: 'phone',
            header: 'Phone number',
        }
    ], [])

    useEffect(() => {
        fetch(API_URL)
            .then((res) => {
                if (res.ok) {
                    return res.json()
                }

                throw new Error()
            })
            .then((data) => {
                setData(data)
                setLoading(false)
            })
    }, [])

    if (isLoading) return <Loader/>

    return (
        <motion.div
            initial={{ x: 300, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: 300, opacity: 0 }}
            transition={{
                type: "spring",
                stiffness: 260,
                damping: 20,
            }}
        >
            <Table data={data} columns={columns}/>
        </motion.div>
    )
}