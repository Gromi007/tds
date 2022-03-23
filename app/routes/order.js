import BoardRoute from './board';
import {action} from '@ember/object';

export default class OrderRoute extends BoardRoute {
  @action transition() {
    this.router.transitionTo('board');
  }

  @action logout() {
    this.userAuth.logout();
    this.refresh();
  }
}
