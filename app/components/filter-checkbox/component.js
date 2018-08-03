import Component from '@ember/component';
import { isPresent } from '@ember/utils';

export default Component.extend({
  isChecked: false,
  label: null,
  onCheckedChanged: null,

  actions: {
    onSelected(value) {
      let onCheckedChanged = this.get('onCheckedChanged');

      if (isPresent(onCheckedChanged)) {
        onCheckedChanged(value);
      }
    }
  }
});
