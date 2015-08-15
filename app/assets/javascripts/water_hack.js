window.WaterHack = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    var $rootEl = $("#main");
    var usages = new WaterHack.Collections.Usages();
    var products = new WaterHack.Collections.Products();

    var account_ids = $.ajax({
      url: "/api/list_account_ids",
      type: "GET",
      success: function() {
        console.log("got acct ids");
      }
    });

    var router = new WaterHack.Routers.Router({
      $rootEl: $rootEl,
      usages: usages,
      products: products,
      account_ids: account_ids
    });

    // var navbar = new WaterHack.Views.Navbar({
    //   router: router
    // });
    //
    // $("body").prepend(navbar.$el);
    // navbar.render();
    //
    Backbone.history.start();
  }
};

$(document).ready(function(){
  WaterHack.initialize();
});
