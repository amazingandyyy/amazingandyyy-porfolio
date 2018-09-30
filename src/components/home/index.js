import React, {Component} from 'react';
import { Links } from './data';

export default class Home extends Component {
  renderIntroduction(){
    return (<div>
      <p>Joined <b>Draper University</b> in <span className='date'>09 2018</span></p>
      <p>Served As CTO of <b>BSOS</b> in <span className='date'>08 2018</span></p>
      <p>Founded <b>BNS</b> in <span className='date'>07 2018</span></p>
      <p className='move'>Berkeley ✈ Daly in <span>City in 2018</span></p>
      <p>Graduated from <b>UC Berkeley</b> in <span className='date'>05 2018</span></p>
      <p className='side'>Built <b>Leptin</b> side project in <span className='date'>03 2017</span></p>
      <p className='side'>Built <b>Revieweer</b> side project in <span className='date'>02 2018</span></p>
      <p className='side'>Build <b>Shepherd</b> side project in <span className='date'>10 2017</span></p>
      <p>served as CTO at <b>Ventured Network</b> in <span className='date'>08 2017</span></p>
      <p>bought my first <b>Ethereum</b> and <b>Bitcoin</b> in <span className='date'>04 2017</span></p>
      <p>Studied <b>Cognitive Science</b> at <b>UC Berkeley</b> in <span className='date'>08 2016</span></p>
      <p className='move'>Fremont ✈ in <span>Berkeley in 2016</span></p>
      <p className='side'>Built <b>Seperpay</b> side project in <span className='date'>07 2016</span></p>
      <p className='side'>Built <b>JRM</b> side project in <span className='date'>06 2015</span></p>
      <p className='side'>Built <b>VoiceAlbum</b> side project in <span className='date'>05 2015</span></p>
      <p>Studied web dev in <b>CodingHouse</b> in <span className='date'>04 2016</span></p>
      <p className='move'>Mountain View ✈ in <span>Fremont in 2016</span></p>
      <p>served as CTO of <b>YeahEdu</b> in <span className='date'>12 2015</span></p>
      <p>changed Major to <b>Anthropology</b> in <span className='date'>08 2015</span></p>
      <p>did <b>archaeology</b> in Ireland in <span className='date'>07 2015</span></p>
      <p className='side'>Built <b>Groove Trend</b> side project in <span className='date'>04 2015</span></p>
      <p>Founded <b>Foothill Taiwanese Association</b> in <span className='date'>11 2014</span></p>
      <p>studied <b>Graphic&iX design</b> at <b>Foothill College</b> in <span className='date'>08 2014</span></p>
      <p className='move'>Shanghai ✈ Mountain in <span>View in 2014</span></p>
      <p>founded <b>Willo</b> in <span className='date'>07 2013</span></p>
      <p>Served as president of <b>An-Tai Economics Debate Team</b>in <span className='date'>10 2013</span></p>
      <p>Studied economics at <b>SJTU</b> in <span className='date'>08 2012</span></p>
      <p className='move'>Taipei ✈ in <span>Shanghai in 2012</span></p>
      <p><b>graduated</b> from high school <b>HSNU</b> in <span className='date'>08 2012</span></p>
      <p>Won <b>Golden Metal</b> of <b>Taiwan Geography Olympiad</b> in <span className='date'>12 2011</span></p>
      <p className='move'>New Taipei ✈ in <span>Taipei in 2006</span></p>
      <p>Founded <b>ㄅㄨ！ㄅㄨ！車 comic series</b> in <span className='date'> 2004</span></p>
      <p className='move'>Yun Lin ✈ New in <span>Taipei in 1997</span></p>
      <p>Born in <b>Yun Lin</b> on Feb. in <span className='date'>14 1994</span></p>
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
