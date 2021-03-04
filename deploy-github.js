const ghpages = require('gh-pages')

ghpages.publish(
  'public',
  {
    branch: 'master',
    repo: 'https://github.com/phoenix-consulting/demoday-public.git',
  },
  () => {
    console.log('Deployed.')
  }
)
