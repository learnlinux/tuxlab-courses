/**
 **  TuxLab Course File
 **  Generated Thu, 24 Aug 2017 03:26:18 GMT
 **
 **  Details at https://github.com/learnlinux/tuxlab-courses
 **/

Lab = new TuxLab({
    name: "Basic Git",
    description: "Teaches users how to clone a repository.",
    vm: 'alpine'
});
Lab.init(function (env) {
    Promise.resolve()
        .then(() => {
        return env.shell(["apk", "upgrade"]);
    })
        .then(() => {
        return env.shell(["apk", "add", "git"]);
    })
        .then(() => {
        return env.next();
    });
});
Lab.nextTask({
    setup: function (env) {
        env.next();
    },
    verify: function (env) {
        env.next();
    }
});
Lab.nextTask({
    setup: function (env) {
        env.next();
    },
    verify: function (env) {
        env.fail();
    }
});
Lab.destroy(function (env) {
    env.next();
});
