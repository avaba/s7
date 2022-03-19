export interface IUser {
    id: number;
    email: string;
    first_name: string;
    last_name: string;
    avatar: string;
}

export interface IUsers {
    list: Array<IUser>,
    page: number;
    per_page: number;
    total: number;
    total_pages: number;
}

export interface UsersState {
    users: IUsers;
    isLoading: boolean;
    error: string;
}

export enum UsersActionEnum {
    SET_USERS = "SET_USERS",
    SET_ERROR_USERS = "SET_ERROR_USERS",
    SET_IS_LOADING_USERS = "SET_IS_LOADING_USERS",
}

export interface SetUsersAction {
    type: UsersActionEnum.SET_USERS;
    payload: IUsers;
}

export interface SetErrorUsers {
    type: UsersActionEnum.SET_ERROR_USERS;
    payload: string;
}

export interface SetIsLoadingUsers {
    type: UsersActionEnum.SET_IS_LOADING_USERS;
    payload: boolean;
}

export type UsersAction =
    SetUsersAction |
    SetErrorUsers |
    SetIsLoadingUsers