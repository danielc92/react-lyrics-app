import React from 'react'

export default function Nav() {
    return (
        <React.Fragment>
                <section class="hero is-danger">
        <div class="hero-head">
            <nav class="navbar">
                <div class="container">
                    <div class="navbar-brand">
                        <a class="navbar-item" href="../">
                            <img src="http://bulma.io/images/bulma-type-white.png" alt="Logo">
                        </a>
                        <span class="navbar-burger burger" data-target="navbarMenu">
                            <span></span>
                            <span></span>
                            <span></span>
                        </span>
                    </div>
                    <div id="navbarMenu" class="navbar-menu">
                        <div class="navbar-end">
                            <span class="navbar-item">
                                <a class="button is-white is-outlined" href="#">
                                    <span class="icon">
                                        <i class="fa fa-home"></i>
                                    </span>
                                    <span>Home</span>
                                </a>
                            </span>
                            <span class="navbar-item">
                                <a class="button is-white is-outlined" href="#">
                                    <span class="icon">
                                        <i class="fa fa-superpowers"></i>
                                    </span>
                                    <span>Examples</span>
                                </a>
                            </span>
                            <span class="navbar-item">
                                <a class="button is-white is-outlined" href="#">
                                    <span class="icon">
                                        <i class="fa fa-book"></i>
                                    </span>
                                    <span>Documentation</span>
                                </a>
                            </span>
                            <span class="navbar-item">
                                <a class="button is-white is-outlined" href="https://github.com/dansup/bulma-templates/blob/master/templates/landing.html">
                                    <span class="icon">
                                        <i class="fa fa-github"></i>
                                    </span>
                                    <span>View Source</span>
                                </a>
                            </span>
                        </div>
                    </div>
                </div>
            </nav>
            </div>

            <div class="hero-body">
                <div class="container has-text-centered">
                    <div class="column is-6 is-offset-3">
                        <h1 class="title">
                            Search
                        </h1>
                        <h2 class="subtitle">
                           Excepteur tempor cupidatat in nisi voluptate et ullamco eu Lorem laborum. Sit exercitation sint anim nostrud. Pariatur nostrud aliquip dolore exercitation sit. Et id dolor ut officia esse voluptate velit excepteur. Reprehenderit adipisicing officia laboris eu dolore nulla ad ad. Mollit est laborum fugiat do id sint et laborum commodo qui do culpa.
                        </h2>
                        <div class="box">
                            <div class="field is-grouped">
                                <p class="control is-expanded">
                                    <input class="input" type="text" placeholder="Enter your email">
                                </p>
                                <p class="control">
                                    <a class="button is-info">
                                        Notify Me
                                    </a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

    </section>

        </React.Fragment>
    )
}
