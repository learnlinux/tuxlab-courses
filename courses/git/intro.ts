/// <reference path="../../index.d.ts" />

// Define Lab
Lab = new TuxLab({
  name : "Basic Git",
  description: "The basics of Git.",
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

  // Create Directory
  .then(() => {
    return env.shell(["mkdir","/root/my_app"])
  })

  // Return
  .then(() => {
    return env.next();
  })

});

/* @Init
   Initialize a repository in `~/my_app`:

   ```
   cd ~/my_app/
   git init
   ```

   Setup your account:
   ```
   git config --global user.name "Subra Suresh"
   git config --global user.email "ssuresh@cmu.edu"
   ```
*/
Lab.nextTask({
  setup: function(env){
    env.next();
  },
  verify: function(env){

    // Determine if a Git Repository
    env.shell("cd /root/my_app && git rev-parse --git-dir")

    // Return Response
    .then(({stdout, stderr}) => {
      if(stderr.length === 0){
        env.next();
      } else {
        return env.setFeedback("You didn't quite do this right.  Try Again!")
        .then(() => {
          env.retry()
        })
      }
    })
  }
});

/* @Add Features

  (Fast forward to having written some code:
  ```bash
  ls
  featureA  featureB
  ```

  Add one of them to the index:
  ```
  git add featureA
  ```

  Notice that only one of them is added:
  ```
  git status
  ```

  Save the changes by "commiting" them:
  ```
  git commit .
  ```

  <iframe style="width: 100%; min-height: 400px;" src="https://www.youtube.com/embed/I1188GO4p1E" frameborder="0" allowfullscreen></iframe>
*/
Lab.nextTask({
  setup: function(env){

    // Create Feature Files
    Promise.resolve()
    .then(() => {
      return env.shell("touch /root/my_app/featureA /root/my_app/featureB")
    })

    // Return
    .then(() => {
      env.next();
    });
  },

  verify: function(env){

    // Determine if featureA, and only featureA is tracked
    env.shell("cd /root/my_app/ && git ls-tree -r master --name-only")
    .then(({stdout, stderr}) => {
      if(stdout.trim() === "featureA"){
        env.next();
      } else {
        return env.setFeedback("You didn't quite do this right.  Try Again!")
        .then(() => {
          env.retry()
        })
      }
    });

  }
})

// Destroy function for performing any final tasks
Lab.destroy(function(env){
  env.next();
});
