WaterHack.Views.UsageSidebar = Backbone.CompositeView.extend({
  template: JST["usages/usage_sidebar"],

  initialize: function(options) {
    this.account_ids = options.account_ids;

    var sidebarProducts = new WaterHack.Views.SidebarProducts({
      collection: this.collection
    });
    this.addSubview(".product-item-list", sidebarProducts);

    this.listenTo(this.collection, "sync", this.render);
  },

  render: function() {
    var content = this.template({
      account_ids: this.account_ids,
      products: this.collection
    });
    this.$el.html(content);
    this.attachSubviews();

    return this;
  }
});
