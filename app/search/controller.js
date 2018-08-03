import Controller from '@ember/controller';
import OptionGroup from '../components/filter-dropdown/option-group';

export default Controller.extend({
  languageOptions: null,
  languageOptionGroups: null,
  licenseOptions: null,
  licenseOptionsGroups: null,

  searchTerm: null,
  inName: null,
  inDesc: null,
  inReadme: null,
  user: null,
  organization: null,
  size: null,
  forks: null,
  stars: null,
  language: null,
  topic: null,

  filterOptionsVisible: true,

  init() {
    this._super();

    this.set('languageOptions', ['Any Language']);
    let popularLanguageOptionGroup = OptionGroup.create({
      groupLabel: 'Popular',
      options: ['Action Script', 'C', 'C#', 'C++', 'Closure', 'CoffeeScript', 'CSS', 'Go', 'Haskell', 'HTML', 'Java',
        'Javascript', 'Lua', 'Matlab', 'Objective-C', 'Perl', 'PHP', 'Python', 'R', 'Ruby', 'Scala', 'Shell', 'Swift',
        'TeX', 'Vim Script']
    });
    let otherLanguageOptionGroup = OptionGroup.create({
      groupLabel: 'Everything else',
      options: ['1C Enterprise', 'ABAP', 'ABNF', 'Ada', 'Adobe Font Metrics', 'Agda', 'AGS Script', 'Alloy',
        'Alpine Abuild', 'AMPL', 'AngelScript', 'Ant Build System', 'ANTLR', 'ApacheConf', 'Apex', 'API Blueprint',
        'APL', 'Apollo Guidance Computer', 'AppleScript', 'Arc', 'AsciiDoc', 'ASN.1', 'ASP', 'AspectJ', 'Assembly', 'ATS',
        'Augeas', 'AutoHotkey', 'AutoIt', 'Awk', 'Ballerina', 'Batchfile', 'Befunge', 'Bison', 'BitBake', 'Blade', 'BlitzBasic',
        'BlitzMax', 'Bluespec', 'Boo', 'Brainfuck', 'Brightscript', 'Bro', 'C-ObjDump', 'C2hs Haskell', 'Cap\'n Proto', 'CartoCss', 'Ceylon', 'Chapel',
        'Charity', 'ChucK', 'Cirru', 'Clarion', 'Clean', 'Click', 'CLIPS', 'Closure Templates', 'Cloud Firestore Security Rules',
        'CMake', 'COBOL', 'ColdFusion', 'ColdFusion CFC', 'COLLADA', 'Common LISP', 'Common Workflow Language', 'Component Pascal',
        'CoNLL-U', 'Cool', 'Coq', 'Cpp-ObjDump', 'Creole', 'Crystal', 'CSON', 'Csound', 'Csound Document', 'Csound Score', 'CSV',
        'Cuda', 'CWeb', 'Cyript', 'Cython', 'D', 'D-ObjDump', 'Darcs Patch', 'Dart', 'DateWeave', 'desktop', 'Diff', 'DIGITAL Command Language',
        'DM', 'DNS Zone', 'Dockerfile', 'Dodgescript', 'DTrace', 'Dylon', 'E', 'Eagle', 'Easybuild', 'EBNF', 'eC', 'Ecere Projects', 'ECL', 'ECLiPSE',
        'Edje Data Collection', 'edn', 'Eiffel', 'EJS', 'Elixir', 'Elm', 'Emacs Lisp', 'EmberScript', 'EQ', 'Erlang', 'F#', 'Factor',
        'Fancy', 'Fantom', 'Filebench WML', 'Filterscript', 'fish', 'FLUX', 'Formatted', 'Forth', 'Fortran', 'FreeMarker', 'Frege',
        'G-code', 'Game Maker Language', 'GAMS', 'GAP', 'GCC Machine Description', 'GDB', 'GDScript', 'Genie', 'Genshi', 'Gentoo Ebuild',
        'Gentoo Eclass', 'Gerber Image', 'Gettext Catalog', 'Gherkin', 'GLSL', 'Glyph', 'GN', 'Gnuplot', 'Golo', 'Gosu', 'Grace',
        'Gradle', 'Grammatical Framework', 'Graph Modeling Language', 'GraphQL', 'Graphviz (DOT)', 'Groovy', 'Groovy Server Pages',
        'Hack', 'Haml', 'Handlebars', 'Harbour', 'Haxe', 'HCL', 'HiveQL', 'HLSL', 'HTML+Django', 'HTML+ECR', 'HTML+EEX', 'HTML+ERB',
        'HTML+PHP', 'HTTP', 'HXML', 'Hy', 'HyPhy', 'IDL', 'Idris', 'IGOR Pro', 'Inform 7', 'INI', 'Inno Setup', 'Io', 'Ioke', 'IRC log',
        'Isabelle', 'Isabelle ROOT', 'J', 'Jasmin']
    });
    this.set('languageOptionGroups', [popularLanguageOptionGroup, otherLanguageOptionGroup]);
  },
  actions: {
    onAccordianToggle() {
      this.toggleProperty('filterOptionsVisible');
    },
    searchSelected() {
      let {
        searchTerm,
        inName,
        inDesc,
        inReadme,
        user,
        organization,
        size,
        forks,
        stars,
        language,
        topic
      } = this.getProperties('searchTerm', 'inName', 'inDesc', 'inReadme', 'user', 'organization',
        'size', 'forks', 'stars', 'language', 'topic');
      this.transitionToRoute('search.results', { queryParams: { searchTerm, inName, inDesc, inReadme,
        user, organization, size, forks, stars, language, topic } });
    }
  }
});
