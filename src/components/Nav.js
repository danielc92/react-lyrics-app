import React from 'react';
import bg_image from '../images/musicians-690591_1920.jpg';
import Search from '../components/Search';
import {Link} from 'react-router-dom';

export default function Nav() {
    return (
        <section className="hero is-link is-medium" style={{backgroundSize:'cover', backgroundImage:`url(${bg_image})`}}>
        <div className="hero-head">
            <nav className="navbar">
                <div className="container">
                    <div className="navbar-brand">
                        <p className="navbar-item">
                            <strong>LYRIC APP</strong>
                        </p>
                        <span className="navbar-burger burger" data-target="navbarMenu">
                            <span></span>
                            <span></span>
                            <span></span>
                        </span>
                    </div>
                    <div id="navbarMenu" className="navbar-menu">
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
                    <div className="column is-6 is-offset-3">
                        <h1 className="title is-size-1">
                            Lyric React App
                        </h1>
                        <h2 className="subtitle">
                           A web application developed by Daniel Corcoran. Allows users to search popular songs, lyrics using the musixmatch API/axios as a back-end and React as a front-end..
                        </h2>
                        <div className="box" style={{padding: '1rem', backgroundColor: 'transparent'}}>
                           <Search/>
                        </div>
                    </div>
                </div>
            </div>
    </section>
    )
}
