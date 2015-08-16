WaterHack.Routers.Router = Backbone.Router.extend({
  initialize: function(options) {
    this.$rootEl = options.$rootEl;
    this.usages = options.usages;
    this.products = options.products;
  },

  routes: {
    "developers": "devApi",
    "usages": "usageDashboard"
  },

  devApi: function() {
    var view = new WaterHack.Views.Developers();

    this._swapView(view);
  },

  usageDashboard: function() {
    var usageDashboardView = new WaterHack.Views.UsageDashboard({
      collection: this.usages,
      products: this.products
    });

    this._swapView(usageDashboardView);
  },

  _swapView: function(view) {
    this._currentView && this._currentView.remove();
    this._currentView = view;
    this.$rootEl.html(view.$el);
    view.render();
  }
});
