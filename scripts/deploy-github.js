const ghpages = require('gh-pages');

// replace with your repo url
ghpages.publish(
  'public',
  {
    branch: 'master',
    repo: 'https://lucvankerkvoort.github.io/LVK-Portfolio/',
  },
  () => {
    console.log('Deploy Complete!');
  }
);
