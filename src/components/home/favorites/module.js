import React, { useState } from 'react';
import './style.scss';
import ReactMarkdown from 'react-markdown';

import data from './data';

function open(link){
    if(link && link!=="") window.open(link, '_blank');
}

const items = [];
// &times;
export default () => {
    const [item, setItem] = useState({});
    const [expand, setExpand] = useState(false);
    const [expandWhole, setExpandWhole] = useState(false);
    const reset = () => {setItem({}); setExpand(false); setExpandWhole(false)};
    const openDrawer = (p) => {setExpand(true);setItem(p)};
    const expandDrawer = () => {setExpandWhole(true)};
    Object.keys(data).forEach(k=>{
        const d = data[k];
        const i = {d, k};
        items.push(i);
    })
    return (<div className='fav-display'>
        <div className={`pin-${expand} display-drawer ${expand} full-${expandWhole}`}>
            <div className='name'>{item.name}</div>
            <div className='check-it' onClick={()=>open(item.link)}>Check it out ></div>
            <span className={`expand ${expandWhole}`} onClick={expandDrawer}>
                <i className="fas fa-chevron-up"></i>
            </span>
            <span className='close' onClick={reset}>
                <i className="fas fa-chevron-down"></i>
            </span>
            {item.intro ? <div className='intro'><ReactMarkdown source={item.intro} /></div>:<div className='intro text-center'>{`More introduction coming up!`}</div>}
        </div>
        {items.map(({d, k})=>{
            return (<div key={k} className='fav-module'>
                <div className='fav-module-title'>{`${k}`}</div>
                <div className={`display-container ${k.split(' ').map(i=>i.toLowerCase()).join('-')}`}>
                    {d.list.map(p=>(<div className={`display-item pin-${item.name===p.name || !expand}`} key={p.name} onClick={()=>openDrawer(p)}>
                        <div className='card' style={{width: `${d.meta.width}`}}>
                            <div className='frame' style={{height: `${d.meta.height}`, width: `${d.meta.width}`}}>
                                <img loading='lazy' alt={p.name} src={p.img} />
                            </div>
                            <p className='name'>{p.name}</p>
                            {p.notes&&<p className='notes'>{`${p.notes}`}</p>}
                        </div>
                    </div>))}
                </div>
            </div>)
        })}
    </div>)
}
