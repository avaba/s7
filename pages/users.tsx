import React, {useEffect, useState} from 'react';
import {useActions} from "../hooks/useActions";
import {useTypedSelector} from "../hooks/useTypedSelector";
import UsersTable from "../components/Tables/UsersTable/UsersTable";
import {Pagination} from "@mui/material";

const Users = () => {
    const {users, error, isLoading} = useTypedSelector(state => state.users)
    const {fetchUsers} = useActions()
    const [page, setPage] = useState(users.page);

    useEffect(() => {
        fetchUsers({page})
    }, [page])

    const handlePage = (event: React.ChangeEvent<unknown>, value: number) => {
        setPage(value);
    };

    return (
        <>
            <h1>Пользователи</h1>

            <UsersTable
                loading={isLoading}
                list={users.list}
                error={error}
            />

            {!!users.list.length && <Pagination
                disabled={isLoading}
                sx={{marginTop: 3}}
                count={users.total_pages}
                page={page}
                onChange={handlePage}
            />}

        </>
    );
};

export default Users;