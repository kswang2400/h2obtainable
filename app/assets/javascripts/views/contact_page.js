WaterHack.Views.ContactPage = Backbone.CompositeView.extend({
  template: JST["contact_page"],

  className: "contact-page",

  initialize: function() {
  },

  render: function() {
    var content = this.template();
    this.$el.html(content);

    return this;
  }
});
