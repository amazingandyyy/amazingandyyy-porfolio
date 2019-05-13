import React from 'react';
import './style.scss';
import { Links } from './data';

export default () => (<div>
    <div className="link-component">
      {Links.map((link, index)=>{
        return (<a href={link.url} target="_blank" key={index}>
        <div className={'link '+link.title}>
          <i className={'fa fa-'+link.fa}></i>
          {/* <span> {link.title}</span> */}
        </div></a>)
      })}
    </div>
</div>)