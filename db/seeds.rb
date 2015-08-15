# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

require "csv"

csv_monthly = CSV.read("#{Rails.root}/app/assets/data/monthly_data.csv")
csv_hourly = CSV.read("#{Rails.root}/app/assets/data/anon_reads.csv")
# csv_monthly = CSV.read("#{Rails.root}/app/data/assets/monthly_data.csv")
# csv_monthly = CSV.read("#{Rails.root}/app/data/assets/monthly_data.csv")
# csv_monthly = CSV.read("#{Rails.root}/app/data/assets/monthly_data.csv")

csv_monthly.each do |row|
  next if row[0] == "TIMESTAMP"

  month = row[0]
  account_id = row[1]
  consumption = row[2]

  Usage.create(
    month: month,
    account_id: account_id,
    consumption: consumption
  )
end

csv_hourly.each do |row|
  next if row[0] == "TIMESTAMP"

  hour = row[0]
  account_id = row[1]
  consumption = row[2]

  HourlyUsage.create(
    hour: hour,
    account_id: account_id,
    consumption: consumption
  )
end