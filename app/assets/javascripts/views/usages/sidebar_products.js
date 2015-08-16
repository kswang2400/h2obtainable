WaterHack.Views.SidebarProducts = Backbone.CompositeView.extend({
  template: JST["usages/sidebar_products"],
  tagName: "ul",
  className: "product-list col-xs-12",

  initialize: function() {
    this.listenTo(this.collection, "sync", this.render);
  },

  render: function() {
    var content = this.template({
      products: this.collection
    });
    this.$el.html(content);

    return this;
  }
});
