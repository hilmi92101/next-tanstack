"use client"

import { ColumnDef } from "@tanstack/react-table"

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type User = {
    id: string
    name: string
    email: string
    image: string
    lastSeen: string
}

export const columns: ColumnDef<User>[] = [
    {
        accessorKey: "name",
        header: "Status",
    },
    {
        accessorKey: "email",
        header: "Email",
    },
    {
        accessorKey: "lastSeen",
        header: "Last Seen",
    },
]