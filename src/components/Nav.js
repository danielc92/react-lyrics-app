import React from 'react';
import bg_image from '../images/musicians-690591_1920.jpg';

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
                                <a className="button is-link is-outlined" href="#">
                                    <span className="icon">
                                        <i className="fa fa-home"></i>
                                    </span>
                                    <span>Home</span>
                                </a>
                            </span>
                            <span className="navbar-item">
                                <a className="button is-link is-outlined" href="#">
                                    <span className="icon">
                                        <i className="fa fa-book"></i>
                                    </span>
                                    <span>About</span>
                                </a>
                            </span>
                            <span className="navbar-item">
                                <a className="button is-link is-outlined" href="https://github.com/dansup/bulma-templates/blob/master/templates/landing.html">
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
                        <div className="box">
                            <div className="field is-grouped">
                                <p className="control is-expanded">
                                    <input className="input" type="text" placeholder="Search for lyrics.."></input>
                                </p>
                                <p className="control">
                                    <a className="button is-outlined is-link">
                                        Search
                                    </a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    </section>
    )
}
