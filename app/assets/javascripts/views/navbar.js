WaterHack.Views.Navbar = Backbone.CompositeView.extend({
  template: JST["navbar"],
  tagName: "nav",
  className: "waterhack-navbar",

  initialize: function(options) {
    this.router = options.router;
  },

  render: function() {
    var content = this.template();
    this.$el.html(content);

    return this;
  }
});
