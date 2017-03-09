const topics = [{
    title: 'Swift',
    date: new Date(2014, 5-1, 1),
    comment: 'Apple is super appealing to me, so Swift is the one put me to start my coding journey. XCode playground is where I learned most of the basic logics/concepts such as variable, if-else statement, for-loop...etc. I really emjoy in using XCode, seeing beautiful elements show up in the screem by just drag-and-drop in storyboard is looks amazing and exciting to me. That must be the first moment that I felt I can create/control the world!',
    resources: [{
        title: 'The Complete iOS8 and Swift Course: Learn by Building 15 Real World Apps',
        resource: 'Udemy',
        instructor: 'Rob Percival',
        url: 'https://www.udemy.com/complete-ios-developer-course/learn/v4/overview',
        comment: 'I think it\'s because of the releasing of Swift and the success of Hour of Code campaign, online-learning platform thrive and get more popular since then. At least I can say I know the site of udemy because of its Swift advertisement on Facebook Ads. I spent my first $$/$49 on udemy/online-learning platform and totally fall in love with creating thing, learning online and Rob Percival. Before this remarkable experience, I never know I can lean such a thing with this level of instructor totally by online. This is too amazing! What a wonderful world!'
    }]
},
{
    title: 'HTML/CSS',
    date: new Date(2014, 7-1, 1),
    comment: 'I have some experience about HTML/CSS on codecademy. Soon enough after Rob\'s iOS course, I spent my second $49 on Rob\'s best known web course on udemy. I think there was no reason for me to switch to web development. It\'s all just because I love Rob and udemy gave me an discount. It\'s my first time to creat a site and afte that nothing can stop me bulding website. I keep doing it until today.',
    resources: [{
        title: 'HTML/CSS',
        resource: 'codecademy',
        instructor: 'codecademy',
        url: 'https://www.codecademy.com/learn/web',
        comment: 'I picked up codecademy in Shanghai and kept learning it on Taiwan. I still remember I post an instagram of my learning on codecademy the night before my flight to the U.S.. Learning coding for me is about thinking how to make my dream come true. I really like codecademy because the pace is all under my control.'
    },{
        title: 'The Complete Web Developer Course - Build 14 Websites',
        resource: 'Udemy',
        instructor: 'Rob Percival',
        url: 'https://www.udemy.com/complete-web-developer-course/learn/v4/overview',
        comment: 'After review all the concepts about HTML/CSS which I learn from codecademy. It\'s more interesting to follow a teacher\'s video to clone BBC\'s home page. Then moved to bootstrap, built RWD website with it is appealing. I write a blog about my first 72 hours of learning web development from Rob.'
    }]
},
{
    title: 'php/MySQL',
    date: new Date(2014, 4-1, 1),
    comment: 'If HTML/CSS are not programming language, then php is first web programming language. It\'s my first time tp learn GET/POST http request and my first experience of how implement logics to change HTML codes.',
    resources: [{
        title: 'The Complete iOS8 and Swift Course: Learn by Building 15 Real World Apps',
        resource: 'Udemy',
        instructor: 'Rob Percival',
        url: 'https://www.udemy.com/complete-ios-developer-course/learn/v4/overview',
        comment: 'Even building a signup/signin form looked so so amaizng and exciting to me. Again I think I was step closer to my dream.'
    },
    {
        title: 'WordPress Theme Development with Bootstrap',
        resource: 'Udemy',
        instructor: 'Brad Hussey',
        url: 'https://www.udemy.com/bootstrap-to-wordpress/learn/v4/overview',
        comment: 'My first experience to use a web framework which is wordpress here. I learn to build a wordpress theme in php. But what I learn more on this project is the process of desing elements in Sketch and import to the website and use advance CSS to make website professional and beautiful. It\'s so cool to actually feel the power of CSS and graphic design.'
    }]
},{
    title: 'Ruby on Rails',
    date: new Date(2015, 1-1, 1),
    comment: 'I once attend a meteor meetup in Taiwan in the summer of 2014, metoer is all how I learned the concept of full-stack framework. I will learn RoR because I feel php is too annoy for me to build big proejct of multiple pages app. I bought RoR tutorial again from Roby on Udemy. After the shock from his complete web course, it made me more sense to stick with him and udemy. ',
    resources: [{
        title: 'The Professional Ruby on Rails Developer',
        resource: 'Udemy',
        instructor: 'Mashrur Hossain',
        url: 'https://www.udemy.com/pro-rubyonrails/learn/v4/overview',
        comment: 'My first experience of full-stack and package management. Gems are amazing but looked too magical to me. I didn\'t do RoR for too long because Ruby is not what I am looking for. Once I started to research about full-stack and my preview experience of meteor, I started to get more interested in JavaScript.'
    }]
},
{
    title: 'CSS ninja with webflow',
    date: new Date(2015, 3-1, 1),
    comment: 'It is definitely my big moment. After having tastes about Swift, php, RoR. I already tried almost four frameworks. I decided to be JavaScript Ninja. Althoght it turns out I become a CSS ninja in 2015. A JS ninja in 2016 which is one year late. ',
    resources: [{
        title: 'Webflow CSS framework',
        resource: 'webflow',
        instructor: 'webflow',
        url: 'https://webflow.com/',
        comment: 'Webflow is a WYSIWYG online editor. I am extreme fans of Y Combinator and it is a YC company back then. I made my first $5000 and some hackathon with webflow. It\'s such an amazing year that I kept using webflow to build whatever I/my client wnat and downloaded the codes and look at the code. Continous deployment via FTP is also one of the most valuable experience I got from this process. I learn to be a confident CSS expert cuding this year. '
    }]
},
{
    title: 'AJAX/jQuery',
    date: new Date(2015, 5-1, 1),
    comment: 'AJAX is used by Gmail and I can unreviel this power by watching online tutorial. It is one of the thing I kept as treasure once I pick it up. It\'s such a powerful new technics. And jQuery is beautiful and easy to use.',
    resources: [{
        title: 'The Ultimate Web Development Course',
        resource: 'Udemy',
        instructor: 'Richard Stibbard',
        url: 'https://www.udemy.com/build-an-instant-update-database-interface-with-jquery-ajax/learn/v4/overview',
        comment: 'The course is called ultimate web dev., but turns out to be my fist door to JS stack development. After I learn jQuery start to build many website and joing a startup to serve as CTO. I thought I am on a half way to my dream.'
    }]
},
{
    title: 'Review everything JS Algorithm',
    date: new Date(2015, 11-1, 1),
    comment: 'I earn my first 10K from freelancing and $12K scholarship in Hackathon, but none of them is backend work and none of them is heavy JS-related. I know my dream is to be a JS full-stack developer. So I create a new account on codecademy and FreeCodeCamp start to review what I learn in the past one year.',
    resources: [{
        title: 'Front End Certification',
        resource: 'FreeCodeCamp',
        instructor: 'FreeCodeCamp',
        url: 'https://www.freecodecamp.com/',
        comment: 'I learned the site of FreeCodeCamp from TWUXD annual event in Plug and Play, sunnyvale. FreeCodeCamp is such an amaizng website that review me DOM and learn how to render JSON data to DOM. It is a super power to me.'
    },
    {
        title: 'Learning Firebase',
        resource: 'Packtpub',
        instructor: 'Mark Nutter',
        url: 'https://www.packtpub.com/web-development/learning-firebase-video',
        comment: 'There are many industry expert have resources on site of Packtpub and I loved it as I love udemy. Firebase is my first ever backend experience. I started to read my artical about if not firebase how much work I need to build. That is my first touch about NodeJS and totlly arouse ambitious of being a JS ninja.'
    },
    {
        title: 'jQuery for Designers Beginner\'s Guide Second Edition',
        resource: 'Packtpub',
        instructor: 'Natalie MacLees',
        url: 'https://www.packtpub.com/web-development/jquery-designers-beginners-guide-second-edition',
        comment: 'I bought over 5 ebooks and videos on Packtpub, and I learned a lot advance jQuery and CSS technics here. I am ready to by a JS ninja, at least I am CSS ninja since then, I told myself...'
    },
    {
        title: 'JavaScript: Understanding the Weird Part',
        resource: 'Udemy',
        instructor: 'Anthony Alicea',
        url: 'https://www.udemy.com/understand-javascript/learn/v4/',
        comment: 'Such an amazing course from Anthony Alicea. It teaches how to apprciate a programming language and bring me to understand JavaScript in a different thinking level.'
    },]
},
{
    title: 'jQuery',
    date: new Date(2016, 4-1, 1),
    comment: 'jQuery is just a easy way to select DOM elements and do some manipulation like append, add props, change style HTTP request, and those things you can also do in s Javascript.'
},
{
    title: 'Node',
    date: new Date(2016, 5-1, 1),
    comment: 'Node is a open source project that make Javascript available outside browser enviroment. It\'s powered by v8 engine and available in linux enviroment, this is what make it to be use for backend.'
},
{
    title: 'Express',
    date: new Date(2016, 5-1, 1),
    comment: 'Express make routing for node powered server stable, easy to use. The concpet of middleware is super useful.'
},
{
    title: 'MongoDB',
    date: new Date(2016, 5-1, 1),
    comment: 'MongoDB is a noSQL database, you can use it like a JSON files. Mongoose API make MongoDB easier to query and manipulate. MongoDB is super easy to scale up and easy to set up. It is easy to connect to any Node backend or available in almost any cloud computing platforms.'
},
{
    title: 'Angular 1.5',
    date: new Date(2016, 5-1, 1),
    comment: 'Angular 1.5 is the first front end framework that I am expert on. It\'s outage now but its wave keeps pushing people\'s passion about innovative frontend framework. I built over 50 projects in Angular 1.5 then move on to Angular 2 and React later on.'
},
{
    title: 'AWS S3',
    date: new Date(2016, 6-1, 1),
    comment: 'S3 is developers\'s dropbox. It\'s API is extremely easy to use and super stable to make any content accessible to anywhere on the worldwide internet.'
},
{
    title: 'Microsoft Cognitive API',
    date: new Date(2016, 6-1, 1),
    comment: 'First evet Cognitive API I have ever use. The API can give back an neat JSON inclduing advance information about an image such as promary color, keyworks, descriptions...etc I built a project called VoiceAlbum which will describe an image to blind people.'
},
{
    title: 'Responsive Voice API',
    date: new Date(2016, 6-1, 1),
    comment: 'My first experience of voice API, it helps me use Amazon Alexa API later on.'
},
{
    title: 'Stripe API',
    date: new Date(2016, 7-1, 1),
    comment: 'The best payment API and provide developer a extremely good sandbox. It\'s my first experience of OAuth API.'
},
{
    title: 'Twilio SMS',
    date: new Date(2016, 7-1, 1),
    comment: 'Twilio\'s annul CONNECT confereince is my first attending to such giant event. Twilio SMS API is one of the most easy and powerful API that give me power to interact with the outside real world.'
},
{
    title: 'Angular 2 RC',
    date: new Date(2016, 7-1, 1),
    comment: 'My second frontend framework that I am expert on. I buid two website with Angular 2 in production, and totally love the concept of components and the well-doc on Angular 2 helps not just a bit.',
    resources: [{
        title: 'Angular 2 - The Complete Guide',
        resource: 'Udemy',
        instructor: 'Maximilian Schwarzmüller',
        url: 'https://www.udemy.com/the-complete-guide-to-angular-2/learn/v4/overview',
        comment: 'After understand angular 1.5, I know more about how to pick up an frontend framework and pick up angular 2 in just a weekend and start to use it in production.'
    }
    ]
},
{
    title: 'Amazon Echo',
    date: new Date(2016, 10-1, 1),
    comment: 'I use Amazon Echo API in a Food Hackathon in SF. Build my first Voice bot app.'
},
{
    title: 'AWS Lambda',
    date: new Date(2016, 10-1, 1),
    comment: 'I built my first microservice.'
},
{
    title: 'Facebook Bot',
    date: new Date(2016, 11-1, 1),
    comment: 'I built my first messanger Bot.'
},
{
    title: 'React Native',
    date: new Date(2016, 11-1, 1),
    comment: 'RN is the best way to try React becasue the enviroment setting and learn curve is almost zero. I tried RN and decide to switch from Angular 2 for React/Redux because the react ecosystem is more fun and flexible.',
    resources: [{
        title: 'The Complete React Native and Redux Course',
        resource: 'Udemy',
        instructor: 'Stephen Grider',
        url: 'https://www.udemy.com/the-complete-react-native-and-redux-course/learn/v4/overview',
        comment: 'Stephen Grider is my second must-follow teacher. I transit from Angular 2 to React super quickly and confidently.'
    }]
},
{
    title: 'React/Redux, ES6',
    date: new Date(2016, 12-1, 1),
    comment: 'I pick React/Redux in a Chirstmas Holiday and totally fall in love it.',
    resources: [{
        title: 'Modern React with Redux',
        resource: 'Udemy',
        instructor: 'Stephen Grider',
        url: 'https://www.udemy.com/react-redux/learn/v4/',
        comment: 'Review Redux and learn everything needed to start do React.'
    },
    {
        title: 'Advanced React and Redux',
        resource: 'Udemy',
        instructor: 'Stephen Grider',
        url: 'https://www.udemy.com/react-redux-tutorial/learn/v4/content',
        comment: 'Learn more advance topics about react such as Testing, HOC..etc'
    }]
},
{
    title: 'Webpack',
    date: new Date(2016, 12-1, 1),
    comment: 'I used to and am good at use gulp before. The concept of Webpack is new and useful as a result.',
    resources: [{
        title: 'Webpack 2: The Complete Developer\'s Guide',
        resource: 'Udemy',
        instructor: 'Stephen Grider',
        url: 'https://www.udemy.com/webpack-2-the-complete-developers-guide/learn/v4/',
        comment: 'Learn to use webpack for production'
    }]
},
{
    title: 'AWS Elastic Beantalk',
    date: new Date(2016, 12-1, 1),
    comment: 'The easy way to deploy web app to AWS EC2. But it is such a pain to custimize server enviroment including the version of node...etc'
},
{
    title: 'Docker/Container',
    date: new Date(2016, 12-1, 1),
    comment: 'After the pain of AWS Elastic Beantalk. I started pick up Docker.The concept of running apps on VM on server is new and totally amazingly useful. I haven\'t use Docker in production tho.',
    resources: [{
        title: 'The Complete Docker Course for DevOps and Developers',
        resource: 'Udemy',
        instructor: 'James Lee',
        url: 'https://www.udemy.com/docker-tutorial-for-devops-run-docker-containers/learn/v4/content',
        comment: 'Learn multiple concepts and methods of setting up Docker and the internet. DevOpt looks appealing to me.'
    }]
},
{
    title: 'Web scraper, Cheerio',
    date: new Date(2017, 1-1, 1),
    comment: 'I use Cheerio to scrape web content on assist.org for my startup\'s needing. It is a pleasure to write a certain bot to so what I need.'
},
{
    title: 'D3 Data Viz/SVG',
    date: new Date(2017, 2-1, 1),
    comment: 'I got inspired by amazing speacker on the event of WaffleJS February. And start to learn the D3 framework.',
    resources: [{
        title: 'Introduction to D3',
        resource: 'Youtube',
        instructor: 'Curran Kelleher',
        url: 'https://www.youtube.com/playlist?list=PL9yYRbwpkykvjkfuRslECO9c1qTq3GgUb',
        comment: 'It feel good to go back youtube to learn new stuff. Long time ago, I always learn new studd on youtbe. D3 is really cool and useful, I beleive it is a beautiful new world for frontend development, I plan to dive into is deeper once I have time.'
    }]
},
{
    title: 'GraphQL',
    date: new Date(2017, 3-1, 1),
    comment: 'I got inspired by a YC Startup called scaphold in the event of NodeSF fabruary.',
    resources: [{
        title: 'GraphQL with React: The Complete Developers Guide',
        resource: 'Udemy',
        instructor: 'Stephen Grider',
        url: 'https://www.udemy.com/graphql-with-react-course/',
        comment: 'I plan to unviel the power of GraphQL on March.'
    }]
},
{
    title: 'Golang',
    date: new Date(2017, 4-1, 1),
    comment: 'I got inspired by Uber engineers in UberHack.',
    resources: [{
        title: 'The Complete Google Go  Programming Course For Beginners',
        resource: 'Udemy',
        instructor: 'Mr. David Valentine',
        url: 'https://www.udemy.com/googlego/learn/v4/overview',
        comment: 'I plan to unviel the power of Golang on April.'
    }]
},
{
    title: 'Bash',
    date: new Date(2017, 5-1, 1),
    comment: 'I got inspired by Uber engineers in UberHack. I plan to unviel the power of Bash on May.'
},
{
    title: 'AMP',
    date: new Date(2017, 6-1, 1),
    comment: 'I plan to unviel the power of AMP on June.'
},
{
    title: 'React AR',
    date: new Date(2017, 7-1, 1),
    comment: 'I plan to unviel the power of React AR on July.'
}
]



export { topics };