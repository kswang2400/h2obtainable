WaterHack.Routers.Router = Backbone.Router.extend({
  initialize: function(options) {
    this.$rootEl = options.$rootEl;
    this.usages = options.usages;
    this.products = options.products;
  },

  routes: {
    "developers": "devApi",
    "map": "renderMap",
    "usages": "usageDashboard",
    "contact": "contactUs"
  },

  contactUs: function() {
    var contactPage = new WaterHack.Views.ContactPage();

    this._swapView(contactPage);
  },

  devApi: function() {
    var view = new WaterHack.Views.Developers();

    this._swapView(view);
  },

  renderMap: function() {
    var view = new WaterHack.Views.RenderMap();

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
