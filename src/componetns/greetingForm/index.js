import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';


class GreetingForm extends Component {
    state = {
        value: ''
    };

    render() {
        const {user} = this.props.user,
            {name} = user;

        const unKnownUser =
            <div>
                <div className="greeting__head">Представьтесь и мы продолжим общение</div>
                <input type="text" name="greeting-name" onChange={this.handleChange}/>
                <button onClick={this.handleSubmit}>Отправить</button>
            </div>;

        let knownUser = <div>
            <Link to="/page">Go to page </Link>
            You are welcome, {name}
        </div>;

        return (
            <div>
                {name ? knownUser : unKnownUser}
            </div>
        );
    }

    handleChange = (e) => {
        this.setState({
            value: e.target.value
        });
    };

    handleSubmit = () => {
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

