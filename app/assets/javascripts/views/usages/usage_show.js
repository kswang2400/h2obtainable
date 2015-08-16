WaterHack.Views.UsageShow = Backbone.CompositeView.extend({
  template: JST["usages/usage_show"],

  tagName: "main",

  className: "usage-show",

  initialize: function() {
    this.collection.fetch();

    this.listenTo(this.collection, "sync", this.render);
  },

  render: function() {
    var content = this.template({
      usages: this.collection
    });
    this.$el.html(content);

    return this;
  }
});
