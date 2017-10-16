import React, {Component} from 'react'
import {Route, Switch} from 'react-router-dom'
import GreetingForm from './componetns/greetingForm/index'
import PageContent from './componetns/PageContent/index'
import { connect } from 'react-redux'



class App extends Component {

    componentWillMount() {
        // const { getWeather} = this.props
        console.log(this.props);
        const promise = new Promise((res, rej) => {
            try {
                navigator.geolocation.getCurrentPosition(function (position) {
                    let lat = position.coords.latitude
                    let lon = position.coords.longitude
                    console.log(position.coords.latitude, position.coords.longitude);
                    res({lat, lon})
                });
            } catch (err) {
                rej()
                throw new Error(err)
            }
        })

        promise
            .then((arg) => {
                const {lat, lon} = arg
                const weatherUrl = 'http://api.openweathermap.org/data/2.5/weather?APPID=0e3d5b778dc96beb2ce2827fa5e11f87&lat=' + lat + '&lon=' + lon
                const xhr = new XMLHttpRequest()

                xhr.onreadystatechange = () => {
                    if (xhr.readyState === 4) {
                        if(xhr.status === 200) {
                            const res = JSON.parse(xhr.responseText)

                            this.props.dispatch({
                                type: 'GET_WEATHER',
                                payload: res
                            })

                        } else {
                            alert('программиста уже уволили, попробуйте снова!')
                        }
                    }
                }
                xhr.open('get', weatherUrl, true)
                xhr.send()
            })

    }

    render() {
        return (
            <Switch history={this.props.history}>
                <Route exact path='/' component={GreetingForm}/>
                <Route path='/page' component={PageContent}/>
            </Switch>
        );
    }
}


function mapStateToProps(state) {
    return {
        weather: state.weather
    }
}

export default connect(mapStateToProps)(App)