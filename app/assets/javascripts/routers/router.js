WaterHack.Routers.Router = Backbone.Router.extend({
  initialize: function(options) {
    this.$rootEl = options.$rootEl;
    this.usages = options.usages;
    this.products = options.products;
  },

  routes: {
    "": "something",
    "usages/:id": "usageShow"
  },

  usageShow: function(id) {
    var usage = this.usages.getOrFetch(id);

    var usageShowView = new WaterHack.Views.UsageShow({
      model: usage
    });

    this._swapView(usageShowView);
  },

  _swapView: function(view) {
    this._currentView && this._currentView.remove();
    this._currentView = view;
    this.$rootEl.html(view.$el);
    view.render();
  }
});
