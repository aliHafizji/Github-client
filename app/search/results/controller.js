import Controller from '@ember/controller';

export default Controller.extend({
  name: null,
  desc: null,
  readme: null,
  user: null,
  organization: null,
  size: null,
  forks: null,
  stars: null,
  language: null,
  topic: null,
  sort: null,
  order: null,

  sortOptions: null,

  init() {
    this.set('sortOptions', ['Most Stars', 'Least Stars']);
    this.set('sort', 'stars');
    this.set('order', 'desc');
  },
  actions: {
    onSortOptionSelected(value) {
      if (value === 'Most Stars') {
        this.set('order', 'asc');
      } else {
        this.set('order', 'desc');
      }
    }
  }
});
