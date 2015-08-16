WaterHack.Views.UsageSidebar = Backbone.CompositeView.extend({
  template: JST["usages/usage_sidebar"],

  initialize: function(options) {
    this.account_ids = options.account_ids;

    this.listenTo(this.collection, "sync", this.render);
  },

  onRender: function () {
    setTimeout(function () {
      $(".product-list")
        .on("click", "li.product-item", this.useProduct.bind(this));
      Backbone.CompositeView.prototype.onRender.call(this);
    }.bind(this), 0);
  },

  render: function() {
    var content = this.template({
      account_ids: this.account_ids,
      products: this.collection
    });
    this.$el.html(content);
    this.onRender();

    return this;
  },

  useProduct: function(e) {
    e.preventDefault();
    var efficiency = $(e.currentTarget).data("efficiency");
    
  }
});
