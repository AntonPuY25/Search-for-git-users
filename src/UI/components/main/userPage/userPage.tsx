import React from 'react'
import s from './userPage.module.scss'
import {useSelector} from "react-redux"
import {dataUsersSelector, statusSelector} from "../../../../BLL/selectors/selectors"
import LinearProgress from '@material-ui/core/LinearProgress'
import {TypeResponseDataUser} from "../../../../API/api"
import group from '../../../img/group_24px.png'
import person from '../../../img/person_24px.png'


function UserPage() {
    const status = useSelector(statusSelector)
    const user: TypeResponseDataUser= useSelector(dataUsersSelector)

    return <>
        {status === 'loading' ?
            <LinearProgress/>
            : <div className={s.container}>

                <div className={s.profile}>
                       {user.avatar_url&&<img src={user.avatar_url} alt={'User'}/>}

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
                   </div>
                </div>
            </div>
        }
    </>
}

export default UserPage;