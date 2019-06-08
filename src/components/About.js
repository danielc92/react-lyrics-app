import React, { Component } from 'react'

export default class About extends Component {
    render() {
        return (
            <section className="section">
                <section className="container">
                    <section className="content">
                        <h3>About</h3>
                        <p>This application was built in order to start using the Context API to gain a better understanding of global context usage in React, as well as usage of third party API integration with React. Building this posed some challenges as I have not done API integration with React or used the Context API before. The application is currently being served by github pages.</p>
                        <p>I followed <a href="https://www.youtube.com/watch?v=NDEt0KdDbhk">Traverys tutorials</a> closely and made a lot of adjustments through the project, such as using a different layout, CSS framework and theming.</p>
                        <p>In general the application encompasses the following technical aspects</p>
                        <ul>
                            <li>Use of <strong>axios</strong> library to make API calls to musixmatch service</li>
                            <li>Use of global context using the Context API</li>
                            <li>Creating and using dispatchers, reducers, Providers and Consumers</li>
                            <li>Integrating search functionality by passing url parameters to the API call</li>
                        </ul>
                        <p>This application allows the user upon the first request, to view top 10 tracks in the United States. They can also view lyrics and stats relating to songs that show up in the 'Track List'. Users can also search through the musicmatch database via API calls using the search form to locate track titles of interest.</p>
                    </section>
                </section>
            </section>
        )
    }
}
