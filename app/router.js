import EmberRouter from '@ember/routing/router';
import config from 'tds/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  // eslint-disable-next-line ember/no-capital-letters-in-routes
  this.route('testNew');
});
