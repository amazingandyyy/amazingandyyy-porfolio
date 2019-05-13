import React from 'react';
import './style.scss';

import Timeline from './timeline';
import Contacts from './contacts';
import Creations from './creations';

const Name = () => (<div className='name-title'>
  <div className='name'>Andy Chen</div>
</div>)

export default () => (
  <div className="component home">
    <Name/>
    <Contacts />
    <Timeline />
    <Creations />
  </div>
);