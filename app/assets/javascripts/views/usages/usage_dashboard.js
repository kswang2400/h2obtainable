WaterHack.Views.UsageDashboard = Backbone.CompositeView.extend({
  template: JST["usages/usage_dashboard"],
  tagName: "main",
  className: "usage-dashboard container",

  initialize: function(options) {
    $.ajax({
      url: "/api/list_account_ids",
      type: "GET",
      success: function(resp) {
        this.account_ids = resp;
        this.renderViews();
        this.render();
      }.bind(this)
    });

    this.listenTo(this.collection, "sync", this.render);
  },

  render: function() {
    var content = this.template({
      usages: this.collection,
      account_ids: this.account_ids
    });
    this.$el.html(content);
    this.attachSubviews();

    return this;
  },

  renderViews: function () {
    var usageSidebar = new WaterHack.Views.UsageSidebar({
      account_ids: this.account_ids
    });

    var usageShow = new WaterHack.Views.UsageShow({
      collection: this.collection
    });

    this.addSubview(".dashboard-sidebar", usageSidebar);
    this.addSubview(".dashboard-details", usageShow);
  }
});
