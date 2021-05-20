import React, {useEffect} from 'react'
import s from './userPage.module.scss'
import {useDispatch, useSelector} from "react-redux"
import {dataReposSelector, dataUsersSelector, statusSelector} from "../../../../BLL/selectors/selectors"
import LinearProgress from '@material-ui/core/LinearProgress'
import {TypeResponseDataRepos, TypeResponseDataUser} from "../../../../API/api"
import group from '../../../img/group_24px.png'
import person from '../../../img/person_24px.png'
import PaginationPage from "../../../common/paginationPage"
import {setRepos} from "../../../../BLL/reducers/reducer"
import {useParams} from 'react-router-dom'


function UserPage() {

    const status = useSelector(statusSelector)
    const user: TypeResponseDataUser = useSelector(dataUsersSelector)
    const repos: TypeResponseDataRepos = useSelector(dataReposSelector)
    const {id} = useParams<{ id: string }>()

    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(setRepos(id,user.login))
    },[dispatch,user,id])
    return <>
        {status === 'loading' ?
            <LinearProgress/>
            : <div className={s.container}>

                <div className={s.profile}>
                    {user.avatar_url && <img src={user.avatar_url} alt={'User'}/>}

                    <div className={s.name}>{user.name}</div>
                    <div className={s.link}>
                        <a href={`${user.html_url}`}>{user.login}</a>
                    </div>
                    <div className={s.followersGroup}>
                        <div className={s.followers}>
                            <img src={group} alt={'Person'}/>
                            {user.followers} followers
                        </div>
                        <div className={s.following}>
                            <img src={person} alt={'Person'}/>
                            {user.following} following
                        </div>

                    </div>

                </div>


                <div className={s.repositories}>
                    <div className={s.repositoriesContainer}>
                        <h2>Repositories ({user.public_repos})</h2>
                        {repos.map(item => {
                            return <div className={s.repository}>
                                <h2><a href={item.url}>{item.name}</a></h2>
                                <div>{item.description}</div>
                            </div>
                        })}
                    </div>
                    <div className={s.pagination} >
                        <PaginationPage count={user.public_repos} />
                    </div>
                </div>
            </div>
        }
    </>
}

export default UserPage;