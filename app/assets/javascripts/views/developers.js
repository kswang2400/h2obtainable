WaterHack.Views.Developers = Backbone.View.extend({
  template: JST["developers"],
  
  render: function () {
    var content = this.template();
    this.$el.html(content);
    return this;
  }
})