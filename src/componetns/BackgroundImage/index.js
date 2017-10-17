import React, {Component} from 'react'
import Clouds from '../../assets/img/Clouds.jpg'
import Rain from '../../assets/img/Rain.jpg'
import Clear from '../../assets/img/Clear.jpg'
import Thunderstorm from '../../assets/img/Thunderstorm.jpg'
import Drizzle from '../../assets/img/Drizzle.jpg'
import Snow from '../../assets/img/Snow.jpg'
import Atmosphere from '../../assets/img/Atmosphere.jpg'
import Extreme from '../../assets/img/Extreme.jpg'
import Additional from '../../assets/img/Additional.jpg'
import {connect} from 'react-redux'

import './style.css'

const images = {
    Rain,
    Clouds,
    Clear,
    Thunderstorm,
    Drizzle,
    Snow,
    Atmosphere,
    Extreme,
    Additional
}

class BackgroundImage extends Component {
    render() {
        const {response} = this.props.weather,
            bgImage = response ? <img onLoad={this.handleLoad} src={images[`${response.weather[0].main}`]} alt=""/>
                : ''

        return (
            <div>
                {bgImage}
            </div>
        )
    }

    handleLoad = () => {
        this.props.dispatch({
            type: 'TOGGLE_PRELOADER'
        })
    }
}

function mapStateToProps(state) {
    return {
        weather: state.weather,
        preloader: state.preloader
    }
}

export default connect(mapStateToProps)(BackgroundImage)

