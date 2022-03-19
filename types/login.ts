export interface AuthState {
    isAuth: boolean | null;
    isLoading: boolean;
    error: string;
}

export enum AuthActionEnum {
    SET_AUTH = "SET_AUTH",
    SET_ERROR_AUTH = "SET_ERROR_AUTH",
    SET_IS_LOADING_AUTH = "SET_IS_LOADING_AUTH",
}

export interface SetAuthAction {
    type: AuthActionEnum.SET_AUTH;
    payload: boolean;
}
export interface SetErrorAction {
    type: AuthActionEnum.SET_ERROR_AUTH;
    payload: string;
}
export interface SetIsLoadingAction {
    type: AuthActionEnum.SET_IS_LOADING_AUTH;
    payload: boolean;
}

export type AuthAction =
    SetAuthAction |
    SetErrorAction |
    SetIsLoadingAction
