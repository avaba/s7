import {AuthAction, AuthActionEnum, AuthState} from "../../types/login";

const initialState: AuthState = {
    isAuth: null,
    error: '',
    isLoading: false,
}

export const authReducer = (state = initialState, action: AuthAction): AuthState => {
    switch (action.type) {
        case AuthActionEnum.SET_AUTH:
            return {...state, isAuth: action.payload, isLoading: false}
        case AuthActionEnum.SET_ERROR_AUTH:
            return {...state, error: action.payload, isLoading: false}
        case AuthActionEnum.SET_IS_LOADING_AUTH:
            return {...state, isLoading: action.payload}
        default:
            return state;
    }
}
