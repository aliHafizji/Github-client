import Route from '@ember/routing/route';

export default Route.extend({
  queryParams: {
    name: {
      refreshModel: true,
      replace: true
    },
    desc: {
      refreshModel: true,
      replace: true
    },
    readme: {
      refreshModel: true,
      replace: true
    },
    user: {
      refreshModel: true,
      replace: true
    },
    organization: {
      refreshModel: true,
      replace: true
    },
    size: {
      refreshModel: true,
      replace: true
    },
    forks: {
      refreshModel: true,
      replace: true
    },
    stars: {
      refreshModel: true,
      replace: true
    },
    language: {
      refreshModel: true,
      replace: true
    },
    topic: {
      refreshModel: true,
      replace: true
    }
  }
});
