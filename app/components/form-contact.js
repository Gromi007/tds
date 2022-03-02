import Component from '@glimmer/component';
import { action } from '@ember/object';

export default class FormContactComponent extends Component {
  @action save(c) {
    if (this.args.save) {
      this.args.save(c);
    }
  }
}
