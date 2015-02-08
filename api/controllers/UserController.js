/**
 * HomeController.js
 *
 * @description ::
 * @docs        :: http://sailsjs.org/#!documentation/controllers
 */

module.exports = {

  index: function(req, res) {
    User.find(function(err, users) {
    	console.log(users);
        if (err) {return res.serverError(err);}
        return res.view({
        	users: users
        });
    });
  }
};