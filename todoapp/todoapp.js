Todos = new Meteor.Collection('todos');

if (Meteor.isClient) {
  Template.todosPanel.helpers({
    items: function() {
      return Todos.find();
    }
  });
}

if (Meteor.isServer) {
}
