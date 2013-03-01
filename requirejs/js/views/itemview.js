define( ['underscore', 'backbone'], function(_, Backbone) {
  var ItemView = Backbone.View.extend({
    tagName: 'div',
    className: 'item-wrap',
    template: _.template($('#item-template').html()),

    render: function() {
      this.$el.html(this.template(this.model.toJSON()));
      return this;
    }
  });

  return ItemView;
});
