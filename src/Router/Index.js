import React from 'react'
import Header from 'components/Header/Header'
import Footer from 'components/Footer/Footer'

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from 'react-router-dom'

import Routes from './Routes'

const Index = () => {
    return (
        <Router>
            <Header />
            <Switch>
                {
                    Routes.map((page, i)=> (
                        <Route
                            key={i}
                            path={page.path}
                            component={page.component}
                            >
                        </Route>
                    ))
                }
            </Switch>
            <Footer />
        </Router>
    )
}

export default Index
