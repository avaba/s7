import React, {useEffect, useState} from 'react';
import {useActions} from "../hooks/useActions";
import {useTypedSelector} from "../hooks/useTypedSelector";
import UsersTable from "../components/Tables/UsersTable/UsersTable";
import {Pagination} from "@mui/material";
import Loading from "../components/Loading/Loading";

const Users = () => {
    const {users, error, isLoading} = useTypedSelector(state => state.users)
    const {fetchUsers} = useActions()
    const [page, setPage] = useState(1);

    useEffect(() => {
        fetchUsers({page})
    }, [page])

    const handlePage = (event: React.ChangeEvent<unknown>, value: number) => {
        setPage(value);
    };

    const loading = (isLoading && !users.list.length) && <Loading/>
    const content = (!isLoading && users.list.length) && <UsersTable list={users.list}/>
    const errorMassage = (!isLoading && !!error) && <p>{error}</p>

    return (
        <>
            <h1>Пользователи</h1>

            {loading}
            {content}
            {errorMassage}

            {(!isLoading && users.total_pages > 1) && <Pagination
                sx={{marginTop: 3}}
                count={users.total_pages}
                page={page}
                onChange={handlePage}
            />}

        </>
    );
};

export default Users;