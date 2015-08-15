WaterHack.Collections.Products = Backbone.Collection.extend({
  url: "/api/products",

  model: WaterHack.Models.Product,

  getOrFetch: function (id) {
    var product = this.get(id);

    if (product) {
      product.fetch();
    } else {
      product = new WaterHack.Models.Product({ id: id });
      product.fetch({
        success: function () {
          this.add(product);
        }.bind(this)
      });
    }

    return product;
  }
});
