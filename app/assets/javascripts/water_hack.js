window.WaterHack = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    var $rootEl = $("#main");

    console.log("hi kevin");
    Backbone.history.start();
  }
};

$(document).ready(function(){
  WaterHack.initialize();
});
