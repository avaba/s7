import React from 'react';
import Image from "next/image";
import {Button, Container, InputAdornment, TextField, Typography} from "@mui/material";
import logo from '../../public/image/logo_s7.svg'
import styles from './LoginForm.module.scss'
import {AccountCircle, Lock} from "@mui/icons-material";
import {useActions} from "../../hooks/useActions";
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {SubmitHandler, useForm} from "react-hook-form";
import {yupResolver} from '@hookform/resolvers/yup';
import * as yup from "yup";
import theme from "../../utils/theme";
import {useRouter} from "next/router";
import {RoutePath} from "../../types/route";

interface IFormInput {
    email: string;
    password: string;
}

const schema = yup.object({
    email: yup.string().email('Некорректный email адрес').required('Поле "email" обязательное'),
    password: yup.string().required('Поле "password" обязательное'),
}).required();

const LoginForm = () => {
    const router = useRouter()
    const {isLoading, isAuth, error} = useTypedSelector(state => state.login)
    const {login} = useActions()
    const {register, handleSubmit, formState: {errors}} = useForm<IFormInput>({
        mode: "onSubmit",
        defaultValues: {
            "email": "eve.holt@reqres.in",
            "password": "cityslicka"
        },
        resolver: yupResolver(schema)
    });

    isAuth && router.push(RoutePath.profile)

    const onSubmit: SubmitHandler<IFormInput> = (data) => {
        login(data.email, data.password)
    }

    return (
        <Container maxWidth="xs">
            <div className={styles.wrap}>

                <Image src={logo} alt={'Логотип s7'} height={200}/>

                <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
                    <h1 className={styles.form__h1}>Авторизация</h1>

                    <TextField
                        type={"text"}
                        fullWidth
                        label="Логин"
                        variant="outlined"
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <AccountCircle/>
                                </InputAdornment>
                            ),
                        }}
                        sx={{marginBottom: 3}}
                        helperText={errors.email?.message}
                        error={!!errors.email?.message}
                        {...register('email')}
                    />
                    <TextField
                        type={"password"}
                        fullWidth
                        label="Пароль"
                        variant="outlined"
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <Lock/>
                                </InputAdornment>
                            ),
                        }}
                        sx={{marginBottom: 3}}
                        helperText={errors.password?.message}
                        error={!!errors.password?.message}
                        {...register('password')}
                    />

                    {!!error && <Typography
                        fontSize={'small'}
                        color={theme.palette.error.main}
                        sx={{marginBottom: 2}}>{error}</Typography>}

                    <Button
                        type={"submit"}
                        disabled={isLoading}
                        fullWidth
                        size={"large"}
                        variant={"contained"}
                    >
                        Войти
                    </Button>
                </form>
            </div>
        </Container>
    );
};

export default LoginForm;