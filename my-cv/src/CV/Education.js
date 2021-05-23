import React, { Component } from 'react';
import studiesData from '../Datas/studiesData.json'


class Education extends Component {
    renderExperminent() {
        return studiesData.map((item) => {
            return (
                <div key={item.degree} className="card">
                    <header className="card-header">
                        <div className="card-header-title">
                            <div className="columns is-multiline is-mobile">
                                <div className="column is-12 is-left"> 
                                    <h3 className="subtitle"> {item.degree} </h3>
                                </div>
                                <div className="column is-8 is-left"> 
                                    <p className="company "> {item.school} </p>
                                </div>
                                <div className="column is-4"> 
                                    <p className="date"> {item.date} </p>
                                </div>
                            </div>
                        </div>
                    </header>
                </div>
            );
        });
    }

    render() {
      return (
        <div>
            <div ref={this.props.studyRef} className="container">
                <h2 className="title is-2"> Etudes </h2>
                {this.renderExperminent()}
            </div>
        </div>
      );
    }
}
export default Education;
