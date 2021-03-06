import { module, test } from 'qunit';
import { visit } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';
import Pretender from 'pretender';
import emptyResults from '../../mocks/empty-results';
import { select } from '../../helpers/select';

module('Acceptance | search/results', function(hooks) {
  let server;
  hooks.afterEach(function() {
    if (server) {
      server.shutdown();
    }
  });

  setupApplicationTest(hooks);

  test('it should show no results when none are present', async function(assert) {
    await visit('/search/results');
    assert.ok(this.element.querySelector('[data-test-results-empty-container]'));
  });

  test('it should send the correct request', async function(assert) {
    assert.expect(1);
    server = new Pretender(function() {
      this.get('https://api.github.com/search/repositories', (request) => {
        assert.equal(request.queryParams.q, 'My new post+in:name+in:description+in:readme+user:CJ+org:Apple+size:1000+forks:50+stars:100+topic:Topic');
        return [200, null, JSON.stringify(emptyResults)];
      });
    });
    await visit('/search/results?forks=50&inDesc=true&inName=true&inReadme=true&organization=Apple&searchTerm=My%20new%20post&size=1000&stars=100&topic=Topic&user=CJ');
  });

  test('it should send the correct parameters when the sort option is changed', async function(assert) {
    assert.expect(2);
    let index = 0;
    server = new Pretender(function() {
      this.get('https://api.github.com/search/repositories', (request) => {
        if (index === 0) {
          assert.equal(request.queryParams.order, 'desc');
        } else {
          assert.equal(request.queryParams.order, 'asc');
        }
        index += 1;
        return [200, null, JSON.stringify(emptyResults)];
      });
    });
    await visit('/search/results?searchTerm=My%20new%20post');
    select('[data-test-results-sort-options]', 'Least Stars');
  });
});
