/// <reference path="../../index.d.ts" />

// Define Lab
Lab = new TuxLab({
  name : "Basic Git",
  description: "Teaches users how to clone a repository.",
  vm: 'alpine'
});

// Setup function run before all other tasks
Lab.init(function(env){

  // Upgrade Packages and install Git
  Promise.resolve()
  .then(() => {
    return env.shell(["apk", "upgrade"])
  })
  .then(() => {
    return env.shell(["apk", "add", "git"])
  })
  .then(() => {
    return env.next();
  })

});

/* @Task 1
   Description of task.  Task is pretty cool.
*/
Lab.nextTask({
  setup: function(env){
    env.next();
  },
  verify: function(env){
    env.next();
  }
});

/* @Task 2
   Description of task.  Task is pretty cool.
*/
Lab.nextTask({
  setup: function(env){
    env.next();
  },
  verify: function(env){
    env.fail();
  }
})

// Destroy function for performing any final tasks
Lab.destroy(function(env){
  env.next();
});
