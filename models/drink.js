var orm = require("../config/orm.js");

var drink = {
  all: function(cb) {
    orm.all("drinks", function(res) {
      cb(res);
    });
  },
  create: function(cols, vals, cb) {
    orm.create("drinks", cols, vals, function(res) {
      cb(res);
    });
  },
  update: function(objColVals, condition, cb) {
    orm.update("drinks", objColVals, condition, function(res) {
      cb(res);
    });
  },
  delete: function(condition, cb) {
    orm.delete("drinks", condition, function(res) {
      cb(res);
    });
  }
};

module.exports = drink;
