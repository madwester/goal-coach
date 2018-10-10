import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setCompleted } from '../../actions'; 
import { completeGoalRef } from '../../firebase';
import './CompleteGoalList.css';
import Button from '../Button/Button';

class CompleteGoalList extends Component {
    constructor() {
        super();
        this.state = {
            showDrop: false,
        };

        this.showDrop = this.showDrop.bind(this);
        this.closeDrop = this.closeDrop.bind(this);
    }

    showDrop(event){
        event.preventDefault();
        this.setState({ showDrop: true }, () => {
            document.addEventListener('click', this.closeDrop);
        });
    }

    closeDrop(){
        this.setState({ showDrop: false }, () => {
            document.removeEventListener('click', this.closeDrop);
        });
    }

    componentDidMount() {
        completeGoalRef.on('value', snap => {
            let completeGoals = [];
            snap.forEach(completeGoal => {
                const { email, title } = completeGoal.val();
                completeGoals.push({email, title});
            })
            this.props.setCompleted(completeGoals);
        })
    }

    clearCompleted() {
        // Setting an empty array in the complete goal ref to empty it
        completeGoalRef.set([]);
    }
    render() {
        return (
            <div className="completed">
                <div className="completed_heading-box">
                    <div className="completed_heading-box-left">
                        <h2 className="completed_heading">Completed Goals</h2>
                    </div>
                    <div className="completed_heading-box-right">
                        <div className="dropdown-arrow">
                            <Button
                                className="btn-symbol"
                                title={<i className='fas fa-sort-down'></i>}
                                action={this.showDrop}
                            />
                        </div>
                        {
                            this.state.showDrop
                            ? 
                            (
                            <div className="drop">
                                <Button 
                                    type="button"
                                    className="btn-clear"
                                    title="Clear all Goals"
                                    action={() => this.clearCompleted()}
                                />
                            </div>
                            )
                            : 
                            (
                                null
                            )
                        }
                    </div>
                </div>
                
                {
                    this.props.completeGoals.map((completeGoal, index) => {
                        const { title, email } = completeGoal;
                        return (
                            <div className="completed_item" key={index}>
                                <p className="completed_text">{title} completed by {email}</p>
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}

function mapStateToProps(state) {
    const { completeGoals } = state;
    return {
        completeGoals
    }
}
export default connect(mapStateToProps, { setCompleted })(CompleteGoalList);