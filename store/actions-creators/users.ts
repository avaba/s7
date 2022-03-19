import {
    IUsers,
    SetErrorUsers,
    SetIsLoadingUsers,
    SetUsersAction,
    UsersAction,
    UsersActionEnum
} from "../../types/users";
import {Dispatch} from "react";
import api from "../../api/api";

export const setUsers = (payload: IUsers): SetUsersAction => ({
    type: UsersActionEnum.SET_USERS,
    payload
})

export const setIsLoadingUsers = (payload: boolean): SetIsLoadingUsers => ({
    type: UsersActionEnum.SET_IS_LOADING_USERS,
    payload
})

export const setErrorUsers = (payload: string): SetErrorUsers => ({
    type: UsersActionEnum.SET_ERROR_USERS,
    payload
})

export const fetchUsers = ({page}) => {
    return async (dispatch: Dispatch<UsersAction>) => {
        try {
            dispatch(setIsLoadingUsers(true));
            const response = await api.get('/users', {params: {page}})
            if (!!response.data.data.length) {
                dispatch(setUsers({
                    list: response.data.data,
                    page: response.data.page,
                    per_page: response.data.per_page,
                    total: response.data.total,
                    total_pages: response.data.total_pages
                }))
            } else {
                dispatch(setErrorUsers('Произошла ошибка при загрузке пользователей'))
            }
            dispatch(setIsLoadingUsers(false))
        } catch (e) {
            dispatch(setErrorUsers(`Ошибка: ${e.message}`))
        }
    }
}