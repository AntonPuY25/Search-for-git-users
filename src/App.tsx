import React, {useEffect} from 'react'
import {Redirect, Route, RouteComponentProps, Switch, withRouter} from 'react-router-dom'
import './App.css'
import ErrorPage from "./UI/components/errorPage/errorPage"
import MainPage from "./UI/components/main/mainPage/mainPage"
import Header from "./UI/components/header/header"
import ResultsPage from "./UI/components/main/noResultsPage/noResultsPage"
import UserPage from "./UI/components/main/userPage/userPage"

export const PATH = {
    mainPage: '/mainPage',
    noResultsPage: '/noResults',
    userPage: '/userPage',
    pageNotFound: "*",
    page404: "/pageNotFound",
    startPage: '/',
}
function App(props: RouteComponentProps) {

    useEffect(()=>{
        props.history.push(PATH.mainPage)
    },[props.history])

    return (

        <div className="container">
            <header className='header'>
                <Header/>
            </header>
            <main className='main'>
                <Switch>

                    <Route exact path={PATH.startPage}
                           render={() => <MainPage/>}/>
                    <Route path={PATH.mainPage}
                           render={() => <MainPage/>}/>
                    <Route path={PATH.noResultsPage}
                           render={() => <ResultsPage/>}/>
                    <Route path={PATH.userPage+ "/:id"}
                           render={() => <UserPage/>}/>
                    <Route path={PATH.page404}
                           render={() => <ErrorPage/>}/>
                    <Redirect from={PATH.pageNotFound} to={PATH.page404}/>

                </Switch>
            </main>

        </div>
    );
}

export default withRouter(App);
