import React, { Component } from 'react';
import { connect } from 'react-redux'; 
import { goalRef } from '../../firebase';
import { setGoals } from '../../actions';
import GoalItem from '../GoalItem/GoalItem';
import './GoalList.css';

class GoalList extends Component {
    componentDidMount(){
        goalRef.on('value', snap => {
            let goals = [];
            snap.forEach(goal => {
                const { email, title } = goal.val();
                // Taking the key from database
                const serverKey = goal.key;
                goals.push({ email, title, serverKey });
            })
            this.props.setGoals(goals);
        })
    }
    render(){
        return (
            <div className="list">
                <h2 className="list_heading">Goals to Complete</h2>
                {
                    // Map over one goal at a tima
                    this.props.goals.map((goal, index) => {
                        return (
                            <GoalItem key={index} goal={goal}/>
                        )
                    })
                }
            </div>
        )
    }
}


function mapStateToProps(state){
    const { goals } = state;
    return {
        goals
    }
}
export default connect(mapStateToProps, { setGoals })(GoalList);

