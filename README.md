# CPU Profiler for Kadira

#### Take CPU profiles of your Meteor app and analyze them.

First, install this package into your Meteor app.

~~~shell
meteor add meteorhacks:kadira-profiler
~~~

Then run your app with the following environment variable.

~~~
export KADIRA_PROFILE_LOCALLY=1
~~~

* Then open your app in the browser and open the browser console.
* Now invoke this command: `Kadira.profileCpu(10)`
* It will profile your app for 10 seconds and save the profile to a temporary location.

Then visit [Kadira Debug](http://debug.kadiraio.com/debug?tab=cpu-profiler) and load the saved CPU profile. 

For more infomation [visit here](https://kadira.io/platform/kadira-debug/cpu-profiling).

[![Kadira CPU Analyzer](https://cldup.com/9e2Zti7psL.png)](https://kadira.io/platform/kadira-debug/cpu-profiling)

