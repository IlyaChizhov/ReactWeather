import React, { Component } from 'react'
import {Route, Switch} from 'react-router-dom'
import GreetingForm from '../componetns/GreetingForm/index'
import PageContent from '../componetns/PageContent/index'

class Main extends Component {
    render() {
        return (
            <main>
                <Switch>
                    <Route exact path='/' component={GreetingForm}/>
                    <Route path='/page' component={PageContent}/>
                </Switch>
            </main>
        )
    }
}

export default Main
