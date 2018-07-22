Package.describe({
  name: 'miniwe:accounts-semantic',
  version: '1.2.3',
  summary: 'Semantic UI – Accounts UI for React in Meteor 1.6. Miniwe\'s updated',
  git: 'https://github.com/miniwe/accounts-semantic',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.6');
  api.use('ecmascript');
  api.use('underscore');
  api.use('less');
  api.use('std:accounts-ui@1.3.1');

  api.addFiles([
    'styles.less'
  ], 'client');

  api.mainModule('main.jsx');
});
