WaterHack.Views.DevApi = Backbone.View.extend({
  template: JST["dev_api"],
  
  render: function () {
    var content = this.template();
    this.$el.html(content);
    return this;
  }
})