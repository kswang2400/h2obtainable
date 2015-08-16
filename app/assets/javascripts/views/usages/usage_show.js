WaterHack.Views.UsageShow = Backbone.CompositeView.extend({
  template: JST["usages/usage_show"],

  tagName: "main",

  className: "usage-show",

  initialize: function(options) {
    this.listenTo(this.collection, "sync", this.render);
  },

  render: function() {
    var arr = this.collection.map(function(el) {
      return el.get("consumption");
    });

    var x = d3.scale.linear()
        .domain([0, d3.max(arr)])
        .range([0, 420]);

    var content = this.template({
      usages: this.collection,
      monthCount: this.collection.length
    });
    this.$el.html(content);

    d3.select(".usage-chart-container")
      .selectAll("div")
        .data(arr)
      .enter().append("div")
        .style("width", function(d) { return x(d) + "px"; })
        .text(function(d) { return d; });

    return this;
  }
});
