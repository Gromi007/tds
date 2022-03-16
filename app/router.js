import EmberRouter from '@ember/routing/router';
import config from 'tds/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  // eslint-disable-next-line ember/no-capital-letters-in-routes
  this.route('contact', function () {
    this.route('add');
    this.route('update', { path: 'update/:contact_id' });
  });
  this.route('categories', function () {
    this.route('add');
  });
  this.route('Abstractroute');
  this.route('autre');
});
