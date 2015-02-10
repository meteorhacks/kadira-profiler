Kadira.profileCpu = function(arg1, arg2, type) {
  console.log("Kadira: Profiling has been started. Check server logs.");
  Meteor.call('kadira.profileCpu', arg1, arg2, type, function(err, res) {
    if(err) {
      console.error("Kadira: CPU profiling attempt failed: " + err.message);
    } else {
      console.log("Kadira: " + res);
    }
  });
};