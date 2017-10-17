import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

import './style.css'

class GreetingForm extends Component {
    state = {
        value: ''
    };

    render() {
        const {user} = this.props.user,
            {name} = user;

        const unKnownUser =
            <div className="greeting-form">
                <div className="greeting__head">Представьтесь и мы продолжим общение</div>
                <form className={"greeting-submit"} action="" onSubmit={this.handleSubmit}>
                    <input placeholder={"Type your name..."} type="text" name="greeting-name" onChange={this.handleChange}/>
                    <button className={"greeting-link"} type="submit">Отправить</button>
                </form>
            </div>;

        let knownUser = <div className="greeting-form">
            You are welcome, {name}
            <p>
                <Link className="greeting-link" to="/page">current weather</Link>
            </p>
        </div>;

        return (
            <div className="greeting-wrap">
                {name ? knownUser : unKnownUser}
            </div>
        );
    }

    handleChange = (e) => {
        this.setState({
            value: e.target.value
        });
    };

    handleSubmit = (e) => {
        e.preventDefault()

        const value = this.state.value;

        if (value !== '') {
            localStorage.setItem('userName', value);
            let obj = {
                name: value
            };
            this.props.dispatch({
                type: 'GET_USER',
                payload: obj
            });
            this.props.history.push('/page');
        }
    };
}

function mapStateToProps(state) {
    return {
        user: state.user
    };
}

export default connect(mapStateToProps)(GreetingForm);

