WaterHack.Views.UsageDashboard = Backbone.CompositeView.extend({
  template: JST["usages/usage_dashboard"],
  tagName: "main",
  className: "usage-dashboard container",

  events: {
  },

  initialize: function(options) {
    this.products = options.products;

    $.ajax({
      url: "/api/list_account_ids",
      type: "GET",
      success: function(resp) {
        this.account_ids = resp;
        this.renderViews();
        this.render();
      }.bind(this)
    });

    this.listenTo(this.collection, "sync", this.render);
  },

  onRender: function () {
    setTimeout(function () {
      $(".product-list")
        .on("click", ".product-item", this.useProduct.bind(this));

      Backbone.CompositeView.prototype.onRender.call(this);
    }.bind(this), 0);
  },

  render: function() {
    var content = this.template({
      usages: this.collection,
      account_ids: this.account_ids
    });
    this.$el.html(content);
    this.attachSubviews();
    this.onRender();

    $(".active").removeClass("active");
    $("select").on("change", this.selectAccount.bind(this));

    return this;
  },

  renderViews: function() {
    var usageSidebar = new WaterHack.Views.UsageSidebar({
      collection: this.products,
      account_ids: this.account_ids
    });

    var usageShow = new WaterHack.Views.UsageShow({
      collection: this.collection
    });

    this.addSubview(".dashboard-sidebar", usageSidebar);
    this.addSubview(".dashboard-details", usageShow);
  },

  selectAccount: function(e) {
    var account_id = e.currentTarget.value;

    this.collection.fetch({
      data: {
        account_id: account_id
      }
    });
  },

  useProduct: function(e) {
    e.preventDefault();
    var efficiency = $(e.currentTarget).data("efficiency");
    $(e.currentTarget).toggleClass("active");

    var efficiencies = {};

    $(".active").each(function(i, el) {
      efficiencies[$(el).data("name")] = $(el).data("efficiency");
    });

    var usageData = this.collection.map(function(usage) {
      var totalSavings = 0;
      for (var key in efficiencies) {
        totalSavings += (1 - efficiencies[key]) * usage.get(key) * usage.get("consumption");
      }

      return {
        month: usage.get("month").split(" ")[0],
        account_id: usage.get("account_id"),
        consumption: usage.get("consumption") - totalSavings,
        toilet: usage.get("toilet"),
        shower: usage.get("shower"),
        laundry: usage.get("laundry"),
        kitchen: usage.get("kitchen"),
        other: usage.get("other")
      };
    });
$(".usage-chart-container").empty();
    var margin = {top: 20, right: 30, bottom: 30, left: 40},
        width = $(".usage-chart-container").width() - margin.left - margin.right,
        height = 500 - margin.top - margin.bottom;
    var x = d3.scale.ordinal()
        .rangeRoundBands([0, width], 0.1);
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
          .text("Gallons");

      chart.selectAll(".bar")
          .data(data)
        .enter().append("rect")
          .attr("class", "bar")
          .transition().delay(function(d, i) { return i * 100; }).duration(300)
          .attr("x", function(d) { return x(d.month); })
          .attr("y", function(d) { return y(d.consumption); })
          .attr("height", function(d) { return height - y(d.consumption); })
          .attr("width", x.rangeBand());
    })(usageData);
  }
});
