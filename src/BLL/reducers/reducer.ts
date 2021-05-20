import {Dispatch} from "redux";
import {Api, TypeResponseDataUser} from "../../API/api";

const initialState:TypeInitialState = {
    error:'',
    status:'free',
    data: {} as TypeResponseDataUser
}
const setStatusAC = (status:TypeStatus)=>{
    return{
        type:'/reducer/SET_STATUS',
        status
    } as const
}
const setErrorAC = (error:string)=>{
    return{
        type:'/reducer/SET_ERROR',
        error
    } as const
}
const setDataAC = (data:TypeResponseDataUser)=>{
    return{
        type:'/reducer/SET_DATA',
        data
    } as const
}
const Reducer = (state:TypeInitialState=initialState,action:TypeActions):TypeInitialState=>{

    switch (action.type) {
        case "/reducer/SET_STATUS":
            return {
                ...state,
                status:action.status
            }
        case "/reducer/SET_ERROR":
            return {
                ...state,
                error:action.error
            }
        case "/reducer/SET_DATA":
            return {
                ...state,
                data:action.data
            }
        default:
            return  state
    }
}


export const getDataTC = ()=> async (dispatch:Dispatch<TypeActions>)=>{
    dispatch(setStatusAC('loading'))
    try {
        let result = await Api.getUsers()
        dispatch(setDataAC(result))
        dispatch(setStatusAC('succeed'))

    }catch (e) {
        dispatch(setStatusAC('error'))
        dispatch(setErrorAC('acasdasdasd'))


    }
}




type TypeActions =
    |ReturnType<typeof setStatusAC>
    |ReturnType<typeof setErrorAC>
    |ReturnType<typeof setDataAC>
export type TypeStatus = 'free'|'loading'|'succeed'|'error'
export type TypeInitialState  = {
    error:string
    status:TypeStatus
    data:TypeResponseDataUser
}

export  default Reducer;