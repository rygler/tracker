/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'tracker',
    environment: environment,
    rootURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    }


  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {

  }

  ENV.contentSecurityPolicy = {
    // Deny everything by default
    'default-src': "'none'",

    // Allow scripts from https://cdn.mxpnl.com
    'script-src': ["'self'", "liveReloadPort"],

    // Allow fonts to be loaded from http://fonts.gstatic.com
    'font-src': ["'self'"],

    // Allow data (ajax/websocket) from bnr-tracker-api.herokuapp.com
    'connect-src': ["'self'", "liveReloadPort", "https://bnr-tracker-api.herokuapp.com"],

    // Allow images from the origin itself (i.e. current domain)
    'img-src': "'self'",

    // Allow inline styles and loaded CSS from http://fonts.googleapis.com
    'style-src': ["'self'", "'unsafe-inline'"],

    // `media-src` will be omitted from policy
    // Browser will fallback to default-src for media resources (which is to deny, see above).
    'media-src': null
  }

  return ENV;
};
