/* eslint-disable node/no-unpublished-require */
'use strict';

const EmberApp = require('ember-cli/lib/broccoli/ember-app');
const crawl = require('prember-crawler');

module.exports = function(defaults) {
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
          require('tailwindcss')('./config/tailwind.config.js')
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
