// var Todo = Backbone.Model.extend({
//   defaults: {
//     title: 'Buy food',
//     completed: false
//   },

//   validate: function(attrs) {
//     if (attrs.title === undefined) {
//       return "Remember to set a title for your todo";
//     }
//   },

//   initialize: function() {
//     console.log("This model has been initialized");
//     this.on("invalid", function(model, error) {
//       console.log(error);
//     });
//   }
// });

// var todo = new Todo;

// var TodoView = Backbone.View.extend({
//   tagName: 'li',

//   todoTpl: _.template( $('#item-template').html() ),

//   events: {
//     'dblclick label': 'edit',
//     'keypress .edit': 'updateOnEnter',
//     'blur .edit': 'close'
//   },

//   render: function(){
//     this.$el.html( this.todoTpl( this.model.toJSON() ) );
//     this.input = this.$('.edit');
//     return this;
//   },

//   edit: function() {},
//   close: function() {},
//   updateOnEnter: function() {},
// });

// var view = new TodoView({ model: todo });
// console.log(view.el);

// var TodosView = Backbone.View.extend({
//   tagName: 'ul',
//   className: 'container',
//   id: 'todos'
// });

// var todos = new TodosView();
// console.log(todos.el);

// var TodosCollection = Backbone.Collection.extend({
//   model: Todo,
// });

// var myTodo = new Todo({ title: 'Read the whole book', id: 2 });
// var todos = new TodosCollection([myTodo]);
// console.log("Collection size: " + todos.length);

// var todo2 = todos.get(2);
// console.log("Collection id fetching, are objects equal? " + (todo2 === myTodo));

// var todoCid = todos.get(todo2.cid);
// console.log("Collection cid fetching, are objects equal? " + (todoCid === todo2));

// var Todo = Backbone.Model.extend({
//   defaults: {
//     title: '',
//     completed: false
//   }
// });

// var TodosCollection = Backbone.Collection.extend({
//   model: Todo,

//   initialize: function() {
//     this.on('add', function(todo) {
//       console.log("I should " + todo.get('title') + ". Have I done it before? " +
//                   (todo.get('completed') ? 'Yeah!' : 'Not.' ));
//     });

//     this.on('change:title', function(todo) {
//       var old = this.get(todo.cid);
//       console.log("I have changed my mind about " + todo.previous('title') +
//                   ". Now I want to do " + todo.get('title') + " instead.");
//     });
//   }
// });

// var a = new Todo({ title: 'Read Sandi Metz' }),
//   b = new Todo({ title: 'Watch destroy all software', completed: true }),
//   c = new Todo({ title: 'Learn Backbone' });

// var todos = new TodosCollection([a, b]);
// console.log("Collection size: " + todos.length);

// todos.add(c);
// console.log("Collection size: " + todos.length);

// todos.remove([a, b]);
// console.log("Collection size: " + todos.length);

// todos.add([c, b]);
// console.log("Collection size: " + todos.length);

// c.set('title', 'Go fishing');

// var TodosCollection = Backbone.Collection.extend({
//   model: Todo,
//   url: "/todos"
// });

// var todos = new TodosCollection();

// todos.add([
//   { id: 1, title: 'One', completed: false },
//   { id: 2, title: 'Two', completed: true },
//   { id: 3, title: 'Three', completed: false }
// ]);

// todos.on('add', function(model) {
//   console.log("Added " + model.get('title'));
// });

// todos.on('remove', function(model) {
//   console.log("Removed " + model.get('title'));
// });

// todos.on('change:completed', function(model) {
//   console.log(model.get('title') + " changed from " + model.previous('completed') +
//               " to " + model.get('completed'));
// });

// todos.update([
//   { id: 1, title: 'One', completed: true },
//   { id: 2, title: 'Two', completed: true },
//   { id: 4, title: 'Four', completed: true }
// ]);

// var Todo = Backbone.Model.extend({
//   defaults: {
//     title: '',
//     completed: false
//   },

//   initialize: function(){
//     this.on('invalid', function(model, error) {
//       console.log(error);
//     });
//   },

//   validate: function(attrs){
//     if (attrs.title === '') {
//       return "Title must not be blank";
//     }
//   },
// });

