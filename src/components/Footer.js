import React, { Component } from 'react'

export default class Footer extends Component {
    render() {
        return (
        <footer className="footer">
            <div className="container">
                <div className="content has-text-centered">
                   <p>Developed by <strong>Daniel Corcoran</strong></p>
                   <p>Styled with <a href="https://bulma.io/">Bulma CSS Framework</a></p>
                   <p>Images from <a href="https://pixabay.com/">Pixabay</a></p>
                   <p>Icons from <a href="https://fontawesome.com/">Fontawesome</a></p>
                    <p>Integrating search functionality in the app by passing url parameters to the API call</p>
                </div>
            </div>
        </footer>
        )
    }
}
