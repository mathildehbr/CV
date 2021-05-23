import React, { Component } from 'react';
import HobbiesData from '../Datas/hobbiesData.json'


class Hobbies extends Component {
    setTask() {
        return HobbiesData.map((hobby) => {
                return (
                    <p key={hobby.name}>
                        <i className={hobby.logo}></i> 
                        &nbsp;{hobby.name}
                    </p>
                ) 
        });
    }
    render() {
      return (
        <div>
            <div ref={this.props.hobbiesRef} className="container">
                <h2 className="title is-2"> Loisirs </h2>
                <div className="card">
                    <header className="card-header">
                        <div className="card-content">
                            <div className="content">
                                {this.setTask()}
                            </div>
                        </div>
                    </header>
                </div>
            </div>
        </div>
      );
    }

}
export default Hobbies;
