import React from 'react';
import bg_image from '../images/guitar-1245856_1920.jpg';
import Search from '../components/Search';
import {Link} from 'react-router-dom';

export default function Nav() {
    return (
        <section className="hero is-medium" style={{backgroundSize:'cover', backgroundImage:`url(${bg_image})`}}>
        <div className="hero-head">
            <nav className="navbar">
                <div className="container">
                    <div className="navbar-brand">
                        <p className="navbar-item">
                            <strong style={{color:'white'}}>LYRIC APP</strong>
                        </p>
                        <span className="navbar-burger burger" data-target="navbarMenu">
                            <span></span>
                            <span></span>
                            <span></span>
                        </span>
                    </div>
                    <div id="navbarMenu" className="navbar-menu" style={{backgroundColor: 'transparent'}}>
                        <div className="navbar-end">
                            <span className="navbar-item">
                            <Link className="button is-link is-outlined" exact to="/">
                            <span className="icon">
                                        <i className="fa fa-home"></i>
                                    </span>&nbsp;&nbsp;Home
                            </Link>                              

                            </span>
                            <span className="navbar-item">
                            <Link className="button is-link is-outlined" exact to="/about">
                            <span className="icon">
                                        <i className="fas fa-info-circle"></i>
                                    </span>&nbsp;&nbsp;About
                            </Link>   
                            </span>
                            <span className="navbar-item">
                                <a className="button is-link is-outlined" href="https://github.com/danielc92/react-lyrics-app">
                                    <span className="icon">
                                        <i className="fab fa-github"></i>
                                    </span>
                                    <span>View Source</span>
                                </a>
                            </span>
                        </div>
                    </div>
                </div>
            </nav>
            </div>

            <div className="hero-body">
                <div className="container has-text-centered">
                    <div className="column is-6 is-offset-3" style={{ backgroundColor: 'rgba(0,0,0,.6)'}}>
                        <h1 style={{color:'white'}} className="title is-size-1">
                            Lyric App
                        </h1>
                        <p style={{color:'white'}} className="subtitle">
                           This app allows users to search for songs and lyric data. This is made possible through the integration of the <span style={{fontWeight: 'bold'}}>musixmatch</span> API back-end. The front-end is built with <span style={{fontWeight:'bold'}}>React</span>.
                        </p>
                        <div className="box" style={{padding: '1rem', backgroundColor: 'transparent'}}>
                           <Search/>
                        </div>
                    </div>
                </div>
            </div>
    </section>
    )
}
