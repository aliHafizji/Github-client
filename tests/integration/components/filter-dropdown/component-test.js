import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';
import { select } from '../../../helpers/select';

module('Integration | Component | filter-dropdown', function(hooks) {
  setupRenderingTest(hooks);

  test('it should give a callback when an option is selected', async function(assert) {
    let index = 0;
    let onOptionSelected = (option) => {
      if (index === 1) {
        assert.equal(option, 'Test 1');
      }
      index += 1;
    };
    this.set('options', ['Test', 'Test 1']);
    this.set('onOptionSelected', onOptionSelected);
    await render(hbs`{{filter-dropdown options=options onOptionSelected=onOptionSelected}}`);
    select('select', 'Test 1');
  });
});
