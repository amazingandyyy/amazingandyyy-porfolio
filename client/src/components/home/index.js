import React, {Component} from 'react';
import { Links } from './data';

export default class Home extends Component {
  renderIntroduction(){
    return (<div>
      <p>Joined <b>Draper University</b>, 09 2018</p>
      <p>Served As CTO of <b>BSOS</b>, 08 2018</p>
      <p>Founded <b>BNS</b>, 07 2018</p>
      <p className='move'>Berkeley ✈ Daly City, 2018</p>
      <p>Graduated from <b>UC Berkeley</b>, 05 2018</p>
      <p className='side'>Built <b>Revieweer</b>, side project, 02 2018</p>
      <p className='side'>Built <b>Leptin</b>, side project, 12 2017</p>
      <p className='side'>Build <b>Shepherd</b>, side project, 10 2017</p>
      <p>served as CTO at <b>Ventured Network</b>, 07 2017</p>
      <p>bought my first <b>Ethereum</b> and <b>Bitcoin</b>, 04 2017</p>
      <p><b>Cognitive Science</b> at <b>UC Berkeley</b>, 05 2018</p>
      <p className='move'>Fremont ✈ Berkeley, 2016</p>
      <p>served as CTO of <b>YeahEdu</b>, 12 2015</p>
      <p className='side'>Built <b>Seperpay</b>, side project, 07 2016</p>
      <p>Studied web dev in <b>CodingHouse</b>, 04 2016</p>
      <p className='move'>Mountain View ✈ Fremont, 2016</p>
      <p>changed Major to <b>Anthropology</b>, 08 2015</p>
      <p>did <b>archaeology</b> in Ireland, 07 2015</p>
      <p><b>sold</b> Willo, 02 2015</p>
      <p>studied <b>Graphic&iX design</b> at Foothill College, 08 2014</p>
      <p className='move'>Taipei ✈ Mountain View, 2014</p>
      <p>founded <b>Willo</b>, 07 2013</p>
      <p className='move'>Taipei ✈ Shanghai, 2012</p>
      <p><b>graduated</b> from HSNU, 08 2012</p>
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
        <div className='centerTitle'>
          <h3>Andy Chen</h3>
        </div>
      {this.renderIntroduction()}
        {this.renderLinks()}
      </div>
    );
  }
}
