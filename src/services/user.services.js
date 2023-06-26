const User = require("../models/user.models");

class UserServices {
  static async getById(id) {
    try {
      const user = await User.getById(id);
      return user;
    } catch (error) {
      throw error;
    }
  }

  static async getByEmail(email) {
    try {
      const user = await User.findOne({
        where: {
          email: email
        }
      })
      return user;
    } catch (error) {
      throw error;
    }
  }

}

module.exports = UserServices;