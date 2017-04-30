import React, {Component} from 'react';
import { Links } from './data';

export default class Home extends Component {
  renderIntroduction(){
    return (<div>
            <br/>- attended/mentored over 20 hackathons(9 champions)
            <br/>- finds me in over 200+ entrepreneur events
            <br/>- designer on <a href="https://www.behance.net/andsigner" target="_blank">Behance</a> 
            <br/>- photographer on <a href="https://500px.com/andysign" target="_blank">500px</a>
            <br/>- livestream coding host on <a href="https://www.livecoding.tv/amazingandyyy/" target="_blank">LiveEdu</a>(200K+ views)
            <br/>- consulting experience for 40+ startups
            <br/>- coded with Swift 1.0 > LAMP > RoR > MEAN > MEAN 2.0 -> MERN/RN -> Golang/Spark/Tensorflow(recently)
            <br/>- passionated with everything about <b>Node.js</b>
            <br/>- current focus is on Cognitive APIs, DevOpts, Blockchain(secretly)
            <br/>- teach web development at UC Berkeley
            <br/>
            <br/>
            <div className="lastSentence"><br/>I am a current student at <a href="http://www.berkeley.edu/" target="_blank">UC Bereley</a> as a Cognitive Science major with a Computer Science concentration.</div>
            <hr />
    </div>)
  }
  renderStats(){
    return (<div>
      Stats
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
