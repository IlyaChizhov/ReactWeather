import React, { Component } from 'react'
import BackgroundImage from '../BackgroundImage'
import WeatherBlock from '../WeatherBlock'

export default class Content extends Component {
    render() {
        return (
            <div>
                <WeatherBlock />
                <BackgroundImage />
            </div>
        )
    }
}