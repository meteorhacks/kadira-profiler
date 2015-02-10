Package.describe({
  "summary": "CPU Profiler for Kadira",
  "version": "1.0.0",
  "git": "https://github.com/meteorhacks/kadira-profiler.git",
  "name": "meteorhacks:kadira-profiler"
});

var npmModules = {};

if(!Package.onUse) {
  // this is not Meteor 0.9
  // we need to add usage @0.4.9 which contains platform specific builds
  // for 0.9+ we are using meteorhacks:kadira-binary-deps
  // which has platform specific builds
  npmModules["v8-profiler"] = "5.2.0";
}

Npm.depends(npmModules);

Package.on_use(function(api) {
  configurePackage(api);
});

Package.on_test(function(api) {
  configurePackage(api);
  api.use([
    'tinytest',
  ], ['client', 'server']);

});

function configurePackage(api) {
  if(api.versionsFrom) {
    // for Meteor version >= 0.9.x
    api.versionsFrom('METEOR@0.9.1');
    api.use('meteorhacks:kadira@2.17.5');
    // binary dependencies
    api.use('meteorhacks:kadira-binary-deps@1.3.1');
  } else {
    // for Meteor versions < 0.9.x
    api.use('kadira');
  }

  api.use('http');
  api.add_files('lib/server.js', 'server');
  api.add_files('lib/client.js', 'client');
}