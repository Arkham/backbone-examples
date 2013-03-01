define( ['backbone', 'models/item'], function(Backbone, Item) {
  var Cart = Backbone.Collection.extend({
    model: Item,
    initialize: function() {
      this.on('add', this.updateSet, this);
    },

    updateSet: function(){
      items = this.models.map(function(item) {
        item.toJSON();
      });
    }
  });

  return Cart;
});
