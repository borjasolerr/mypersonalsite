const moment = require('moment');

module.exports = function(eleventyConfig) {
  // COLLECTIONS
  // -------------------------------
  // Add CSS
  eleventyConfig.addPassthroughCopy('css');
  // events EN
  eleventyConfig.addCollection('events_en', function(collection) {
    return collection.getFilteredByGlob('./src/en/events/*.md');
  });

  // events ES
  eleventyConfig.addCollection('events_es', function(collection) {
    return collection.getFilteredByGlob('./src/es/events/*.md');
  });

  // posts EN
  eleventyConfig.addCollection('posts_en', function(collection) {
    return collection.getFilteredByGlob('./src/en/posts/*.md');
  });

  // posts ES
  eleventyConfig.addCollection('posts_es', function(collection) {
    return collection.getFilteredByGlob('./src/es/posts/*.md');
  });

  // FILTERS
  // -------------------------------

  // date filter
  eleventyConfig.addNunjucksFilter('date', function(date, format, locale) {
    locale = locale ? locale : 'en';
    moment.locale(locale);
    return moment(date).format(format);
  });

  // CSS MINIFY
  const CleanCSS = require('clean-css');
  module.exports = function(eleventyConfig) {
    eleventyConfig.addFilter('cssmin', function(code) {
      return new CleanCSS({}).minify(code).styles;
    });
  };

  // Base config

  return {
    passthroughFileCopy: true,
    dir: {
      input: 'src',

      output: 'dist'
    }
  };
};
