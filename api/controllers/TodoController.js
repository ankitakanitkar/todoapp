/**
 * TodoController
 *
 * @module      :: Controller
 * @description	:: A set of functions called `actions`.
 *
 *                 Actions contain code telling Sails how to respond to a certain type of request.
 *                 (i.e. do stuff, then send some JSON, show an HTML page, or redirect to another URL)
 *
 *                 You can configure the blueprint URLs which trigger these actions (`config/controllers.js`)
 *                 and/or override them with custom routes (`config/routes.js`)
 *
 *                 NOTE: The code you write here supports both HTTP and Socket.io automatically.
 *
 * @docs        :: http://sailsjs.org/#!documentation/controllers
 */

module.exports = {
    
  
  /**
   * Action blueprints:
   *    `/todo/index`
   *    `/todo`
   */
   index: function (req, res) {
    
    // Send a JSON response
    console.log("hello");
    Todo.find().done(function(err,todos){
      console.log(todos.length);
      if (err) return res.send(console.log(todos));
      return res.json(todos);
    });
    
  },


  /**
   * Action blueprints:
   *    `/todo/create`
   */
   create: function (req, res) {
    
    // // Send a JSON response
    // todo = {
    //   title: req.param('title'),
    //   status: 'in progress'
    // }
    // Todo.save(todo);
    // return res.json(todo);

    var title = req.param("title");
    Todo.create({title: title},function todoCreated(err,user){
      if (err) {

      }
      else {
         res.json(user);
      }
    });
   
  },


  /**
   * Action blueprints:
   *    `/todo/new`
   */
   new: function (req, res) {
    
    // Send a JSON response
    return res.json({
      hello: 'world'
    });
  },


  /**
   * Action blueprints:
   *    `/todo/show`
   */
   show: function (req, res) {
    
    // Send a JSON response
    return res.json({
      hello: 'world'
    });
  },


  /**
   * Action blueprints:
   *    `/todo/edit`
   */
   edit: function (req, res) {
    
    // Send a JSON response
    return res.json({
      hello: 'world'
    });
  },


  /**
   * Action blueprints:
   *    `/todo/delete`
   */
   delete: function (req, res) {
    
    // Send a JSON response
    return res.json({
      hello: 'world'
    });
  },




  /**
   * Overrides for the settings in `config/controllers.js`
   * (specific to TodoController)
   */
  _config: {}

  
};
