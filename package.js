Package.describe({
  "summary": "CPU Profiler for Meteor (used with Kadira)",
  "version": "1.2.0",
  "git": "https://github.com/meteorhacks/kadira-profiler.git",
  "name": "meteorhacks:kadira-profiler"
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
  api.versionsFrom('METEOR@1.0');
  api.use('http');
  api.use('meteorhacks:kadira@2.22.0');
  api.imply('meteorhacks:kadira@2.22.0');
  api.use('meteorhacks:kadira-binary-deps@1.4.0');

  api.add_files('lib/server.js', 'server');
  api.add_files('lib/client.js', 'client');
}