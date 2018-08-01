import Component from '@ember/component';
import { isPresent } from '@ember/utils';

export default Component.extend({
  value: null,
  placeholder: null,
  onTextChanged: null,

  actions: {
    onValueEdited(value) {
      let onTextChanged = this.get('onTextChanged');

      if (isPresent(onTextChanged)) {
        onTextChanged(value);
      }
    }
  }
});
