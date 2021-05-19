import {AppRootStateType} from "../store";

export const dataUsers = (state:AppRootStateType)=>{
    return state.reducerPage.data
}
export const status = (state:AppRootStateType)=>{
    return state.reducerPage.status
}