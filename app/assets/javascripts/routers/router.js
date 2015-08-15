WaterHack.Routers.Router = Backbone.Router.extend({
  initialize: function(options) {
    this.$rootEl = options.$rootEl;
    this.usages = options.usages;
    this.products = options.products;
    this.account_ids = options.account_ids;
  },

  routes: {
    "": "something",
    "usages": "usageDashboard"
  },

  usageDashboard: function() {
    var usageDashboardView = new WaterHack.Views.UsageDashboard({
      collection: this.usages,
      accounts: this.account_ids
    });

    this._swapView(UsageDashboardView);
  },

  _swapView: function(view) {
    this._currentView && this._currentView.remove();
    this._currentView = view;
    this.$rootEl.html(view.$el);
    view.render();
  }
});
