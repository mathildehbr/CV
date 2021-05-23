import React, { Component } from 'react';
import HardSkills from '../Datas/hardSkillsData.json';
import SoftSkills from '../Datas/softSkillsData.json';
import Languages from '../Datas/languages.json'

class Skills extends Component {
    renderSkills(skills) {
        return skills.map((item) => {
            return (
                <div key={item.name} className="columns">
                    <div className="column is-left is-8" key={item.name}>
                        {item.name} 
                    </div>
                    <div className="column is-4" key={item}>
                        {this.setLevel(item.level)}
                    </div>
                </div>
            );
        });
    }
    setLevel(level) {
        const stars = [1, 2, 3, 4, 5];
        return stars.map((i) => {
            return (i <= level ? 
            <span key={i} className="icon" >
                <i className="fas fa-star" aria-hidden="true"></i>
            </span> :
            <span key={i} className="icon" color="red">
                <i className="far fa-star" aria-hidden="true"></i>
            </span>)
        })
    }
    render() {
      return (
        <div ref={this.props.skillsRef} className="container">
            <div className="columns">
                <div className="column hard-skills"> 
                    <h2 className="title is-2"> Compétences techniques </h2>
                    <div className="card is-white">
                        <div className="card-content">
                            <div className="content">
                                {this.renderSkills(HardSkills)}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="column soft-skills">
                    <h2 className="title is-2"> Compétences humaines </h2>
                    <div className="card is-white">
                         <div className="card-content">
                            <div className="content">
                                {this.renderSkills(SoftSkills)}
                            </div>
                        </div>
                    </div>
                    <h2 className="title is-2"> Langues </h2>
                    <div className="card is-white">
                        <div className="card-content">
                            <div className="content">
                                {this.renderSkills(Languages)}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      );
    }
}
export default Skills;