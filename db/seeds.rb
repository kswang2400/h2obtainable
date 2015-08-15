# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

require "csv"

csv = CSV.read("#{Rails.root}/app/assets/monthly_data.csv")

csv.each do |row|
  next if row[0] == "TIMESTAMP"

  month = row[0]
  account_id = row[1]
  consumption = row[2]

  p month, account_id, consumption

  Usage.create(
    month: month,
    account_id: account_id,
    consumption: consumption,
  )
end
