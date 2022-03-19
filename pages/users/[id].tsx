import React, {useEffect, useState} from 'react';
import {useRouter} from "next/router";
import api from "../../api/api";
import {IUser} from "../../types/users";
import {Avatar, CircularProgress} from "@mui/material";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Link from "../../components/UI/Link";
import Button from "@mui/material/Button";
import {RoutePath} from '../../types/route';

const User = () => {
    const {query = {}} = useRouter();
    const {id = 0} = query || {};
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState('')
    const [user, setUser] = useState<IUser>()

    useEffect(() => {
        if (id) {
            setIsLoading(true)
            api.get(`/users/${id}`)
                .then(res => {
                    setUser(res.data.data);
                    setIsLoading(false)
                })
                .catch(() => {
                    setIsLoading(false)
                    setError('Пользователь не найден!')
                })
        }
    }, [id]);

    const loading = (isLoading && !user) && <CircularProgress/>
    const content = (!isLoading && user) && <UserInfo user={user}/>
    const errorMessage = (error && !user) && <p>{error}</p>

    return (
        <>
            <Button
                sx={{marginTop: 4}}
                startIcon={<ArrowBackIcon/>}
                component={Link} href={RoutePath.users}
            >
                Назад
            </Button>
            <h1>Страница пользователя</h1>
            {loading}
            {content}
            {errorMessage}
        </>
    );
};

const UserInfo = (props) => {
    const user: IUser = props.user

    return (
        <>
            <Avatar sx={{width: 100, height: 100}} src={user.avatar}/>
            <p>Имя: {user.first_name}</p>
            <p>Фамилия: {user.last_name}</p>
            <p>Email: {user.email}</p>
        </>
    )
}

export default User;