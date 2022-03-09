import Route from '@ember/routing/route';
import { service } from '@ember/service';
import { action, set } from '@ember/object';

export default class ContactUpdateRoute extends Route {
  @service store;
  @service router;

  model(params) {
    return this.store.findRecord('contact', params.contact_id);
  }

  afterModel(model) {
    let copy = JSON.parse(JSON.stringify(model));
    set(model, 'copy', copy);
  }

  @action save(copy) {
    let contact = this.modelFor(this.routeName);
    Object.assign(contact, copy);
    contact.save().then(() => {
      this.router.transitionTo('contact');
    });
  }

  setupController(controller) {
    controller.set('save', this.save);
  }
}
