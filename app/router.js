import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('schedule');
  this.route('location');
  this.route('about');
  this.route('sponsors');
  this.route('faq');
});

export default Router;
