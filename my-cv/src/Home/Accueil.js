import React, { Component } from 'react';
import homeImg from '../img/Home.jpg';
import Skills from '../CV/Skills';
import Experiment from '../CV/Experiment';
import StickyHeader from '../Global/StickyHeader';
import Education from '../CV/Education';
import Hobbies from '../CV/Hobbies';

class Accueil extends Component {
    constructor(props) {
        super(props);
        this.competencesSection = React.createRef();
        this.expSection = React.createRef();
        this.etudeSection = React.createRef();
        this.loisirSection = React.createRef();
    }
    scrollToContent(content) {
        content.current.scrollIntoView({behavior: 'smooth'})
    }
    scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
          });
    }
    render() {
      return (
        <div className="block">
            <StickyHeader
                clickContact={this.scrollToTop.bind(this)}
                clickCompetences={this.scrollToContent.bind(this, this.competencesSection)}
                clickExp={this.scrollToContent.bind(this, this.expSection)}
                clickEtudes={this.scrollToContent.bind(this, this.etudeSection)}
                clickLoisirs={this.scrollToContent.bind(this, this.loisirSection)}
             />
            <div className="banner">
                <img src={homeImg} alt="computeur" className="banner-image"></img>
                <div className="banner-text">
                    {/* <figure className="image is-128x128">
                        <img className="is-rounded" src={mhphoto} />
                    </figure> */}
                    <div className="card contact">
                        <header className="card-header">
                            <div className="card-header-title">
                                <h3 className="subtitle"> Contact </h3>
                            </div>
                        </header>
                        <div className="card-content">
                            <div className="content">
                                <div className="columns is-multiline is-mobile">
                                    <div className="column is-full"> 
                                        <span className="icon">
                                            <i className="fas fa-phone"></i>
                                        </span>
                                        <span> +33 6 98 02 32 12 </span>
                                    </div>
                                    <div className="column is-full"> 
                                        <span className="icon">
                                            <i className="fas fa-envelope"></i>
                                        </span>
                                        <span> mathildehaubert@gmail.com </span>
                                    </div>
                                    <div className="column is-full"> 
                                        <span className="icon">
                                            <i className="fab fa-linkedin-in"></i>
                                        </span>
                                        <a href="https://www.linkedin.com/in/mathilde-haubert/" rel="noreferrer" target="_blank">mathilde-haubert</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <header className="card-header">
                            <div className="card-header-title">
                                <h3 className="subtitle"> Profil</h3>
                            </div>
                        </header>
                        <div className="card-content">
                            <div className="content">
                                <p> Après deux ans d’expérience dans le développement informatique orienté web en France, je recherche un emploi dans ce domaine à Montréal à partir d’octobre 2021. J’ai déjà séjourné au Canada lors d’un échange universitaire, depuis l’envie de vivre et travailler dans ce pays ne m’a jamais quitté. Je suis une personne dynamique et motivée, j’aime apprendre et me lancer dans de nouveaux challenges. </p>
                            </div>
                        </div>
                    </div>
                </div>
                <Skills skillsRef={this.competencesSection}/>
                <Experiment expRef={this.expSection}/>
                <Education studyRef={this.etudeSection} />
                <Hobbies hobbiesRef={this.loisirSection} />
            </div>
        </div>
      );
    }
}
export default Accueil;
