import React from 'react';
import './style.scss';

const Links = [{
  title: 'Github',
  url: 'https://github.com/amazingandyyy',
  fa: 'github'
},{
  title: 'LinkedIn',
  url: 'https://www.linkedin.com/in/amazingandyyy',
  fa: 'linkedin'
// },{
//   title: 'Resume',
//   url: 'https://amazingandyyy.com/resume/Andy_Chen_Resume_2020.pdf',
//   fa: 'address-card'
},{
  title: 'Twitter',
  url: 'https://twitter.com/amazingandyyyer',
  fa: 'twitter'
}]

export default () => (<div>
    <div className="link-component">
      {Links.map(link => {
        return (<a onClick={()=>{
          ga("send", "event", "contact", "click", link.title);
        }} rel="noreferrer" href={link.url} target="_blank" key={link.url}>
        <div className={'link '+link.title}>
          <i className={'fa fa-'+link.fa}></i>
        </div></a>)
      })}
    </div>
</div>)