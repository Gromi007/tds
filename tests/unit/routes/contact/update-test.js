import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | contact/update', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:contact/update');
    assert.ok(route);
  });
});
