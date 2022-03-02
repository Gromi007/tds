import Route from '@ember/routing/route';
import { service } from '@ember/service';
import { action } from '@ember/object';

export default class ContactUpdateRoute extends Route {
  @service store;

  model(params) {
    return this.store.findRecord('contact', params.contact_id);
  }

  @action save(contact) {
    contact.save.then(() => {
      this.router.transitionTo('contacts');
    });
  }
}
