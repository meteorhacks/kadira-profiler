Package.describe({
  "summary": "CPU Profiler for Meteor (used with Kadira)",
  "version": "1.4.0",
  "name": "bavuongco10:kadira-profiler"
});

Package.onUse(function(api) {
  configurePackage(api);
});

Package.onTest(function(api) {
  configurePackage(api);
  api.use([
    'tinytest',
  ], ['client', 'server']);

});

function configurePackage(api) {
  api.versionsFrom('METEOR@1.4-beta.7');
  api.use('http');
  api.use('check');
  api.use('random');
  api.use('meteorhacks:kadira');
  api.imply('meteorhacks:kadira');
  api.use('bavuongco10:kadira-binary-deps');

  api.add_files('lib/server.js', 'server');
  api.add_files('lib/client.js', 'client');
}
