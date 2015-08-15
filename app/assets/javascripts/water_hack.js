window.WaterHack = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    var $rootEl = $("#main");
    var usages = new WaterHack.Collections.Usages();
    var products = new WaterHack.Collections.Products();

    var router = new WaterHack.Routers.Router({
      $rootEl: $rootEl,
      usages: usages,
      products: products
    });

    Backbone.history.start();
  }
};

$(document).ready(function(){
  WaterHack.initialize();
});
