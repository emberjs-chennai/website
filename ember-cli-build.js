/* eslint-disable node/no-unpublished-require */
'use strict';

const EmberApp = require('ember-cli/lib/broccoli/ember-app');
const crawl = require('prember-crawler');

module.exports = function(defaults) {

  const purgeCSSConfig = {
    module: require('@fullhuman/postcss-purgecss'),
    options: {
      content: [
        './app/index.html',
        './app/templates/**/*.hbs',
      ],
      whitelist: [],
      whitelistPatterns: [],

      // Common extractor for tailwind css class names in the provided content
      defaultExtractor: content => content.match(/[A-Za-z0-9-_:/]+/g) || []
    }
  };

  let app = new EmberApp(defaults, {
    postcssOptions: {
      compile: {
        extension: 'scss',
        enabled: true,
        parser: require('postcss-scss'),
        plugins: [
          {
            module: require('@csstools/postcss-sass'),
            options: {
              includePaths: [
                // To pull up the styles from TailwindCSS and other tp packages
                'node_modules'
              ]
            }
          },
          require('tailwindcss')('./config/tailwind.config.js'),
          purgeCSSConfig
        ]
      }
    },
    prember: {
      urls: crawl
    },
    'asset-cache': {
      include: [
        'assets/**/*',
        'manifest.webmanifest'
      ]
    },
    'ember-service-worker': {
      registrationStrategy: 'inline',
      versionStrategy: 'project-revision'
    },
    'esw-cache-fallback': {
      patterns: [
        '/(.*)',
        'https://chennaiemberjs.in/(.*)'
      ],
    }
  });
  return app.toTree();
};
