WaterHack.Views.Developers = Backbone.View.extend({
  template: JST["developers"],
  className: "developers-page",
  
  render: function () {
    var content = this.template();
    this.$el.html(content);
    return this;
  }
})