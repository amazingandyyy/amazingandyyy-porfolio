import React from 'react';
import './style.scss';

import Timeline from './timeline';
import Contacts from './contacts';
import Works from './works';
import Favorites from './favorites';
import Footer from './footer';
import Branding from './branding';

export default () => (
  <div className="component home">
    <Branding/>
    <Contacts />
    <Timeline />
    <Works />
    {/* <Favorites /> */}
    <Footer />
  </div>
);
