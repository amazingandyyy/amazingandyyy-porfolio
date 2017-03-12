import React, {Component} from 'react';
import { Links } from './data';

export default class Home extends Component {
  renderIntroduction(){
    return (<div>
      Introduction
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
          return (<div className={'link '+link.title} key={index}>
            <i className={'fa fa-'+link.fa}></i>
          </div>)
        })}
      </div>
    </div>)
  }
  render() {
    return (
      <div className="component home">
        {this.renderIntroduction()}
        {this.renderStats()}
      </div>
    );
  }
}

// {this.renderLinks()}