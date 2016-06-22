Package.describe({
  name: 'irvinlim:ivle',
  version: '0.0.4',
  summary: 'Wrapper package for NUS IVLE LAPI services.',
  git: 'https://github.com/irvinlim/meteor-ivle',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.3.2.4');
  api.use('ecmascript');
  api.use('random', 'client');
  api.use('oauth2', ['client', 'server']);
  api.use('oauth', ['client', 'server']);
  api.use('http', 'server');
  api.use('service-configuration', ['client', 'server']);
  api.export('IVLE');

  api.addFiles('server/server.js', 'server');
  api.addFiles('client/client.js', 'client');
});

Npm.depends({
 "args-js": "0.10.11"
});