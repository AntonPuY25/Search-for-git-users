import {Dispatch} from 'redux'
import {Api, TypeResponseDataRepos, TypeResponseDataUser} from '../../API/api'

const initialState: TypeInitialState = {
    error: '',
    status: 'free',
    data: {} as TypeResponseDataUser,
    repos: []
}
export const setStatusAC = (status: TypeStatus) => {
    return {
        type: '/reducer/SET_STATUS',
        status
    } as const
}
export const setErrorAC = (error: string) => {
    return {
        type: '/reducer/SET_ERROR',
        error
    } as const
}
export const setUserAC = (data: TypeResponseDataUser) => {
    return {
        type: '/reducer/SET_USERS',
        data
    } as const
}
export const setReposAC = (repos: any) => {
    return {
        type: '/reducer/SET_REPOS',
        repos
    } as const
}
export const Reducer = (state: TypeInitialState = initialState, action: TypeActions): TypeInitialState => {

    switch (action.type) {
        case '/reducer/SET_STATUS':
            return {
                ...state,
                status: action.status
            }
        case '/reducer/SET_ERROR':
            return {
                ...state,
                error: action.error
            }
        case '/reducer/SET_USERS':
            return {
                ...state,
                data: action.data
            }
        case '/reducer/SET_REPOS':
            return {
                ...state,
                repos: action.repos
            }
        default:
            return state
    }
}


export const setUserTC = (user: string) => async (dispatch: Dispatch<TypeActions>) => {
    dispatch(setStatusAC('loading'))
    try {
        let result = await Api.getUsers(user)
        dispatch(setUserAC(result.data))
        dispatch(setStatusAC('succeed'))
    } catch (e) {
        dispatch(setStatusAC('error'))
        dispatch(setErrorAC(e))


    }
}
export const setRepos = (page: string, user: string) => async (dispatch: Dispatch<TypeActions>) => {

    try {
        let repos = await Api.getRepos(page, user)
        dispatch(setReposAC(repos))
    } catch (e) {
        alert('Some Error')
    }
}


type TypeActions =
    | ReturnType<typeof setStatusAC>
    | ReturnType<typeof setErrorAC>
    | ReturnType<typeof setUserAC>
    | ReturnType<typeof setReposAC>
export type TypeStatus = 'free' | 'loading' | 'succeed' | 'error'
export type TypeInitialState = {
    error: string
    status: TypeStatus
    data: TypeResponseDataUser
    repos: TypeResponseDataRepos
}

export default Reducer;