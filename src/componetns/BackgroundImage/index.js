import React from 'react'
import Clouds from '../../assets/img/Clouds.jpg'
import Rain from '../../assets/img/Rain.jpg'
import Clear from '../../assets/img/Clear.jpg'
import Thunderstorm from '../../assets/img/Thunderstorm.jpg'
import Drizzle from '../../assets/img/Drizzle.jpg'
import Snow from '../../assets/img/Snow.jpg'
import Atmosphere from '../../assets/img/Atmosphere.jpg'
import Extreme from '../../assets/img/Extreme.jpg'
import Additional from '../../assets/img/Additional.jpg'
import {togglePreloader} from '../../AC/togglePreloader'
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

function BackgroundImage(props) {
    const handleLoad = () => {
        props.togglePreloader()
    }
    const {response} = props,
        bool = Boolean(Object.keys(response).length),
        bgImage = bool ? <img onLoad={handleLoad} src={images[`${response.weather[0].main}`]} alt=""/>
            : ''

    return (
        <div>
            {bgImage}
        </div>
    )
}

function mapStateToProps(state) {
    return {
        response: state.weather,
        preloader: state.preloader
    }
}

export default connect(mapStateToProps, {togglePreloader})(BackgroundImage)

