import React from 'react'
import user from '../../../img/user.png'
import s from './noResult.module.scss'

function ResultsPage() {
    return <div className={s.container}>


        <img src={user} alt={'Search'}/>
        <div className={s.searchText}>
            User not found
        </div>
    </div>
}

export default ResultsPage;