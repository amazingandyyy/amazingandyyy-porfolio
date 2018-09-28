import React, {Component} from 'react';
import { Links } from './data';

export default class Home extends Component {
  renderIntroduction(){
    return (<div>
      <h1>amazingandyyy</h1>
      <div className='centerTitle'>
        <h3>Andy Chen</h3>
      </div>
      <p>Joined Draper University, fall 2018</p>
      <p>CTO of <b>BSOS</b>, summer 2018</p>
      <p>Founded <b>BNS</b>, summer 2018</p>
      <p className='move'>Berkeley ✈ Daly City, summer 2018</p>
      <p className='side'>Built Leptin, side project, spring 2017</p>
      <p className='side'>Built Revieweer, side project, spring 2018</p>
      <p className='side'>Build Shepherd, side project, winter 2017</p>
      <p>served as CTO at <b>Ventured Network</b>, summer 2017</p>
      <p>bought my first Bitcoin at $1254/each, spring 2017</p>
      <p>bought my first Ethereum at $42/each, spring 2017</p>
      <p className='move'>Fremont ✈ Berkeley, 2016</p>
      <p>served as CTO of <b>YeahEdu</b>, healthy, 2015</p>
      <p className='side'>Built Seperpay, side project, 2016</p>
      <p>Studied web dev in Coding House, Summer 2015</p>
      <p className='move'>Mountain View ✈ Fremont, 2016</p>
      <p>changed Major to Anthropology, Fall 2015</p>
      <p>did archaeology in Ireland, Summer 2015</p>
      <p>sold Willo, Spring 2015</p>
      <p>studied Graphic and X design at Foothill College, 2014</p>
      <p className='move'>Taipei ✈ Mountain View, 2014</p>
      <p>founded <b>Willo</b>, Summer 2013</p>
      <p className='move'>Taipei ✈ Shanghai, 2012</p>
      <p>graduate from HSNU, Summer 2012</p>
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
      <div className='centerTitle'>
        <h3>
          Here to find amazingandyyy
        </h3>
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
