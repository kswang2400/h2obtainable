WaterHack.Views.RenderMap = Backbone.View.extend({
  template: JST["render_map"],
  className: "map-content",

  render: function () {
    var content = this.template();
    this.$el.html(content);

    require(["esri/map", "dojo/domReady!"], function(Map) { 
      var map = new Map("mapDiv", {
        center: [-118, 34.5],
        zoom: 8,
        basemap: "topo"
      });
    });

    return this;
  }
});