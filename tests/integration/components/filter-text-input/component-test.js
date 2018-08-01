import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, fillIn } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | filter-text-input', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders the placeholder passed to the control', async function(assert) {
    this.set('placeholder', 'Test');
    await render(hbs`{{filter-text-input placeholder=placeholder}}`);
    assert.equal(this.element.querySelector('input').getAttribute('placeholder'), 'Test');
  });

  test('it should give a callback when text is edited', async function(assert) {
    let onTextChanged = (value) => {
      assert.equal(value, 'Test');
    };
    this.set('onTextChanged', onTextChanged);
    await render(hbs`{{filter-text-input onTextChanged=onTextChanged}}`);
    await fillIn('input', 'Test');
  });
});
