import Abstractroute from './AbstractRoute';
import {action} from '@ember/object';
import RSVP from 'rsvp';

export default class BoardRoute extends Abstractroute {
  model() {
    let user = this.userAuth.user;
    if (user) {
      return RSVP.hash({
        orders: this.store.query('order', {
          filter: {idEmployee: user.id},
          include: 'orderdetails',
        }),
        employee: user,
      });
    }
  }

  @action transition() {
    this.router.transitionTo('board');
  }

  @action logout() {
    this.userAuth.logout();
    this.refresh();
  }


}
