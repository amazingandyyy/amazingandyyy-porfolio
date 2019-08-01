import React, { useState, useEffect } from 'react';
import './style.scss';
import ReactMarkdown from 'react-markdown';

import data from './data';

function open(link){
    if(link && link!=="") window.open(link, '_blank');
}

export default () => {
    const [item, setItem] = useState({});
    const [expand, setExpand] = useState(false);
    const [expandWhole, setExpandWhole] = useState(false);
    const [order, setOrder] = useState([]);
    
    const reset = () => {setItem({}); setExpand(false); setExpandWhole(false)};
    const openDrawer = (p, i) => {
        setExpand(true);
        setItem(p)
        const keys = Object.keys(data);
        keys.splice(i+1, 0, "DISPLAY");
        setOrder(keys);
    };
    useEffect(() => {
        setOrder(Object.keys(data));
    }, []);
    const expandDrawer = () => {setExpandWhole(true)};
    return (<div className='fav-display'>
        {order.length>0&&order.map((k, i)=>{
            if(k=='DISPLAY'){
                const index = order.indexOf('DISPLAY');
                order.splice(index, 1);
                return (<div key={k} className='fav-module'>
                    <div className={`pin-${expand} display-detail ${expand} full-${expandWhole}`}>
                        <div className='name'>{item.name}</div>
                        <div className='check-it' onClick={()=>open(item.link)}>Check it out ></div>
                        <span className='close' onClick={reset}>
                            <i className="fas fa-chevron-down"></i>
                        </span>
                        {item.intro ? <div className='intro'><ReactMarkdown source={item.intro} /></div>:<div className='intro text-center'>{`More introduction coming up!`}</div>}
                    </div>
                </div>)
            }else if(data[k]){
                const d = data[k];
                return (<div key={k} className='fav-module'>
                    <div className='fav-module-title'>{`${k}`}</div>
                    <div className={`display-container ${k.split(' ').map(i=>i.toLowerCase()).join('-')}`}>
                        {d.list.map(p=>(<div className={`display-item pin-${item.name===p.name || !expand}`} key={p.name} onClick={()=>openDrawer(p, i)}>
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
            }
        })}
    </div>)
}
