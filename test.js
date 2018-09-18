var lib = require("./library");

log_ = function (message) {
    return console.log(message);
};

djerba_lib = new lib.Library("Djerba");


log_("Djerba library value is : " + djerba_lib.val + " ");

djerba_lib.describe();
djerba_lib.buy("stylo", 3);
djerba_lib.describe();