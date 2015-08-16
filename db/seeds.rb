
require "csv"

csv_monthly = CSV.read("#{Rails.root}/app/assets/data/monthly_data.csv")
# csv_hourly = CSV.read("#{Rails.root}/app/assets/data/anon_reads.csv")   # too many rows
# csv_monthly = CSV.read("#{Rails.root}/app/data/assets/monthly_data.csv")
# csv_monthly = CSV.read("#{Rails.root}/app/data/assets/monthly_data.csv")
# csv_monthly = CSV.read("#{Rails.root}/app/data/assets/monthly_data.csv")

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
