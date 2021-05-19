import React from 'react';
import {Redirect, Route, Switch} from 'react-router-dom';
import './App.css';
import ErrorPage from "./UI/components/errorPage/errorPage";
import MainPage from "./UI/components/main/mainPage/mainPage";
import Header from "./UI/components/header/header";
import Footer from "./UI/components/footer/footer";
import ResultsPage from "./UI/components/main/noResultsPage/noResultsPage";
import {useSelector} from "react-redux";
import {errorSelector} from "./BLL/selectors/selectors";
import UserPage from "./UI/components/main/userPage/userPage";

export const PATH = {
    mainPage: '/mainPage',
    noResultsPage: '/noResults',
    userPage: '/userPage',
    pageNotFound: "*",
    page404: "/pageNotFound",
    startPage: '/',
}

function App() {
    const error = useSelector(errorSelector)


    return (

        <div className="container">
            {  error?  <Redirect  to={PATH.noResultsPage}/>:""}
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
                    <Route path={PATH.userPage}
                           render={() => <UserPage/>}/>
                    <Route path={PATH.page404}
                           render={() => <ErrorPage/>}/>
                    <Redirect from={PATH.pageNotFound} to={PATH.page404}/>
                </Switch>
            </main>
            <footer className='footer'>
                <Footer/>
            </footer>
        </div>
    );
}

export default App;
