
import React from 'react';
import './style.scss'
const HighlightLink = ({text, href}) => {
    return (<span><a href={href} target='_blank'><b>{`${text}`}</b></a>{` `}</span>)
}
export default () => (<div className='timeline-component'>
    <div className='title-component'>
        Timeline <span style={{'display': 'none'}}>I need to list these out so I will not forget where am I coming from.</span>
    </div>
    <p className='side'>Launched <HighlightLink text='MapItOut' href='http://mapitout.github.io/'/> with my wife <span className='date'>2020/04</span></p>
    <p className='general'><b>Get married</b> with my amazing wife 🎊🎊🎊 <span className='date'>2020/03</span></p>
    <p className='general'>Graduated from <HighlightLink text='YC Startup School Online' href='https://www.startupschool.org'/><span className='date'>2019/10</span></p>
    <p className='side'>Launched <HighlightLink text='DecoHash' href='https://decohash.com/#/'/><span className='date'>2019/08</span></p>
    <p className='general'>Joined <HighlightLink text='Minted' href='https://www.minted.com'/> Software Architecture Team <span className='date'>2019/03</span></p>
    <p className='move'>Daly City ✈ San Francisco in 2019</p>
    <p className='general'>Gradudated as Top3 from <HighlightLink text='Draper University' href='https://www.draperuniversity.com'/> <span className='date'>2018/11</span></p>
    <p className='general'>Served as fouding-CTO of <HighlightLink href='https://bsos.tech' text='BSOS'/> <span className='date'>2018/08</span></p>
    <p className='general'>Founded <HighlightLink href='https://onbns.github.io/www' text='BNS'/> <span className='date'>2018/07</span></p>
    <p className='move'>Berkeley ✈ Daly City in 2018</p>
    <p className='side'>Launched <HighlightLink href='https://github.com/amazingandyyy/leptin' text='leptin'/><span className='date'>2018/03</span></p>
    <p className='side'>Launched <HighlightLink href='https://www.facebook.com/revieweer' text='revieweer'/><span className='date'>2018/02</span></p>
    <p className='side'>Launched <b>Shepherd</b> side project <span className='date'>2017/10</span></p>
    <p className='general'>Served as CTO at <b>Ventured Network</b> <span className='date'>2017/08</span></p>
    <p className='general'>Bought my first <b>Ethereum($42)</b> and <b>Bitcoin($1240)</b> <span className='date'>2017/04</span></p>
    <p className='move'>Fremont ✈ Berkeley in 2016</p>
    <p className='side'>Built <b>Seperpay</b> side project <span className='date'>2016/07</span></p>
    <p className='side'>Built <b>JobRM</b> side project <span className='date'>2015/06</span></p>
    <p className='side'>Built <b>VoiceAlbum</b> side project <span className='date'>2015/05</span></p>
    <p className='general'>Studied fullstack JS at <b>CodingHouse</b> <span className='date'>2016/04</span></p>
    <p className='move'>Mountain View ✈ Fremont in 2016</p>
    <p className='general'>Served as CTO of <b>YeahEdu</b> <span className='date'>2015/12</span></p>
    <p className='general'>Changed Major to <b>Anthropology</b> <span className='date'>2015/08</span></p>
    <p className='general'>Did <b>archaeology</b> in Ireland <span className='date'>2015/07</span></p>
    <p className='side'>Built <b>Groove Trend</b> side project <span className='date'>2015/04</span></p>
    <p className='general'>Founded <b>Foothill Taiwanese Association</b> <span className='date'>2014/11</span></p>
    <p className='general'>Studied <b>Graphic&iX design</b> at <b>Foothill College</b> <span className='date'>2014/08</span></p>
    <p className='move'>Shanghai ✈ Mountain View in 2014</p>
    <p className='general'>Founded <b>Willo</b> <span className='date'>2013/07</span></p>
    <p className='general'>Served as president of <b>An-Tai Economics Debate Team</b> <span className='date'>2013/10</span></p>
    <p className='general'>Studied economics at <b>SJTU</b> <span className='date'>2012/08</span></p>
    <p className='move'>Taipei ✈ Shanghai in 2012</p>
    <p className='general'><b>Graduated</b> from <b>HSNU</b> <span className='date'>2012/08</span></p>
    <p className='general'>Won <b>Golden Medal</b> of <b>Taiwan Geography Olympiad</b> <span className='date'>2011/12</span></p>
    <p className='move'>New Taipei ✈ Taipei in 2006</p>
    <p className='general'>Authored <b>ㄅㄨ！ㄅㄨ！車 comic series</b> <span className='date2004/'></span></p>
    <p className='move'>Yun Lin ✈ New Taipei in 1996</p>
    <p className='general'>Born in <b>Yun Lin</b> on Valentines Day. <span className='date'>1994/02/14</span></p>
    <p className='move'>Heaven ✈ World in 1994</p>
</div>)