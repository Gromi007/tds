import { set } from '@ember/object';

export default class Contacts {
  data;

  constructor(data) {
    set(this, 'data', data);
  }

  get contacts() {
    return this.data.filterBy('isDeleted', false);
  }

  get deleteds() {
    return this.data.filterBy('isDeleted', true);
  }

  get deletedsCount() {
    return this.deleteds.length;
  }
}
