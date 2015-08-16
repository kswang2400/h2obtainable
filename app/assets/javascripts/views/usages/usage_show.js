WaterHack.Views.UsageShow = Backbone.CompositeView.extend({
  template: JST["usages/usage_show"],

  tagName: "main",

  className: "usage-show",

  initialize: function(options) {
    this.listenTo(this.collection, "sync", this.render);
  },

  render: function() {
    var data = this.collection.map(function(usage) {
      return {
        month: usage.get("month").split(" ")[0],
        account_id: usage.get("account_id"),
        consumption: usage.get("consumption"),
        toilet: usage.get("toilet"),
        shower: usage.get("shower"),
        laundry: usage.get("laundry"),
        kitchen: usage.get("kitchen"),
        other: usage.get("other")
      }
    });

    var content = this.template({
      usages: this.collection,
      monthCount: this.collection.length
    });
    this.$el.html(content);

    var margin = {top: 20, right: 30, bottom: 30, left: 40},
        width = 960 - margin.left - margin.right,
        height = 500 - margin.top - margin.bottom;

    var x = d3.scale.ordinal()
        .rangeRoundBands([0, width], .1);

    var y = d3.scale.linear()
        .range([height, 0]);

    var xAxis = d3.svg.axis()
        .scale(x)
        .orient("bottom");

    var yAxis = d3.svg.axis()
        .scale(y)
        .orient("left");

    var chart = d3.select(".usage-chart-container")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
      .append("g")
        .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

    (function(data) {
      x.domain(data.map(function(d) { return d.month; }));
      y.domain([0, d3.max(data, function(d) { return d.consumption; })]);

      chart.append("g")
          .attr("class", "x axis")
          .attr("transform", "translate(0," + height + ")")
          .call(xAxis);

      chart.append("g")
          .attr("class", "y axis")
          .call(yAxis)
        .append("text")
          .attr("transform", "rotate(-90)")
          .attr("y", 6)
          .attr("dy", ".71em")
          .style("text-anchor", "end")
          .text("Consumption");

      chart.selectAll(".bar")
          .data(data)
        .enter().append("rect")
          .attr("class", "bar")
          .attr("x", function(d) { return x(d.month); })
          .attr("y", function(d) { return y(d.consumption); })
          .attr("height", function(d) { return height - y(d.consumption); })
          .attr("width", x.rangeBand());
    })(data);

    return this;
  }
});
