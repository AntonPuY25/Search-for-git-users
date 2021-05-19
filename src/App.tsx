import React from 'react';
import {Redirect, Route, Switch} from 'react-router-dom';
import './App.css';
import ErrorPage from "./UI/components/errorPage/errorPage";
import MainPage from "./UI/components/main/mainPage/mainPage";
import Header from "./UI/components/header/header";
import Footer from "./UI/components/footer/footer";

export const PATH = {
    mainPage: '/mainPage',
    pageNotFound: "*",
    page404: "/pageNotFound",
    startPage: '/',
}

function App() {
    return (
        <div className="container">
            <header className='header'>
                <Header/>
            </header>
            <main className='main'>
                <Switch>
                    <Route path={PATH.mainPage}
                           render={() => <MainPage/>}/>
                    <Route path={PATH.page404}
                           render={() => <ErrorPage/>}/>
                    <Redirect from={PATH.startPage} to={PATH.mainPage}/>
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
