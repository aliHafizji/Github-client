import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import { isPresent } from '@ember/utils';

export default Route.extend({
  ajax: service('ajax'),
  queryParams: {
    sort: {
      refreshModel: true,
      replace: true
    },
    order: {
      refreshModel: true,
      replace: true
    },
    searchTerm: {
      refreshModel: true,
      replace: true
    },
    inName: {
      refreshModel: true,
      replace: true
    },
    inDesc: {
      refreshModel: true,
      replace: true
    },
    inReadme: {
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
  },

  model(params) {
    let { sort, order, searchTerm, inName, inDesc, inReadme, user, organization, size, forks, stars, language, topic } = params;
    let searchQualifiers = [];

    if (isPresent(searchTerm)) {
      searchQualifiers.push(searchTerm);
      if (isPresent(inName) && inName) {
        searchQualifiers.push('in:name');
      }
      if (isPresent(inDesc) && inDesc) {
        searchQualifiers.push('in:description');
      }
      if (isPresent(inReadme) && inReadme) {
        searchQualifiers.push('in:readme');
      }
    }

    if (isPresent(user)) {
      searchQualifiers.push(`user:${user}`);
    }
    if (isPresent(organization)) {
      searchQualifiers.push(`org:${organization}`);
    }
    if (isPresent(size)) {
      searchQualifiers.push(`size:${size}`);
    }
    if (isPresent(forks)) {
      searchQualifiers.push(`forks:${forks}`);
    }
    if (isPresent(stars)) {
      searchQualifiers.push(`stars:${stars}`);
    }
    if (isPresent(language)) {
      searchQualifiers.push(`language:${language}`);
    }
    if (isPresent(topic)) {
      searchQualifiers.push(`topic:${topic}`);
    }

    let requestParams = {
      q: searchQualifiers.join('+')
    };

    if (isPresent(sort)) {
      requestParams.sort = sort;
    }

    if (isPresent(order)) {
      requestParams.order = order;
    }
    return isPresent(searchQualifiers) ? this.get('ajax').request('/search/repositories', {
      data: {
        ...requestParams
      }
    }).then((response) => {
      return response.items;
    }) : [];
  }
});
