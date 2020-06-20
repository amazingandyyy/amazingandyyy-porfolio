import React from 'react';
import './style.scss';

const Links = [{
    title: 'Open Source',
    link: 'https://github.com/amazingandyyy',
    background: 'https://miro.medium.com/max/1000/1*R6w2vjh0ve0sb7aM40-n_g.jpeg'
},{
    title: 'Modeling',
    link: 'https://3dwarehouse.sketchup.com/user/1132019358790131921841269/Entrepreneur-Andy?nav=models',
    background: 'https://i.imgur.com/sVKzIjf.png'
},{
    title: 'Design',
    link: 'https://www.behance.net/amazingandyyy',
    background: 'https://i.imgur.com/dK0oJAs.png'
},{
    title: 'Photography',
    link: 'https://500px.com/amazingandyyy',
    background: 'https://i.imgur.com/DCMWnJR.jpg'
}, {
    title: 'Blogs',
    link: 'https://medium.com/@amazingandyyy',
    background: 'https://akamai-scene7.grandinroad.com/is/image/frontgate/152041_main?$wgih$'
}]

export default () => (<div className='works-component'>
    <div className='title-component'>
        Create something at
    </div>
    <div className='card-container'>
        {Links.map(i=>(<a onClick={()=>{
          ga("send", "event", "work", "click", i.title);
        }} rel="noreferrer" key={i.link} href={i.link} target='_blank'>
                <div className='card-item'>
                    <div className='title'>{i.title}</div>
                    <img loading='lazy' alt={i.title} className='background' src={i.background}/>
                </div>
            </a>)
        )}
    </div>
</div>)
