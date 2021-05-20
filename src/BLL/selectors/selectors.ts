import {AppRootStateType} from "../store"

export const dataUsersSelector = (state:AppRootStateType)=>{
    return state.reducerPage.data
}
export const statusSelector = (state:AppRootStateType)=>{
    return state.reducerPage.status
}
export const dataReposSelector = (state:AppRootStateType)=>{
    return state.reducerPage.repos
}
export const errorSelector = (state:AppRootStateType)=>{
    return state.reducerPage.error
}