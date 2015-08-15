WaterHack.Views.UsageShow = Backbone.CompositeView.extend({
  template: JST["usages/usage_show"],

  tagName: "main",

  className: "usage-show",

  initialize: function() {
    this.listenTo(this.model, "sync", this.render);
  },

  render: function() {
    var content = this.template({
      usage: this.model
    });
    this.$el.html(content);

    return this;
  }
});
