import React, { Component } from 'react';
import { connect } from 'react-redux';
import { firebaseApp } from '../../firebase'
import './App.css';
import AddGoal from '../AddGoal/AddGoal';
import GoalList from '../GoalList/GoalList';
import CompleteGoalList from '../CompleteGoalList/CompleteGoalList';

class App extends Component {
    signOut(){
        firebaseApp.auth().signOut();
    }
    render() {
        return (
            <div className="content">
                <div className="main-container">
                    <div className="container container_goals">
                        <AddGoal/>
                        <GoalList/>
                    </div>
                    <div className="container container_completedGoals">
                        <CompleteGoalList/>
                    </div>
                </div>
                <footer className="footer">
                    <button
                        className="btn btn-danger"
                        onClick={() => this.signOut()}
                    >
                    Sign out
                    </button>
                </footer>
            </div>
        )
    }
}

function mapStateToProps(state){
    //console.log('state', state);
    return {}
}
export default connect(mapStateToProps, null)(App);