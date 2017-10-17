import React, {Component} from 'react'
import {connect} from 'react-redux'
import './style.css'

function Preloader(props) {
        const preloadBlock = <div className={"preloader-wrap"}>
        <div className="sk-circle">
            <div className="sk-circle1 sk-child"></div>
            <div className="sk-circle2 sk-child"></div>
            <div className="sk-circle3 sk-child"></div>
            <div className="sk-circle4 sk-child"></div>
            <div className="sk-circle5 sk-child"></div>
            <div className="sk-circle6 sk-child"></div>
            <div className="sk-circle7 sk-child"></div>
            <div className="sk-circle8 sk-child"></div>
            <div className="sk-circle9 sk-child"></div>
            <div className="sk-circle10 sk-child"></div>
            <div className="sk-circle11 sk-child"></div>
            <div className="sk-circle12 sk-child"></div>
        </div>
    </div>

        return (
            <div>
                {props.preloader.preloader ? preloadBlock : ''}
            </div>
        )

}

function mapSetStateToProps(state) {
    return {
        preloader: state.preloader
    }
}

export default connect(mapSetStateToProps)(Preloader)