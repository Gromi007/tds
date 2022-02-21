import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | testNew', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:test-new');
    assert.ok(route);
  });
});
