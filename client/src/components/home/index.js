import React, {Component} from 'react';
import { Links } from './data';

export default class Home extends Component {
  renderIntroduction(){
    return (<div>
            <br/>- UC Berkeley Alumn(Spring 18)
            <br/>- Draper University Alumn(Fall 18)
            <br/>- attended/mentored over 40 hackathons(12 champions)
            <br/>- active contributor on <a href="https://www.github.com/amazingandyyy" target="_blank">Github</a> 
            <br/>- designer on <a href="https://www.behance.net/andsigner" target="_blank">Behance</a> 
            <br/>- photographer on <a href="https://500px.com/andysign" target="_blank">500px</a>
            <br/>- livestream coding host on <a href="https://www.livecoding.tv/amazingandyyy/" target="_blank">LiveEdu</a>(200K+ views)
            <br/>- consulting experience for 40+ startups
            <br/>- coded with Swift 1.0 > LAMP > RoR > MEAN > MEAN 2.0 -> MERN/RN -> Golang/Node/Solidity
            <br/>- passionated with everything about <b>Node.js</b> and <b>Blockchain</b>
            <br/>
            <br/>
            <hr />
    </div>)
  }
  renderEvents(){
    return (<div>
    Or find me in the following events:
      <ul>
      <li>...</li>
      </ul>
      Email me if you will go either, let’s meet there or go together.
    </div>)
  }
  renderLinks(){
    return (<div>
      <div>
        Here to find me
      </div>
      <div className="link-container">
        {Links.map((link, index)=>{
          return (<a href={link.url} target="_blank" key={index}>
          <div className={'link '+link.title}>
            <i className={'fa fa-'+link.fa}></i>
            <span> {link.title}</span>
          </div></a>)
        })}
      </div>
    </div>)
  }
  render() {
    return (
      <div className="component home">
        {this.renderIntroduction()}
        {this.renderLinks()}
      </div>
    );
  }
}
