window.WaterHack = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    // var $rootEl = $("#main");
    // var data = new WaterHack.Collections.Datum();

    // var router = new CuteOrBoot.Routers.Router({
    //   $rootEl: $rootEl,
    //   users: users
    // });

    // var navbar = new CuteOrBoot.Views.Navbar({
    //   router: router
    // });

    // $("div.cuteorboot").prepend(navbar.$el);
    // navbar.render();

    console.log("hi kevin");
    Backbone.history.start();
  }
};

$(document).ready(function(){
  WaterHack.initialize();
});