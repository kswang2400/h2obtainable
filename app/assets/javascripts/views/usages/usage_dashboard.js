WaterHack.Views.UsageDashboard = Backbone.CompositeView.extend({
  template: JST["usages/usage_dashboard"],

  tagName: "main",

  className: "usage-dashboard",

  initialize: function() {
    this.listenTo(this.accounts, "sync", this.render);
  },

  render: function() {
    var content = this.template({
      usages: this.collection
    });
    this.$el.html(content);

    return this;
  }
});
