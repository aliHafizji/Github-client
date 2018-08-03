import Route from '@ember/routing/route';

export default Route.extend({
  afterModel(model, transition) {
    this.controllerFor('search').setProperties({
      ...transition.queryParams
    });
  }
});
