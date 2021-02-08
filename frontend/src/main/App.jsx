import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'
import React from 'react'
import {BrowserRouter} from 'react-router-dom'

import Routes from './Routes'
import Logo from '../components/templates/Logo'
import Nav from '../components/templates/Nav'
import Main from '../components/templates/Main'
import Footer from '../components/templates/Footer'
import Home from '../components/home/Home'

export default propos =>
    <BrowserRouter>
    <div className="app">
        <Logo/>
        <Nav/>
        <Routes/>               
        <Footer/>
    </div>
    </BrowserRouter>
    