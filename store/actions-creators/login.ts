import {Dispatch} from 'react'
import {AuthAction, AuthActionEnum, SetAuthAction, SetErrorAction, SetIsLoadingAction} from '../../types/login'
import api from "../../api/api";

export const setIsAuth = (auth: boolean): SetAuthAction => ({type: AuthActionEnum.SET_AUTH, payload: auth})
export const setIsLoading = (payload: boolean): SetIsLoadingAction => ({type: AuthActionEnum.SET_IS_LOADING_AUTH, payload})
export const setError = (payload: string): SetErrorAction => ({type: AuthActionEnum.SET_ERROR_AUTH, payload})

export const login = (email: string, password: string) => {
    return async (dispatch: Dispatch<AuthAction>) => {
        try {
            dispatch(setIsLoading(true));
            const response = await api.post('/login', {email, password})
            if (!!response.data.token) {
                localStorage.setItem('auth', 'true');
                dispatch(setIsAuth(true))
            } else {
                dispatch(setError('Произошла ошибка при логине'));
            }
            dispatch(setIsLoading(false));
        } catch (e) {
            dispatch(setError('Неверный логин или пароль'))
        }
    }
}

export const logOut = () => {
    return (dispatch: Dispatch<AuthAction>) => {
        localStorage.removeItem('auth')
        dispatch(setIsAuth(false))
    }
}
