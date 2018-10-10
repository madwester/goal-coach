import React, { Component } from 'react';
import { connect } from 'react-redux'
import { completeGoalRef, goalRef } from '../../firebase';
import './GoalItem.css';
import Button from '../Button/Button';

class GoalItem extends Component {
    completeGoal() {
        // Add to complete goals on the database
        // Remove this goal from goals reference
        const { email } = this.props.user;
        const { title, serverKey } = this.props.goal;
        goalRef.child(serverKey).remove();
        completeGoalRef.push({email, title});
    }
    render() {
        const { email, title } = this.props.goal;
        return (
            <div className="goal-item">
                <div className="goal-item_text">
                    <h5 className="goal-title">{title}</h5>
                    <h5 className="goal-email"> submitted by {email}</h5>
                </div>
                <div className="goal-item_symbol">
                    <Button 
                        className="btn-symbol"
                        title={<i className='fas fa-check'></i>}
                        action={() => this.completeGoal()}
                    >
                    </Button>
                </div>
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
