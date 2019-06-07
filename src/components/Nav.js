import React from 'react'

export default function Nav() {
    return (
        <section className="hero is-danger">
        <div className="hero-head">
            <nav className="navbar">
                <div className="container">
                    <div className="navbar-brand">
                        <a className="navbar-item" href="">
                            LYRIC APP
                        </a>
                        <span className="navbar-burger burger" data-target="navbarMenu">
                            <span></span>
                            <span></span>
                            <span></span>
                        </span>
                    </div>
                    <div id="navbarMenu" className="navbar-menu">
                        <div className="navbar-end">
                            <span className="navbar-item">
                                <a className="button is-white is-outlined" href="#">
                                    <span className="icon">
                                        <i className="fa fa-home"></i>
                                    </span>
                                    <span>Home</span>
                                </a>
                            </span>
                            <span className="navbar-item">
                                <a className="button is-white is-outlined" href="#">
                                    <span className="icon">
                                        <i className="fa fa-superpowers"></i>
                                    </span>
                                    <span>Examples</span>
                                </a>
                            </span>
                            <span className="navbar-item">
                                <a className="button is-white is-outlined" href="#">
                                    <span className="icon">
                                        <i className="fa fa-book"></i>
                                    </span>
                                    <span>Documentation</span>
                                </a>
                            </span>
                            <span className="navbar-item">
                                <a className="button is-white is-outlined" href="https://github.com/dansup/bulma-templates/blob/master/templates/landing.html">
                                    <span className="icon">
                                        <i className="fa fa-github"></i>
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
                        <h1 className="title">
                            Search
                        </h1>
                        <h2 className="subtitle">
                           Excepteur tempor cupidatat in nisi voluptate et ullamco eu Lorem laborum. Sit exercitation sint anim nostrud. Pariatur nostrud aliquip dolore exercitation sit. Et id dolor ut officia esse voluptate velit excepteur. Reprehenderit adipisicing officia laboris eu dolore nulla ad ad. Mollit est laborum fugiat do id sint et laborum commodo qui do culpa.
                        </h2>
                        <div className="box">
                            <div className="field is-grouped">
                                <p className="control is-expanded">
                                    <input className="input" type="text" placeholder="Search for lyrics.."></input>
                                </p>
                                <p className="control">
                                    <a className="button is-info">
                                        Notify Me
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
