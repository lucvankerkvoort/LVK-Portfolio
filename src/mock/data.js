import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'LVK | Portfolio', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Hi, I am',
  name: 'Luc van Kerkvoort',
  subtitle: "I'm a Front-end Developer",
  cta: 'Know more',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.png',
  paragraphOne:
    'I am a full stack developer with emphasis on front-end development in React.js. I create stunning UIs that are high in performance, low in maintanence and written with reusable code. I am able to create anywhere from small portfolio applications, wordpress adaptations and shopify webshops to custom build CMS systems, sizeable applications and much more.',
  paragraphTwo:
    'I am skilled in Quality Assurance and testing. I can perform both manual testing as well as automated testing using Selennium, UFT or QTP. I have written manual test plans, test cases and executed manual tests for 4 years. I have knowledge of testing with frameworks such as JEST.',
  paragraphThree: 'I am willing to help you with any problem you face on a technilogical front',
  resume:
    'https://firebasestorage.googleapis.com/v0/b/kastjesfabriek.appspot.com/o/images%2FLuc%20van%20Kerkvoort%20Resume%208_26_2020.pdf?alt=media&token=ec0ca105-0057-4b89-b9e6-84a3eceebcc4', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'kastjesfabriek.png',
    title: 'Kastjesfabriek',
    info:
      'I created a custom webshop for a client in The Netherlands. I created the front-end with React.js, Context API, Firebase, SASS, HTML and CSS and created a custom CMS system with Oauth. I provided performance enhancements utilizing React Lazy load and cloud storage through Firebase ',
    info2: '',
    url: 'https://lucvankerkvoort.github.io/kastjesfabriek',
    repo: 'https://github.com/lucvankerkvoort/kastjesfabriek', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'Locals1.png',
    title: 'Locals',
    info:
      'I created a custom travel application for a client in the US. The purpose of the application was to connect local individuals to travelers that are traveling to their hometown. The locals can subscribe to become tour guides for travelers and get trips booked. The backend is build with Node.js, Express.js, Socket.io, MongoDB. The front-end is build with React.js, Context API, SASS, Google Maps API and Firebase.',
    info2: '',
    url: 'https://lucvankerkvoort.github.io/TravelApplication',
    repo: 'https://github.com/lucvankerkvoort/TravelApplication', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'Grouptext.png',
    title: 'Grouptext',
    info:
      'As part of a Open Source project I build the front-end for this application. working together with 2 backend developers we created a messaging application utilizing the Twilio API. The front-end is build with React.js, Context API and SASS, using fetch for API calls. The back-end is build in Python with Django and Docker.',
    info2: '',
    url: 'https://lucvankerkvoort.github.io/GroupTextPWA',
    repo: 'https://github.com/lucvankerkvoort/GroupTextPWA', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'luc.van.kerkvoort@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    // {
    //   id: nanoid(),
    //   name: 'twitter',
    //   url: '',
    // },
    // {
    //   id: nanoid(),
    //   name: 'codepen',
    //   url: '',
    // },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/lucvankerkvoort',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://www.github.com/lucvankerkvoort',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
