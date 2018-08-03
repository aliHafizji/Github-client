import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, click } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | filter-checkbox', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders the label correctly', async function(assert) {
    this.set('label', 'Test');
    await render(hbs`{{filter-checkbox label=label}}`);
    assert.equal(this.element.querySelector('[data-test-filter-checkbox-label]').textContent.trim(), 'Test');
  });

  test('it should give a callback when checkbox is toggled', async function(assert) {
    assert.expect(1);
    let onCheckedChanged = (value) => {
      assert.ok(value);
    };
    this.set('onCheckedChanged', onCheckedChanged);
    await render(hbs`{{filter-checkbox onCheckedChanged=onCheckedChanged}}`);
    await click('[data-test-filter-checkbox-input]');
  });
});
