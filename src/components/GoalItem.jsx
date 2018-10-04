import React, { Component } from 'react';
import { connect } from 'react-redux'
import { completeGoalRef } from '../firebase';

class GoalItem extends Component {
    completeGoal() {
        // Add to complete goals on the database
        // Remove this goal from goals reference
        const { email } = this.props.user;
        const { title } = this.props.goal;
        console.log('email', email, 'title', title);
    }
    render() {
        const { email, title } = this.props.goal;
        return (
            <div className="goal-item">
                <h5 className="goal-title">{title}</h5>
                <h5 className="goal-email"> submitted by {email}</h5>
                <button className="btn btn-sm btn-primary"
                onClick={() => this.completeGoal()}
                >
                    Complete
                </button>
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

export default connect(mapStateToProps, null)(GoalItem);
