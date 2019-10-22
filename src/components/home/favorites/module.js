import React, { useState } from 'react';
import './style.scss';
import data from './data';

function open(link){
    if(link && link!=="") window.open(link, '_blank');
    ga("send", "event", "favorite", "check it out");
}
// &times;
export default () => {
    const [item, setItem] = useState({});
    const [expand, setExpand] = useState(false);
    const reset = () => {setItem({}); setExpand(false)};
    const openDrawer = (p) => {
        setExpand(true);setItem(p);
        ga("send", "event", "favorite", "click", p.name);
    };
    return (<div className='fav-display'>
        <div className={`pin-${expand} display-drawer ${expand}`}>
            <span className='close' onClick={reset}>CLOSE</span>
            <div className='name'>{item.name}</div>
            {item.intro ? <div className='intro'>{item.intro}</div>:<div className='intro text-center'>{`More introduction coming up!`}</div>}
            <div className='check-it' onClick={()=>open(item.link)}>Check it out ></div>
        </div>
        {Object.keys(data).map(k=>{
            const d = data[k];
            return (<div key={k} className='fav-module'>
                <div className='fav-module-title'>{`${k}`}</div>
                <div className={`display-container ${k.split(' ').map(i=>i.toLowerCase()).join('-')}`}>
                    {d.list.map(p=>(<div className={`display-item pin-${item.name===p.name || !expand}`} key={p.name} onClick={()=>openDrawer(p)}>
                        <div className='card' style={{width: `${d.meta.width}`}}>
                            <div className='frame' style={{height: `${d.meta.height}`, width: `${d.meta.width}`}}>
                                <img loading='lazy' async='on' alt={p.name} src={p.img} />
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
