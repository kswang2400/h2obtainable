
require "csv"

csv_monthly = CSV.read("#{Rails.root}/app/assets/data/monthly_data.csv")

csv_monthly.each do |row|
  next if row[0] == "TIMESTAMP"

  month = row[0]
  account_id = row[1]
  consumption = row[2]
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

Product.create(name: "toilet", efficiency: 0.5)
Product.create(name: "shower", efficiency: 0.6)
Product.create(name: "laundry", efficiency: 0.44)
Product.create(name: "kitchen", efficiency: 0.17)
Product.create(name: "other", efficiency: 0.7)
