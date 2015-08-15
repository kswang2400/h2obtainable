WaterHack.Routers.Router = Backbone.Router.extend({
  initialize: function(options) {
    this.$rootEl = options.$rootEl;
    this.usages = options.usages;
    this.products = options.products;
  },

  routes: {
    "": "something",
    "usages": "usageDashboard"
  },

  usageDashboard: function() {
    var usageDashboardView = new WaterHack.Views.UsageDashboard({
      collection: this.usages
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