// var TodosCollection = Backbone.Collection.extend({
//   model: Todo,
//   url: 'todos'
// });

// var todos = new TodosCollection();
// todos.fetch({
//   success: function() {
//     console.log(todos);
//     var todo2 = todos.get(2);
//     console.log(todo2.toJSON());
//     todo2.set('title', '');
//     // todo2.save();
//     // todos.create({ title: 'Sleep a bit' });
//   }
// });

// var TodosCollection = new Backbone.Collection();

// TodosCollection.add([
//   { title: 'go to China', completed: false },
//   { title: 'go to Belgium', completed: false },
//   { title: 'go to Sweden', completed: true }
// ]);

// TodosCollection.each(function(model) {
//   console.log(model.get('title'));
// });

// var collection = new Backbone.Collection([
//   { name: 'Tim', age: 5 },
//   { name: 'Ida', age: 26 },
//   { name: 'Rob', age: 55 }
// ]);

// var filteredNames = collection.chain().
//   filter(function(item) { return item.get('age') > 10; }).
//   map(function(item) { return item.get('name'); }).
//   value();

// console.log(filteredNames);

// Backbone.on('custom_event', function() { console.log("Custom event fired!"); });
// setTimeout(function() { Backbone.trigger('custom_event'); }, 3000);

// var myObj = {};

// _.extend(myObj, Backbone.Events);

// myObj.on('dance', function(msg) { console.log('Object dance! ' + msg); });
// myObj.on('dance:oldie', function(msg) { console.log('Oldies but goodies!') });
// myObj.on('dance:ska', function(msg) { console.log('Ska ska ska') });
// myObj.on('all', function(event) { console.log('I received this event: ' + event); });

// myObj.trigger('dance', 'YESH!');
// myObj.trigger('dance:oldie');
// myObj.trigger('dance:ska');

// var myObj = {};

// _.extend(myObj, Backbone.Events);

// function doAction(msg) {
//   console.log("We are " + msg);
// }

// myObj.on("dance", doAction);
// myObj.on("jump", doAction);
// myObj.on("skip", doAction);

// myObj.trigger("dance", 'just dancing');
// myObj.trigger("dance jump skip", 'are exausted');

// var View = Backbone.View.extend({
//   el: '#todo',

//   events: {
//     'click [type=checkbox]': 'clicked',
//   },

//   initialize: function() {
//     this.$el.click(this.jqueryClicked);

//     this.on('apiEvent', this.callback);
//   },

//   clicked: function(event) {
//     console.log("events handler for " + this.el.outerHTML);
//     this.trigger('apiEvent', event.type);
//   },

//   jqueryClicked: function(event) {
//     console.log("jQuery handler for " + this.outerHTML);
//   },

//   callback: function(eventType) {
//     console.log("event type was " + eventType);
//   }

// });

// var view = new View();

// var TodoRouter = Backbone.Router.extend({
//   routes: {
//     "about": "showAbout",
//     "search/:query": "searchTodos",
//     "search/:query/p:page": "searchTodos",
//     "todo/:id": "viewTodo",
//     "todo/:id/edit": "editTodo"
//   },

//   showAbout: function() {},

//   searchTodos: function(query, page){
//     var page_number = page || 1;
//     console.log("Page number: " + page_number + " of the results contaning the word: " + query);
//   },

//   viewTodo: function(id){
//     console.log("View todo requested for id: " + id);
//     this.navigate("todo/" + id + "/edit", true);
//   },

//   editTodo: function(id){
//     console.log("Edit todo requested for id: " + id);
//   },
// });

// var myTodoRouter = new TodoRouter();
// Backbone.history.start();

var Todo = Backbone.Model.extend({
  defaults: {
    title: '',
    content: '',
    completed: false
  },

  url: "todos",

  initialize: function(){
    console.log("Todo created!");
  }
});

var id_counter = 1;

Backbone.sync = function(method, model) {
  console.log("I've been passed " + method + " with " + JSON.stringify(model));
  if (method === "create")
    model.set('id', id_counter++);
};

var todo = new Todo({
  title: "Washing dishes",
  completed: true
});

todo.save();
