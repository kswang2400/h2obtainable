WaterHack.Views.UsageSidebar = Backbone.CompositeView.extend({
  template: JST["usages/usage_sidebar"],

  initialize: function(options) {
    this.account_ids = options.account_ids;
  },

  render: function() {
    var content = this.template({
      account_ids: this.account_ids
    });
    this.$el.html(content);

    return this;
  }
});
