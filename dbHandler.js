const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const UserSchema = new Schema({
  username: String,
  password: String
});
const User = mongoose.model('User', UserSchema);

mongoose.connect('mongodb://localhost:27017/userDb', {useNewUrlParser: true});

const createUser = async(data) => {
  return new Promise( (resolve, reject) => {
    User.create(data, (err, res) => {
      err ? reject(err) : resolve(res);
    });
  });
}

const getAllUsers = async() => {
  return new Promise ( (resolve, reject) => {
    User.find({}, (err, res) => {
      err ? reject(err) : resolve(res);
    });
  });
}

const getOneUser = async(id) => {
  return new Promise ( (resolve, reject) => {
    User.findById(id, (err, res) => {
      err ? reject(err) : resolve(res);
    });
  });
}

const deleteUser = async(id) => {
  return new Promise ( (resolve, reject) => {
    User.findByIdAndDelete(id, (err, res) => {
      err ? reject(err) : resolve(res);
    });
  });
}

const updateUser = async(id, data) => {
  return new Promise ( (resolve, reject) => {
    User.findByIdAndUpdate(id, data, (err, res) => {
      err ? reject(err) : resolve(res);
    });
  });
}

module.exports = {
  createUser,
  getAllUsers,
  getOneUser,
  deleteUser,
  updateUser
}