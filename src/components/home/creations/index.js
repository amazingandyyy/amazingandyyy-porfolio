import React from 'react';
import './style.scss';

const Links = [{
    title: 'Modeling',
    link: 'https://3dwarehouse.sketchup.com/user/1132019358790131921841269/Entrepreneur-Andy?nav=models',
    background: 'https://i.imgur.com/ECsHSVd.png'
},{
    title: 'Design',
    link: 'https://www.behance.net/amazingandyyy',
    background: 'https://i.imgur.com/dK0oJAs.png'
},{
    title: 'Photography',
    link: 'https://500px.com/amazingandyyy',
    background: 'https://i.imgur.com/tCFwys0.png'
}, {
    title: 'Blogs',
    link: 'https://medium.com/@amazingandyyy',
    background: 'https://akamai-scene7.grandinroad.com/is/image/frontgate/152041_main?$wgih$'
}]

export default () => (<div className='works-component'>
    <div className='title-component'>
        Creations
    </div>
    <div className='card-container'>
        {Links.map(i=>(<a key={i.link} href={i.link} target='_blank'>
                <div className='card-item' style={{'background': `url(${i.background}) no-repeat center center`}}>
                    <div className='title'>{i.title}</div>
                </div>
            </a>)
        )}
        {/* <div className='card-item more' style={{'background': 'rgba(0,0,0,0.05)'}}>
            <div className='title' style={{'color': 'black'}}>More...</div>
        </div> */}
    </div>
</div>)