import React from 'react'
import s from './userPage.module.scss'
import {useSelector} from "react-redux"
import {dataUsersSelector, statusSelector} from "../../../../BLL/selectors/selectors"
import LinearProgress from '@material-ui/core/LinearProgress'
import {TypeResponseDataUser} from "../../../../API/api";


function UserPage() {
    const status = useSelector(statusSelector)
    const user:TypeResponseDataUser|null = useSelector(dataUsersSelector)

    return <>
    {status === 'loading' ?
        <LinearProgress/>
        : <div className={s.container}>

            <div className={s.profile}>
                {user&&<img src={user.avatar_url} alt={'User'}/>}
            </div>
            <div className={s.repositories}>
                Repositories
            </div>
        </div>
}
    </>
}

export default UserPage;