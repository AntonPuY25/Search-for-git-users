import {AppRootStateType} from "../store";

export const dataUsersSelector = (state:AppRootStateType)=>{
    return state.reducerPage.data
}
export type TypeDataUserSelector = ReturnType<typeof dataUsersSelector>
export const statusSelector = (state:AppRootStateType)=>{
    return state.reducerPage.status
}
export const errorSelector = (state:AppRootStateType)=>{
    return state.reducerPage.error
}