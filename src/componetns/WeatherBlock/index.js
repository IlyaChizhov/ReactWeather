import React, {Component} from 'react'
import {connect} from 'react-redux'

import './style.css'

class WeatherBlock extends Component {
    render() {
        const {response} = this.props,
            bool = Boolean(Object.keys(response).length)
        return (
            <div className="weather">
                <h2 className={'header'}>Текущая погода на вашей улице:</h2>
                <p>
                    Улица : {bool ? response.name : 'Подождем...'}
                </p>
                <p>
                    Описание : {bool ? response.weather[0].main : 'Подождем...'}
                </p>
                <p>
                    Скорость ветра : {bool ? response.wind.speed + 'м/с' : 'Подождем...'}
                </p>
                <p>
                    Влажность : {bool ? response.main.humidity + '%' : 'Подождем...'}
                </p>
                <p>
                    Температура : {bool ? Math.round(response.main.temp - 273) + ' ºC' : 'Подождем...'}
                </p>

            </div>
        )
    }

}

function mapStateToProps(state) {
    return {
        response: state.weather
    }
}

export default connect(mapStateToProps)(WeatherBlock)
