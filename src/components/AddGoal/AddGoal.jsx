import React, { Component } from 'react';
import './AddGoal.css';
import { connect } from 'react-redux';
import { goalRef } from '../../firebase';
import Button from '../Button/Button';

class AddGoal extends Component {
    constructor(props){
        super(props);
        this.state = {
            title: ''
        }
    }

    addGoal(){
        console.log('this', this);
        // Can pass any object we want to the database
        const { title } = this.state;
        const { email } = this.props.user;
        goalRef.push({email, title});
    }

    render() {
        return (
            <div className="add-goal">
                <h2 className="add-goal_heading">What's your next goal?</h2>
                <input 
                    type="text"
                    placeholder="Type your goal here.."
                    className="add-goal_input"
                    onChange={event => this.setState({title: event.target.value})}
                />
                <Button 
                    type="button"
                    title="Add Goal"
                    action={() => this.addGoal()}
                    className="btn-default"
                />
            </div>
        )
    }
}

function mapStateToProps(state){
    const { user } = state;
    return {
        user
    }
}

export default connect(mapStateToProps, null)(AddGoal); 