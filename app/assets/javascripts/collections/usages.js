WaterHack.Collections.Usages = Backbone.Collection.extend({
  url: "/api/usages",

  model: WaterHack.Models.Usage,

  getOrFetch: function (id) {
    var usage = this.get(id);

    if (usage) {
      usage.fetch();
    } else {
      usage = new WaterHack.Models.Usage({ id: id });
      usage.fetch({
        success: function () {
          this.add(usage);
        }.bind(this)
      });
    }

    return usage;
  }
});
