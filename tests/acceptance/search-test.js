import { module, test } from 'qunit';
import { setupApplicationTest } from 'ember-qunit';
import { visit, fillIn, click, currentURL } from '@ember/test-helpers';

module('Acceptance | search', function(hooks) {
  setupApplicationTest(hooks);

  test('it should show all the filters correctly', async function(assert) {
    await visit('/search');
    assert.ok(this.element.querySelector('[data-test-filter-search-term]'));
    assert.ok(this.element.querySelector('[data-test-filter-name]'));
    assert.ok(this.element.querySelector('[data-test-filter-desc]'));
    assert.ok(this.element.querySelector('[data-test-filter-readme]'));
    assert.ok(this.element.querySelector('[data-test-filter-user]'));
    assert.ok(this.element.querySelector('[data-test-filter-organizer]'));
    assert.ok(this.element.querySelector('[data-test-filter-repository-size]'));
    assert.ok(this.element.querySelector('[data-test-filter-forks]'));
    assert.ok(this.element.querySelector('[data-test-filter-stars]'));
    assert.ok(this.element.querySelector('[data-test-filter-languages]'));
    assert.ok(this.element.querySelector('[data-test-filter-topic]'));
    assert.ok(this.element.querySelector('[data-test-search-button]'));
  });

  test('it should send the correct query params when the user enters filters', async function(assert) {
    await visit('/search');
    await fillIn('[data-test-filter-search-term] input', 'My new post');
    await click('[data-test-filter-name] input');
    await click('[data-test-filter-desc] input');
    await click('[data-test-filter-readme] input');
    await fillIn('[data-test-filter-user] input', 'CJ');
    await fillIn('[data-test-filter-organizer] input', 'Apple');
    await fillIn('[data-test-filter-repository-size] input', '1000');
    await fillIn('[data-test-filter-forks] input', '50');
    await fillIn('[data-test-filter-stars] input', '100');
    await fillIn('[data-test-filter-topic] input', 'Topic');
    await click('[data-test-search-button]');
    assert.equal(currentURL(), '/search/results?forks=50&inDesc=true&inName=true&inReadme=true&organization=Apple&searchTerm=My%20new%20post&size=1000&stars=100&topic=Topic&user=CJ');
  });
});
