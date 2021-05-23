import React, { Component } from 'react';
import Experiments from '../Datas/experiementData.json'


class Experiment extends Component {
    renderExperminent() {
        return Experiments.map((item) => {
            return (
                <div key={item.position} className="card">
                    <header className="card-header">
                        <div className="card-header-title">
                            <div className="columns is-multiline is-mobile">
                                <div className="column is-12 is-left"> 
                                    <h3 className="subtitle"> {item.position} </h3>
                                </div>
                                <div className="column is-6 is-left"> 
                                    <p className="company "> {item.companyName} </p>
                                </div>
                                <div className="column is-6"> 
                                    <p className="date"> {item.date} </p>
                                </div>
                            </div>
                        </div>
                        {/* <button className="button is-white is-medium" aria-label="more options">
                        <span className="icon">
                            <i className="fas fa-angle-down" aria-hidden="true"></i>
                        </span>
                        </button> */}
                    </header>
                    <div className="card-content">
                        <div className="content">
                            <p>
                                <span className="bold"> Contexte projet : </span> {item.assignment}
                            </p>
                            <br />
                            {this.setTask(item.tasks)}
                        </div>
                    </div>
                </div>
            );
        });
    }
    setTask(tasks) {
        return tasks.map((task) => {
            return task.technologies === "" | task.technologies === null  ?
                <p key={task.name}>
                    <i className="fas fa-arrow-right"></i> 
                    &nbsp;{task.name}
                </p> :
                <p key={task.name}>
                    <i className="fas fa-arrow-right"></i> 
                    &nbsp;{task.name} - <span className="technologies" >{task.technologies}</span>
                 </p> 
        });
    }

    render() {
      return (
        <div>
            <div ref={this.props.expRef} className="container">
                <h2 className="title is-2"> Experience professionnelle </h2>
                {this.renderExperminent()}
            </div>
        </div>
      );
    }
}
export default Experiment;
