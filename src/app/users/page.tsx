import { User, columns } from './columns'
import { DataTable } from './data-table'

async function getUsers(): Promise<User[]> {
    const res = await fetch(
        'https://669612e60312447373c0f171.mockapi.io/api/users'
    )
    const data = await res.json()
    return data
}
const UsersPage = async () => {

    const data = await getUsers()

    return (
        <section>
            <div className="container">
                <h1 className='text-3xl font-bold'>All Users</h1>

                <DataTable columns={columns} data={data} />
            </div>
        </section>
    )
}

export default UsersPage  