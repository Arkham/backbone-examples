require.config({
  paths: {
    'underscore': 'lib/underscore',
    'backbone': 'lib/backbone',
    'jquery': 'lib/jquery'
  },
  shim: {
    'underscore': {
      exports: '_'
    },
    'backbone': {
      deps: ['underscore', 'jquery'],
      exports: 'Backbone'
    }
  },
});

var items = [
  { title: "Macbook Air", price: 799 },
  { title: "Macbook Pro", price: 999 },
  { title: "The new iPad", price: 399 },
  { title: "Magic Mouse", price: 50 },
  { title: "Cinema Display", price: 799 }
];

require(
  [
    "jquery",
    "underscore",
    "backbone",
    "views/cartcollectionview"
  ],
  function($, _, B, CartCollectionView) {
    $(function() {
      new CartCollectionView(items);
    });
  }
);
