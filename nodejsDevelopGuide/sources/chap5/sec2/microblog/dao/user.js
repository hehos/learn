var mongodb = require('./db'),
  Schema = mongoose.Schema;


var UserSchema = new Schema({
  name: { type: String },
  email: { type: String },
  password: { type: String }
});

var UserModel = mongoose.model('User',UserSchema);

function User(user) {
  this.user = {
    name: user.name,
    email: user.email,
    password: user.password
  }
};
module.exports = User;

User.prototype.save = function save(callback) {
  // 存入 Mongodb 的文档
  var user = new UserModel(this.user);

  user.save(function (err, res) {

    if (err) {
      console.log("Error:" + err);
      return callback(err);
    }
    else {
      console.log("Res:" + res);
      callback(err, user);
    }

  });

  // mongodb.open(function(err, db) {
  //   if (err) {
  //     return callback(err);
  //   }
  //   // 读取 users 集合
  //   db.collection('users', function(err, collection) {
  //     if (err) {
  //       mongodb.close();
  //       return callback(err);
  //     }
  //     // 为 name 属性添加索引
  //     collection.ensureIndex('name', {unique: true});
  //     // 写入 user 文档
  //     collection.insert(user, {safe: true}, function(err, user) {
  //       mongodb.close();
  //       callback(err, user);
  //     });
  //   });
  // });
};

User.get = function get(username, callback) {
  mongodb.open(function(err, db) {
    if (err) {
      return callback(err);
    }
    // 读取 users 集合
    db.collection('users', function(err, collection) {
      if (err) {
        mongodb.close();
        return callback(err);
      }
      // 查找 name 属性为 username 的文档
      collection.findOne({name: username}, function(err, doc) {
        mongodb.close();
        if (doc) {
          // 封装文档为 User 对象
          var user = new User(doc);
          callback(err, user);
        } else {
          callback(err, null);
        }
      });
    });
  });
};
