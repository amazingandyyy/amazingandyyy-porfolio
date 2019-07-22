import React from 'react';
import './style.scss';
import data from './data';

function open(link){
    if(link && link!=="") window.open(link, '_blank');
}

export default () => (<div className='fav-display'>
    {Object.keys(data).map(k=>{
        const d = data[k];
        return (<div key={k} className='fav-module'>
            <div className='fav-module-title'>{`${k}`}</div>
            <div className={`display-container ${k.split(' ').map(i=>i.toLowerCase()).join('-')}`}>
                {d.list.map((p, i)=>(<div className='display-item' key={i} onClick={() => open(p.link)}>
                    <div className='card' style={{width: `${d.meta.width}`}}>
                        <div className='frame' style={{height: `${d.meta.height}`, width: `${d.meta.width}`}}>
                            <img loading='lazy' src={p.img} />                            
                        </div>
                        <p className='name'>{p.name}</p>
                        {p.notes&&<p className='notes'>{`${p.notes}`}</p>}
                    </div>
                </div>))}
            </div>
        </div>)
    })}
</div>)
