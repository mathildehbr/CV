import React, { Component } from 'react';
class StickyHeader extends Component {
    render(props) {
      return (
        <div className="block">
            <header className="header">
                <div className="columns is-mobile">
                    <div className="column is-3 is-left"> 
                        <h1 className="header-logo"> Mathilde HAUBERT</h1>
                    </div>
                    <div className="column is-9 is-left"> 
                        <div className="header-menu">
                            <a href="#Contact" onClick={this.props.clickContact}> Contact </a>
                            <a href="#Competences" onClick={this.props.clickCompetences}> Compétences </a>
                            <a href="#Experience" onClick={this.props.clickExp}> Experiences professionnelles </a>
                            <a href="#Etudes" onClick={this.props.clickEtudes}> Etudes </a>
                            <a href="#Loisir" onClick={this.props.clickLoisirs}> Loisirs </a>
                        </div>
                    </div>            
               </div>
            </header> 
        </div>
        
      );
    }
}
export default StickyHeader;
