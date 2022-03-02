import Route from '@ember/routing/route';
import { service } from '@ember/service';
import { action } from '@ember/object';
import Contacts from '../classes/contacts';

export default class TestNewRoute extends Route {
  @service store;
  model() {
    return new Contacts(this.store.findAll('contact'));
  }

  @action add(name) {
    let c = this.store.createRecord('contact', { nom: name });
    c.save();
  }

  @action delete(contact) {
    contact.deleteRecord();
  }

  @action confirmer(contact) {
    contact.save();
  }

  @action cancelDeletion(contacts) {
    contacts.forEach((c) => {
      c.rollbackAttributes();
    });
  }
}
