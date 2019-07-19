import React from 'react';
import './style.scss';

import Timeline from './timeline';
import Contacts from './contacts';
import Works from './works';
import Favorites from './favorites';

const Name = () => (<div className='name-title'>
  <div className='name'>Andy Chen</div>
</div>)

export default () => (
  <div className="component home">
    <Name/>
    <Contacts />
    <Timeline />
    <Works />
    <Favorites />
  </div>
);