import Controller from '@ember/controller';
import { action } from '@ember/object';
import { service } from '@ember/service';

export default class AddController extends Controller {
  @service store;
  @service router;

  @action save(contact) {
    let c = this.store.createRecord('contact', contact);
    c.save().then(() => {
      this.router.transitionTo('contacts');
    });
  }
}

