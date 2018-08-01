import Component from '@ember/component';
import { isPresent } from '@ember/utils';

export default Component.extend({
  options: null,
  optionGroups: null,

  value: null,
  onOptionSelected: null,

  actions: {
    onOptionSelected(value) {
      let onOptionSelected = this.get('onOptionSelected');
      if (isPresent(onOptionSelected)) {
        onOptionSelected(value);
      }
    }
  }
});
