import React, { Component } from 'react';
import { Route, IndexRoute } from 'react-router';

import App from '../components/app';
import Home from '../components/home';
import Topics from '../components/topics';
import Projects from '../components/projects';
import Hackathons from '../components/hackathons';
import Experiences from '../components/experiences';

const HomeRoute = {
    path: '/',
    component: App,
    indexRoute: { component: Home },
    childRoutes: [{
        path: '/topics',
        component: Topics
    },
    {
        path: '/projects',
        component: Projects
    },
    {
        path: '/hackathons',
        component: Hackathons
    },
    {
        path: '/experiences',
        component: Experiences
    }]
}

export default HomeRoute;