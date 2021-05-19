import React from 'react'
import search from '../../../img/search.png'
import s from './mainPage.module.scss'


function MainPage() {
    return <div className={s.container}>


            <img src={search} alt={'Search'}/>
            <div className={s.searchText}>
                Start with searching a GitHub user
            </div>

    </div>
}

export default MainPage;