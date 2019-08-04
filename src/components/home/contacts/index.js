import React from 'react';
import './style.scss';

const Links = [{
  title: 'Github',
  url: 'https://github.com/amazingandyyy',
  fa: 'github'
},{
  title: 'Linkedin',
  url: 'https://www.linkedin.com/in/amazingandyyy',
  fa: 'linkedin'
},{
  title: 'Resume',
  url: 'https://amazingandyyy.com/resume/Andy_Chen_Resume_2019.pdf',
  fa: 'address-card'
},{
  title: 'Facebook',
  url: 'https://www.facebook.com/amazingandyyy',
  fa: 'facebook',
}]

export default () => (<div>
    <div className="link-component">
      {Links.map((link, index)=>{
        return (<a onClick={()=>{
          ga("send", "event", "contact", "click", link.title);
        }} rel="noreferrer" href={link.url} target="_blank" key={index}>
        <div className={'link '+link.title}>
          <i className={'fa fa-'+link.fa}></i>
        </div></a>)
      })}
    </div>
</div>)