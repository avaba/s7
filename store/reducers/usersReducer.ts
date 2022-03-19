import {UsersAction, UsersActionEnum, UsersState} from "../../types/users";


const initialState: UsersState = {
    users: {
        list: [],
        page: 1,
        per_page: 5,
        total: 0,
        total_pages: 0,
    },
    error: '',
    isLoading: false,
}

export const usersReducer = (state = initialState, action: UsersAction): UsersState => {
    switch (action.type) {
        case UsersActionEnum.SET_USERS:
            return {...state, users: action.payload, error: '', isLoading: false}
        case UsersActionEnum.SET_ERROR_USERS:
            return {...state, users: {...initialState.users}, error: action.payload, isLoading: false}
        case UsersActionEnum.SET_IS_LOADING_USERS:
            return {...state, isLoading: action.payload}
        default:
            return state;
    }
}