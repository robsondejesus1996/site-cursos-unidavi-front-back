export default {
    // url: 'https://strapi-landing-pages-project-2.herokuapp.com/pages/?slug=',
    url: 'http://localhost:1337/api/pages/?filters[slug]=${slug}&populate=deep', 
    siteName: 'Unidavi',
    defaultSlug: 'landing-page',
  };