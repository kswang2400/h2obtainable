
require "csv"

csv_monthly = CSV.read("#{Rails.root}/app/assets/data/monthly_data.csv")

csv_monthly.each do |row|
  next if row[0] == "TIMESTAMP"

  month = row[0]
  account_id = row[1]
  consumption = (row[2].to_i * 7.48052).round(2)
  toilet = row[3]
  shower = row[4]
  laundry = row[5]
  kitchen = row[6]
  other = row[7]

  Usage.create(
    month: month,
    account_id: account_id,
    consumption: consumption,
    toilet: toilet,
    shower: shower,
    laundry: laundry,
    kitchen: kitchen,
    other: other
  )
end

Product.create(name: "toilet", efficiency: 0.5, image_url: "http://www.plumbingproducts.com/images/pp-leaky-toilet.jpg")
Product.create(name: "shower", efficiency: 0.6, image_url: "http://energy.gov/sites/prod/files/styles/borealis_article_hero_respondlarge/public/shower_7898792.jpg?itok=3UhYrBmh")
Product.create(name: "laundry", efficiency: 0.44, image_url: "http://www.dictionar.co/wp-content/uploads/2015/05/log-in-sign-up-with-amazing-ideas-and-how-to-wash-laundry.jpg")
Product.create(name: "kitchen", efficiency: 0.17, image_url: "http://www.epfixit.com/wp-content/uploads/2014/11/RETRODWB_BK_DISHWASHER_OPD_L.jpg?i=13402?i=87558")
Product.create(name: "other", efficiency: 0.7, image_url: "http://www.go4floors.com/images/faucets/dreamline-faucet-single-hole-dlfhd-509-ch.jpg")
