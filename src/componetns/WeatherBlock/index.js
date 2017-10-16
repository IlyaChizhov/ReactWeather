import React, {Component} from 'react'
import {connect} from 'react-redux'

import './style.css'

class WeatherBlock extends Component {
    render() {
        const {response} = this.props.weather
        return (
            <div className="weather">
                <h2 className={'header'}>Текущая погода на вашей улице:</h2>
                <p>
                    Улица : {response ? response.name : 'Подождем...'}
                </p>
                <p>
                    Описание : {response ? response.weather[0].main : 'Подождем...'}
                </p>
                <p>
                    Скорость ветра : {response ? response.wind.speed + 'м/с' : 'Подождем...'}
                </p>
                <p>
                    Влажность : {response ? response.main.humidity + '%' : 'Подождем...'}
                </p>
                <p>
                    Температура : {response ? Math.round(response.main.temp - 273) + ' ºC' : 'Подождем...'}
                </p>

            </div>
        )
    }

}

function mapStateToProps(state) {
    return {
        weather: state.weather
    }
}

export default connect(mapStateToProps)(WeatherBlock)
