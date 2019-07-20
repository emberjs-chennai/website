/* eslint-disable node/no-unpublished-require */
'use strict';

const EmberApp = require('ember-cli/lib/broccoli/ember-app');
const crawl = require('prember-crawler');

module.exports = function(defaults) {
  let app = new EmberApp(defaults, {
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
      patterns: ['/(.+)',],
    }
  });
  return app.toTree();
};
