import App from '../components/app';
import Home from '../components/home';
// import Topics from '../components/topics';
// import Hackathons from '../components/hackathons';

const HomeRoute = {
    path: '/',
    component: App,
    indexRoute: { component: Home }
}
export default HomeRoute;